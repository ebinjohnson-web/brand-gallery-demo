import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import PhotoHero from "../components/PhotoHero";
import { DemoForm } from "../components/Interactive";
import { asset } from "../lib/site";
export const metadata = {
  title: "Static Pulse | Make it bold.",
  description:
    "A fictional creative studio concept with large photography, minimal copy, and brand, print, and digital services.",
};
export default function Page() {
  return (
    <div className="image-led-page pulse-photos">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <PhotoHero
          image="studio-work.jpg"
          alt="A graphic artist working with paper and design tools in a print studio"
          kicker="Static Pulse · Sarnia / Everywhere"
          title="Make it bold."
        >
          <div className="photo-actions">
            <a className="photo-button" href="#work">
              Inside the process ↘
            </a>
            <a className="photo-button outline" href="#contact">
              Start a conversation
            </a>
          </div>
        </PhotoHero>
        <div className="photo-ribbon" id="services">
          <span>Identity.</span>
          <span>Print.</span>
          <span>Digital.</span>
          <span>Built to be seen.</span>
        </div>
        <section className="photo-section" id="work">
          <div className="photo-section-head">
            <div>
              <span className="photo-kicker">From idea to impact</span>
              <h2>Good work starts here.</h2>
            </div>
          </div>
          <div className="photo-duo">
            <div className="photo-card">
              <img
                src={asset("assets/photos/studio-sketch.jpg")}
                alt="A designer drawing ideas by hand at a colourful desk"
                width="2000"
                height="3000"
                loading="lazy"
              />
              <div className="photo-card-caption">
                <strong>Think it through.</strong>
                <span>01</span>
              </div>
            </div>
            <div className="photo-card">
              <img
                src={asset("assets/photos/studio-work.jpg")}
                alt="A hands-on print and design workspace"
                width="2000"
                height="1334"
                loading="lazy"
              />
              <div className="photo-card-caption">
                <strong>Make it matter.</strong>
                <span>02</span>
              </div>
            </div>
          </div>
        </section>
        <section className="photo-callout" id="contact">
          <div>
            <span className="photo-kicker">Your next project</span>
            <h2>Let’s make some noise.</h2>
          </div>
          <a className="photo-button" href="mailto:hello@staticpulse.ca">
            Say hello ↗
          </a>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
