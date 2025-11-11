import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between px-6 md:px-10 lg:px-16">
        <Link to="/" className="text-lg font-bold tracking-tight">
          Cam Johnson
        </Link>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <nav className="flex items-center gap-6 text-sm">
            <Link
              to="/"
              className={`transition-colors hover:text-foreground/80 ${
                location.pathname === "/"
                  ? "text-foreground"
                  : "text-foreground/60"
              }`}
            >
              Home
            </Link>
            <Link
              to="/chat"
              className={`transition-colors hover:text-foreground/80 ${
                location.pathname === "/chat"
                  ? "text-foreground"
                  : "text-foreground/60"
              }`}
            >
              Chat
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
