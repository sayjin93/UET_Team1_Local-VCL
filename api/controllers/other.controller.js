import prisma from "../lib/prisma.js";

export const countAllPosts = async (req, res) => {
  try {
    const postCount = await prisma.post.count();
    res.status(200).json({ count: postCount });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to count posts!" });
  }
};
