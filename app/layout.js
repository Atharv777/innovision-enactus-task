import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export const metadata = {
    title: "Innovision NSUT",
    description: "Innovision is NSUT's Annual Tech Fest, a grand celebration of innovation, technology, and creativity.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
            <body className="min-h-full flex flex-col dark">{children}</body>
        </html>
    );
}
