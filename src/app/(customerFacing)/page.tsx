import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import db from "@/db/db";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function getNewestProducts() {
  const products = db.product.findMany({
    where: { isAvailableForPurchase: true },
    orderBy: { createdAt: "desc" },
    take: 6,
  });
  return products;
}

async function getNMostPopular() {
  const products = db.product.findMany({
    where: { isAvailableForPurchase: true },
    orderBy: { Order: { _count: "desc" } },
    take: 6,
  });
  return products;
}

export default function HomePage() {
  return (
    <main className="space-y-4">
      <ProductGridSection
        title={"Most Popular"}
        productsFetcher={getNMostPopular}
      />
      <ProductGridSection
        title={"Newest Products"}
        productsFetcher={getNewestProducts}
      />
    </main>
  );
}

async function ProductGridSection({ productsFetcher, title }) {
  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <h2 className="text-3xl font-bold">{title}</h2>
        <Button variant={"outline"} asChild>
          <Link href={"/products"} className="space-x-2">
            <span>View All</span>
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {(await productsFetcher()).map((product) => (
          <ProductCard key={product.id} {...product}></ProductCard>
        ))}
      </div>
    </div>
  );
}
