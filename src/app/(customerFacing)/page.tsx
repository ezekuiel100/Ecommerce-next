import { ProductCard } from "@/components/ProductCard";
import db from "@/db/db";

function getNewestProducts() {
  const products = db.product.findMany({
    where: { isAvailableForPurchase: true },
    orderBy: { Order: { _count: "desc" } },
    take: 6,
  });
  return products;
}

async function getNMostPopular() {}

export default function HomePage() {
  return (
    <main className="space-y-4">
      {/* <ProductGridSection
        title={"Most Popular"}
        productsFetcher={getNMostPopular}
      /> */}
      <ProductGridSection
        title={"Newest Products"}
        productsFetcher={getNewestProducts}
      />
    </main>
  );
}

async function ProductGridSection({ productsFetcher, title }) {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        {(await productsFetcher()).map(
          ({ id, name, priceInCents, description, imagePath }) => {
            return (
              <ProductCard
                key={id}
                name={name}
                priceInCents={priceInCents}
                description={description}
                imagePath={imagePath}
              ></ProductCard>
            );
          }
        )}
      </div>
    </div>
  );
}
