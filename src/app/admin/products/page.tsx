import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import db from "@/db/db";
import { formatCurrency, formatNumber } from "@/lib/format";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CheckCircle2, MoreVertical, XCircle } from "lucide-react";
import Link from "next/link";
import {
  ActiveToggleDropdownItem,
  DeleteDropdownItem,
} from "./_components/ProductActiona";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

export default function AdminProductPage() {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-2xl">Products</h1>
        <Button asChild>
          <Link href={"/admin/products/new"}>Add Product</Link>
        </Button>
      </div>
      <ProductTable />
    </>
  );
}

async function ProductTable() {
  const products = await db.product.findMany({
    select: {
      id: true,
      name: true,
      priceInCents: true,
      isAvailableForPurchase: true,
      _count: { select: { Order: true } },
    },
    orderBy: { name: "asc" },
  });

  if (products.length === 0) return <p>No products found</p>;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-0">
            <span className="sr-only">Avaliable for Purchase</span>
          </TableHead>
          <TableHead className="">Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Orders</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>
              {product.isAvailableForPurchase ? (
                <>
                  <CheckCircle2 />
                </>
              ) : (
                <XCircle />
              )}
            </TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>{formatCurrency(product.priceInCents / 100)}</TableCell>
            <TableCell>{formatNumber(product._count.Order)}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <MoreVertical />
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <a
                        download
                        href={`/admin/products/${product.id}/download`}
                      >
                        Download
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/admin/products/${product.id}/edit`}>
                        Edit
                      </Link>
                    </DropdownMenuItem>
                    <ActiveToggleDropdownItem
                      id={product.id}
                      isAvailableForPurchase={product.isAvailableForPurchase}
                    />
                    <DropdownMenuSeparator />
                    <DeleteDropdownItem
                      id={product.id}
                      disabled={product._count.Order > 0}
                    />
                  </DropdownMenuContent>
                </DropdownMenuTrigger>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
