import { Link } from "@remix-run/react";
import MainNav from "~/components/MainNav";
import Container from "~/components/ui/Container";
import type { Category } from "../types/Billboard";
import NavbarAction from "./NavbarAction";

const Navbar = ({ categories }: { categories: Category[] }) => {
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link to="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">Store</p>
          </Link>
          <MainNav data={categories} />
          <NavbarAction />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
