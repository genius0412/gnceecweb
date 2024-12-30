import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "26111 GNCE Electrified Chickens",
	description: "Official Website for FTC 26111 GNCE Electrifed Chickens",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
			<body className={inter.className + " bg-amber-50 dark:bg-gray-800 text-gray-800 dark:text-amber-50 overflow-x-hidden"}>
				<Header/>	
				{children}
			</body>
		</html>
	);
}
