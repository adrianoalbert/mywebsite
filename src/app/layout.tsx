import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Senior OT Systems Engineer",
  description: "Professional portfolio and blog of a Senior OT Systems Engineer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
