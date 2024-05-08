import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
      {/* <body>{children}</body> */}
      {/* <body>
        <h1 className={`${inter.className} antialiased`}>hi1</h1>
        <h1 className={`${lusitana.className} antialiased`}>hi2</h1>
        {children}
      </body> */}

    </html>
  );
}
