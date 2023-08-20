import type { FC } from "react";
import { cn } from "~/lib/utils";
import type { Category } from "../types/Billboard";
import { Link, useLocation } from "@remix-run/react";

interface MainNavProps {
  data: Category[];
}

const MainNav: FC<MainNavProps> = ({ data }) => {
  const location = useLocation();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: location.pathname.startsWith(`/category/${route.id}`),
  }));

  return (
    <nav className="mx-4 flex items-center space-x-4 lg:space-x-6">
      {routes.map(({ href, active, label }) => (
        <Link
          key={href}
          to={href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            active ? "text-black font-semibold" : "text-muted"
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};
export default MainNav;
