import { connectDb } from ".";
import Product from "./models/product.model";
import { cwd } from "process";
import { loadEnvConfig } from "@next/env";
import data from "../data";

loadEnvConfig(cwd());

const main = async () => {
  try {
    const { products } = data;
    await connectDb(process.env.MONGO_URI!);
    await Product.deleteMany();
    const createdProducts = await Product.insertMany(products);
    console.log({ createdProducts, message: "Seed data created successfully" });
    process.exit(0);
  } catch (error) {
    console.error(error);
    throw new Error("Seed data creation failed");
  }
};

main();
