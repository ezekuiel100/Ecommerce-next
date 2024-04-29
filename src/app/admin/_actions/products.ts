"use server";

import db from "@/db/db";
import fs from "fs/promises";
import { redirect } from "next/navigation";

export async function addProduct(formData: FormData) {
  const data = Object.fromEntries(formData);

  await fs.mkdir("products", { recursive: true });
  const filePath = `products/${crypto.randomUUID()}-${data.file.name}`;
  await fs.writeFile(filePath, Buffer.from(await data.file.arrayBuffer()));

  await fs.mkdir("public/products", { recursive: true });
  const imagePath = `products/${crypto.randomUUID()}-${data.image.name}`;
  await fs.writeFile(imagePath, Buffer.from(await data.image.arrayBuffer()));

  db.product.create({
    data: {
      isAvailableForPurchase: false,
      name: data.name,
      priceInCents: data.priceInCents,
      description: data.description,
      filePath,
      imagePath,
    },
  });

  redirect("/admin/products");
}
