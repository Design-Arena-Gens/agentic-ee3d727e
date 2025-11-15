import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fjal? t? Abdullah ibn al-Mubarak p?r lotin dhe qarjen',
  description: 'P?rzgjedhje th?niesh dhe poezi t? hershme rreth lotit dhe qarjes n? devotshm?ri, t? atribuuara Abdullah ibn al-Mubarakut.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sq">
      <body>{children}</body>
    </html>
  );
}
