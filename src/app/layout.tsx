import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Summit Drilling Company - Sonic & Direct Push Drilling, Remediation Services',
  description: "Summit's ability to manage a diverse range of complex projects safely, efficiently and with excellent results is characterized by their unique customer promise – An Exceptional Experience. Maintaining 100% customer satisfaction is a primary goal at Summit and one that is taken seriously. Every member of the Summit team takes individual responsibility for your experience.",
  keywords: 'drilling, sonic drilling, environmental drilling, geophysics, remediation, PFAS, geotechnical',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
