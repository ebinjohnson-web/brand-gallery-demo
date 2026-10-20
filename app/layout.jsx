import "./globals.css";
import "./polish.css";
import "./image-led.css";
import Motion from "../components/Motion";
export const metadata = {
  title: "<div>\n  Static Pulse — Visual Agency Demo\n</div>",
  description: "A fictional concept website by Ebin Johnson.",
  metadataBase: new URL(
    "https://ebinjohnson-web.github.io/brand-gallery-demo/",
  ),
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
        />
      </head>
      <body>
        <Motion />
        {children}
      </body>
    </html>
  );
}
