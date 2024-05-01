import db from "@/db/db";
import ProductForm from "../../_components/ProductForm";

export default async function EditProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await db.product.findUnique({ where: { id } });

  return (
    <>
      <h1 className="text-2xl">Edit Product</h1>
      <ProductForm product={product} />
    </>
  );
}
