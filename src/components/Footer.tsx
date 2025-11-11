import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full mt-5 border-t border-border bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/25">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">Cam Johnson</h3>
            <p className="text-sm text-muted-foreground">
              Building exceptional digital experiences
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-widest">
              Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/cjohnson10176"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/camjohnson-code/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-widest">
              Contact
            </h4>
            <p className="text-sm text-muted-foreground">
              <a
                href="mailto:cjohnson10176@gmail.com"
                className="hover:text-foreground transition-colors"
              >
                cjohnson10176@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/chat"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Chat
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Cam Johnson. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
