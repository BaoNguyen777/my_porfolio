import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-sky-400 text-gray-800 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
