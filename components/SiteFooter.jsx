import Link from "next/link";
import { asset } from "../lib/site";
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand-block">
          <div className="footer-mark">
            <div className="footer-icon">s</div>
          </div>
          <div className="footer-brand-copy">
            <p className="footer-kicker">Static Pulse</p>
            <p className="footer-location">Sarnia, Ontario</p>
          </div>
        </div>
        <div className="footer-contact">
          <p className="footer-label">Contact</p>
          <a href="mailto:hello@staticpulse.ca">hello@staticpulse.ca</a>
        </div>
        <div className="footer-hours">
          <p className="footer-label">Studio Hours</p>
          <div className="footer-hours-list">
            <p>
              <span>Mon–Wed</span>
              <span>10–5</span>
            </p>
            <p>
              <span>Thu</span>
              <span>12–8</span>
            </p>
            <p>
              <span>Fri</span>
              <span>10–5</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
