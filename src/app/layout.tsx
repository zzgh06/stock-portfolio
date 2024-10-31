import Header from "@/components/shared/Header";
import Sidebar from "@/components/shared/Sidebar";
import "./globals.css";
import Providers from "./providers";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className="min-h-screen mx-auto">
      <body>
        <div className="min-h-screen bg-gray-100">
          <Providers>
            <Header />
            <div className="flex">
              <Sidebar />
              <main className="flex-1 p-6">{children}</main>
            </div>
          </Providers>
        </div>
      </body>
    </html>
  );
}
