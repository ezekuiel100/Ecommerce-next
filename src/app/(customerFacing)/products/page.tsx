import { ProductCard } from "@/components/ProductCard";
import db from "@/db/db";

function getProducts() {
  return db.product.findMany({
    where: { isAvailableForPurchase: true },
    orderBy: { name: "asc" },
  });
}

export default async function ProductsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {(await getProducts()).map((product) => (
        <ProductCard key={product.id} {...product}></ProductCard>
      ))}
    </div>
  );
}
