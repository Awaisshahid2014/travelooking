import './globals.css';
import { Mulish } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';

const mulish = Mulish({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>{children}</body>
    </html>
  );
}
