import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

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

function ProductTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="">Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Orders</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Harry Poter</TableCell>
          <TableCell>100,00</TableCell>
          <TableCell>1</TableCell>
          <TableCell className="w-0">
            <span className="sr-only">Actions</span>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
