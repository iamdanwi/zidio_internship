import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <main className="container mx-auto">
        <Navbar/>
        {children}
      </main>
    </html>
  );
}
