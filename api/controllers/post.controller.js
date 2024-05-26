import prisma from "../lib/prisma.js";

export const getPosts = async (req, res) => {
    const query = req.query;

    try {
        const posts = await prisma.post.findMany({
            where: {
                city: query.city ? {
                    contains: query.city,
                    mode: 'insensitive'
                } : undefined,
                type: query.type || undefined,
                property: query.property || undefined,
                bedroom: parseInt(query.bedroom) || undefined,
                price: {
                    gte: parseInt(query.minPrice) || 0,
                    lte: parseInt(query.maxPrice) || 10000000
                }
            }
        });
        res.status(200).json(posts);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to get posts!" })
    }
}

export const getPost = async (req, res) => {
    const id = req.params.id;

    try {
        const post = await prisma.post.findUnique({
            where: { id },
            include: {
                postDetail: true,
                user: {
                    select: {
                        username: true,
                        avatar: true
                    }
                },
            }
        });
        res.status(200).json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to get post!" })
    }
}

export const addPost = async (req, res) => {
    const body = req.body;
    const tokenUserId = req.userId;

    try {
        const newPost = await prisma.post.create({
            data: {
                ...body.postData,
                userId: tokenUserId,
                postDetail: {
                    create: body.postDetail
                }
            }
        });
        res.status(200).json(newPost);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to create post!" })
    }
}


export const updatePost = async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId;
    const { password, avatar, ...inputs } = req.body;

    if (id !== tokenUserId) {
        return res.status(403).json({ message: "Not Authorized!" })
    }

    let updatedPassword = null;

    try {
        if (password) {
            updatedPassword = await bcrypt.hash(password, 10);
        }

        const updatedUser = await prisma.user.update({
            where: { id },
            data: {
                ...inputs,
                ...(updatedPassword && { password: updatedPassword }),
                ...(avatar && { avatar })
            }
        });

        const { password: userPassword, ...rest } = updatedUser;
        res.status(200).json(rest);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to update users!" })
    }
}


export const deletePost = async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId;

    try {
        const post = await prisma.post.findUnique({
            where: { id }
        });

        if (post.userId !== tokenUserId) {
            return res.status(403).json({ message: "Not Authorized!" })
        }

        await prisma.post.delete({
            where: { id }
        })
        res.status(200).json({ message: "Post deleted!" })

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to delete post!" })
    }
}