import { footerColumns } from "@/data/content";

export function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a className="wordmark" href="#top">
            luma<span>.</span>
          </a>
          <p>
            Practical learning for curious
            <br />
            people.
          </p>
        </div>
        <div className="footer-columns">
          {footerColumns.map((column) => (
            <div className="footer-column" key={column.title}>
              <h3>{column.title}</h3>
              {column.links.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© 2026 Luma Learning</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
