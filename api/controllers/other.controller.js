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

export const getAllCities = async (req, res) => {
  try {
    const cities = await prisma.post.findMany({
      select: {
        city: true,
      },
      distinct: ["city"],
    });
    const cityList = cities.map((post) => ({
      value: post.city,
      label: post.city,
    }));

    res.status(200).json({ cities: cityList });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to retrieve cities!" });
  }
};
