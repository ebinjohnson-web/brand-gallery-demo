import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { DemoForm, FAQ, Reviews } from "../components/Interactive";
import { asset } from "../lib/site";
export const metadata = {
  title: "Static Pulse — Visual Agency Demo",
  description:
    "Image-heavy one-page creative studio demo with minimal copy, bold tiles, and full-width photography.",
};
export default function Page() {
  return (
    <>
      <div>
        <SiteHeader />
        <main>
          <section className="hero">
            <div className="container pulse-hero">
              <div>
                <span className="pulse-kicker">
                  Independent design studio · Sarnia / Everywhere
                </span>
                <h1 className="pulse-title">
                  Make some
                  <br />
                  <em>visual noise.</em>
                </h1>
                <p>
                  Identity, print, and digital experiences with something to
                  say.
                </p>
                <a className="pulse-cta" href="#services">
                  Explore the studio <span aria-hidden="true">↘</span>
                </a>
              </div>
              <span className="pulse-orb" aria-hidden="true">
                ✳
              </span>
            </div>
          </section>
          <section className="section section-light" id="services">
            <div className="container services-inner">
              <h2 className="section-title centered">WE SHAPE LOUD VISUALS.</h2>
              <div className="service-grid">
                <a className="service-card card-brand" href="#contact">
                  <span>
                    BRAND
                    <br />
                    SYSTEMS
                  </span>
                </a>
                <a className="service-card card-print" href="#contact">
                  <span>
                    PRINT
                    <br />
                    RUNS
                  </span>
                </a>
                <a className="service-card card-signs" href="#contact">
                  <span>SIGNAGE</span>
                </a>
                <a className="service-card card-web" href="#contact">
                  <span>WEB</span>
                </a>
              </div>
            </div>
          </section>
          <section className="band band-city" id="work">
            <div className="band-image" />
            <div className="band-overlay" />
            <div className="band-label">SARNIA // REMOTE</div>
          </section>
          <section className="section section-light statement">
            <div className="container statement-grid">
              <div className="statement-left">
                <h2 className="section-title italic">
                  WE STAY FOCUSED&nbsp;&nbsp;|
                </h2>
              </div>
              <div className="statement-right">
                <p>
                  Brand direction. Print. Signage. Digital launch pieces.
                  Minimal words. Strong contrast. Fast read.
                </p>
              </div>
            </div>
          </section>
          <section className="band band-print">
            <div className="band-image" />
            <div className="band-overlay band-overlay-strong" />
            <div className="band-label band-label-panel">WE KEEP IT MOVING</div>
          </section>
          <section className="section section-light signup" id="contact">
            <div className="container signup-inner">
              <h2 className="section-title centered">LIKE CLEAN WORK?</h2>
              <h3 className="signup-subtitle">GET THE NEXT DROP</h3>
              <p className="signup-copy">
                Occasional updates. New launches. Fresh work.
              </p>
              <DemoForm className="signup-form" id="signupForm">
                <input
                  type="text"
                  name="firstName"
                  aria-label="First name"
                  autoComplete="given-name"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  name="lastName"
                  aria-label="Last name"
                  autoComplete="family-name"
                  placeholder="Last Name"
                />
                <input
                  type="email"
                  name="email"
                  aria-label="Email address"
                  autoComplete="email"
                  placeholder="Email Address"
                  required
                />
                <button type="submit">SIGN UP</button>
              </DemoForm>
              <p className="privacy-note">
                Concept form only. No subscription is created.
              </p>
            </div>
          </section>
          <section className="section section-light faq" id="faq">
            <div className="container">
              <div className="faq-grid">
                <div className="faq-intro">
                  <h2 className="section-title italic">
                    SHORT ANSWERS&nbsp;&nbsp;|
                  </h2>
                </div>
                <div className="faq-items">
                  <details>
                    <summary>Turnaround?</summary>
                    <p>Depends on scope. Fast concepts. Cleaner rollouts.</p>
                  </details>
                  <details>
                    <summary>What do you build?</summary>
                    <p>
                      Brand pieces, print assets, sign visuals, lean web pages.
                    </p>
                  </details>
                  <details>
                    <summary>Can this become a client demo?</summary>
                    <p>
                      Yes. Swap the words, imagery, links, and inquiry target.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
