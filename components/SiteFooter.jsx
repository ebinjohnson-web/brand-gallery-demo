import Link from "next/link";
export default function SiteFooter() {
  return (
    <footer className="quiet-footer">
      <div className="quiet-footer-top">
        <strong>Static Pulse</strong>
        <nav aria-label="Footer">
          <a href="#services">Services</a>
          <a href="#work">Process</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <p className="quiet-footer-note">
        © 2026 · Fictional concept. Stock photography for illustration.
      </p>
      <details className="photo-credits">
        <summary>Photo credits</summary>
        <ul>
          <li>
            <a
              href="https://www.pexels.com/photo/portrait-of-a-graphic-artist-in-a-studio-with-posters-on-walls-6620994/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Antoni Shkraba · studio work
            </a>
          </li>
          <li>
            <a
              href="https://www.pexels.com/photo/graphic-designer-making-a-design-5428676/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ivan S · studio sketch
            </a>
          </li>
        </ul>
        <p>
          Photography from{" "}
          <a
            href="https://www.pexels.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pexels
          </a>
          , used under the{" "}
          <a
            href="https://www.pexels.com/license/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pexels License
          </a>
          . The people pictured are not presented as this fictional
          organisation’s staff or members.
        </p>
      </details>
    </footer>
  );
}
