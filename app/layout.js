import "../app/_styles/globals.css";
import Header from "../app/_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap", // means first display texts with default font, then when font is downloaded, replace it
});

// In app folder, craete icon.png to set favicon
export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },
  description:
    "Luxarious cabin hotel, located in heart of the italian Dolmites, suronded by beautiful mountains and dark forests",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased
         bg-primary-950 text-primary-100 h-screen flex flex-col relative
          selection:bg-accent-400 selection:text-accent-50`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
