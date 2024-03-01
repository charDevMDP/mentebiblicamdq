import { Navbar } from './components/nav/Navbar'
import './globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
        <body className='font-["RusticaSL"] h-screen bg-gradient-to-t from-black to-[#00113D]'>
              <Navbar />
              <div className='h-full'>
                {children}
              </div>
      </body>
    </html>
  )
}
