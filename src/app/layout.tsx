import type { Metadata } from "next";
import { Lato } from "next/font/google";

const lato = Lato({
	display: 'swap',
	style: ['italic', 'normal'],
	subsets: ['latin'],
	variable: '--font-default',
	weight: ['100', '300', '400', '700', '900']
});

export const metadata: Metadata = {
  title: "Quill Code Editor",
  description: "Created by Shubhangi Gupta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
