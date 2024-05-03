"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { addProduct, editProduct } from "../../_actions/products";
import { formatCurrency } from "@/lib/format";
import { useState } from "react";
import { Product } from "@prisma/client";
import { useFormState } from "react-dom";

export default function ProductForm({ product }: { product?: Product | null }) {
  const [error, action] = useFormState(
    product == null ? addProduct : editProduct.bind(null, product.id),
    {}
  );
  const [princeInCents, setPrinceInCents] = useState<number | undefined>(
    product?.priceInCents
  );

  return (
    <form action={action} className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          defaultValue={product?.name}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="priceInCents">Price in cents</Label>
        <Input
          type="number"
          id="priceInCents"
          name="priceInCents"
          required
          value={princeInCents}
          onChange={(e) => setPrinceInCents(Number(e.target.value))}
        />
      </div>

      <div className="">{formatCurrency(Number(princeInCents) / 100)}</div>

      <div className="space-y-2">
        <Label htmlFor="description">Description </Label>
        <Textarea
          id="description"
          name="description"
          required
          defaultValue={product?.description}
        ></Textarea>
      </div>

      <div className="space-y-2">
        <Label htmlFor="feli">Fil</Label>
        <Input type="file" id="file" name="file" required={product == null} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="image">Image</Label>
        <Input type="file" id="image" name="image" required={product == null} />
      </div>

      <Button type="submit">Save</Button>
    </form>
  );
}
