import "./globals.css";
import { Inter } from "next/font/google";
import AppBar from "../../components/AppBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Maria's Resto Bar",
  description: "Reservas maria's resto bar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <AppBar />
        </header>
        {children}
      </body>
    </html>
  );
}
