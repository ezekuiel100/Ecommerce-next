"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function NewProductPage() {
  const [princeInCents, setPrinceInCents] = useState<number>();

  return (
    <>
      <h1 className="text-2xl">Add Product</h1>
      <form className="space-y-8">
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
            onChange={(e) =>
              setPrinceInCents(Number(e.target.value) || undefined)
            }
          />
        </div>

        <div className="">{(princeInCents || 0) / 100}</div>
      </form>
    </>
  );
}
