import { Nav, NavLink } from "@/components/Nav";
import { ReactNode } from "react";

export default function CustomerLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav>
        <NavLink href={"/"}>Home</NavLink>
        <NavLink href={"/products"}>Products</NavLink>
        <NavLink href={"/orders"}>My Orders</NavLink>
      </Nav>
      <div className="container my-6">{children}</div>
    </>
  );
}
