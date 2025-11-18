"use server";

import { connectDb } from "../db";
import Product from "../db/models/product.model";

export const getAllCategories = async () => {
  await connectDb();
  const categories = await Product.find({ isPublished: true }).distinct(
    "category"
  );
  return categories;
};

export const getProductsForCard = async ({
  tag,
  limit = 4,
}: {
  tag: string;
  limit?: number;
}) => {
  await connectDb();
  const products = await Product.find(
    {
      tags: { $in: [tag] },
      isPublished: true,
    },
    {
      name: 1,
      href: { $concat: ["/product/", "$slug"] },
      image: { $arrayElemAt: ["$images", 0] },
    }
  )
    .sort({ createdAt: "desc" })
    .limit(limit);

  return JSON.parse(JSON.stringify(products)) as {
    name: string;
    href: string;
    image: string;
  }[];
};
// GET PRODUCTS BY TAG
export const getProductsByTag = async ({
  tag,
  limit = 10,
}: {
  tag: string;
  limit?: number;
}) => {
  await connectDb();
  const products = await Product.find({
    tags: { $in: [tag] },
    isPublished: true,
  })
    .sort({ createdAt: "desc" })
    .limit(limit);
  return JSON.parse(JSON.stringify(products)) as IProduct[]
};
