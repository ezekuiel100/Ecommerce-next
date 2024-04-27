"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { addProduct } from "../../_actions/products";

export default function NewProductPage() {
  const [princeInCents, setPrinceInCents] = useState<string>("");

  return (
    <>
      <h1 className="text-2xl">Add Product</h1>
      <form action={addProduct} className="space-y-8">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="priceInCents">Price in cents</Label>
          <Input
            type="number"
            id="priceInCents"
            name="priceInCents"
            required
            value={princeInCents}
            onChange={(e) => setPrinceInCents(e.target.value)}
          />
        </div>

        <div className="">{Number(princeInCents) / 100}</div>

        <div className="space-y-2">
          <Label htmlFor="description">Description </Label>
          <Textarea id="description" name="description" required></Textarea>
        </div>

        <div className="space-y-2">
          <Label htmlFor="feli">Name</Label>
          <Input type="file" id="file" name="file" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="image">Image</Label>
          <Input type="file" id="image" name="image" required />
        </div>

        <Button type="submit">Save</Button>
      </form>
    </>
  );
}
