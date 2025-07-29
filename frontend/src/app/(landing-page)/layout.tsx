import Navbar from "@/components/Navbar";
import "./style.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main className="bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto">
          <Navbar />
          {children}
        </div>
      </main>
  );
}
