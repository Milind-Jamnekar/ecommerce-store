import { ShoppingBag } from "lucide-react";
import Button from "./ui/Button";

const NavbarAction = () => {
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag size={20} color="white" />
        <span className="ml-auto text-sm font-medium text-white">0</span>
      </Button>
    </div>
  );
};

export default NavbarAction;
