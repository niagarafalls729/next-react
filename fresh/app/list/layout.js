import Link from 'next/link'

export default function RootLayout({ children }) {
  return (
    <html lang="utf-8">
      <body>
        <div className="navbar">
          <Link href="/">home</Link>
          <Link href="/list">list페이지</Link>
          <Link href="/cart">결제페이지</Link>
        </div>
        {children}
      </body>
    </html>
  )
}