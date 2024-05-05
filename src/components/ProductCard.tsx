import { formatCurrency } from "@/lib/format";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";

export function ProductCard({
  id,
  name,
  priceInCents,
  description,
  imagePath,
}) {
  return (
    <Card className="flex overflow-hidden flex-col">
      <div className="relative w-full h-auto aspect-video">
        <Image src={imagePath} fill alt={name}></Image>
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{formatCurrency(priceInCents / 100)}</CardDescription>
      </CardHeader>

      <CardContent>
        <p>{description}</p>
      </CardContent>

      <CardFooter>
        <Button asChild size={"lg"}></Button>
      </CardFooter>
    </Card>
  );
}
