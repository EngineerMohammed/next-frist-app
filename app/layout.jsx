"use client";
import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
export const metadata = {
  title: "promptopia",
  descriptipn: "Discover & Shear AI Prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta httpEquiv="refresh" content="30" />
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
