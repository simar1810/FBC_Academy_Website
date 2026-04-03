import "@/styles/globals.css";

export const metadata = {
  title: "FBC Academy",
  description: "FBC Academy Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
