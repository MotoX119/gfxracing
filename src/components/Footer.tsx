import BrandBadge from "./BrandBadge";
import BrandText from "./BrandText";

const footerLinks = [
  { href: "#home",       label: "Home"            },
  { href: "#schedule",   label: "Schedule"        },
  { href: "#about",      label: "About"           },
  { href: "#membership", label: "Membership"      },
  { href: "#classes",    label: "Classes & Rules" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-track border-t-2 border-red-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <BrandBadge className="h-6 w-7" />
              <BrandText className="h-6" />
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed mt-1">
              Indoor 1/28 &middot; 1/10 &amp; 1/12<br />
              R/C Racing Tracks
            </p>
          </div>

          {/* Address */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-red-500 mb-2">Location</p>
            <address className="not-italic text-sm text-zinc-400 leading-relaxed">
              2481 Kaladar Ave<br />
              Ottawa, Ontario &mdash; Unit 103
            </address>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <p className="text-[10px] font-bold uppercase tracking-widest text-red-500 mb-2">Quick Links</p>
            <ul className="space-y-1.5" role="list">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-zinc-600">
            &copy; {year} GFX&#9733;RACING. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
