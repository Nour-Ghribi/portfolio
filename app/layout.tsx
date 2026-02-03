import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'


export const metadata: Metadata = {
  title: 'Nour Ghribi - AI & Data Science Portfolio',
  description: 'AI & Data Science Engineering Student | Machine Learning, Big Data, Cloud & Generative AI',
  keywords: [
    'Nour Ghribi',
    'AI Engineer',
    'Data Science',
    'Machine Learning',
    'Big Data',
    'Generative AI',
    'Cloud Computing',
    'Portfolio'
  ],
  authors: [{ name: 'Nour Ghribi' }],
  openGraph: {
    title: 'Nour Ghribi - AI & Data Science Portfolio',
    description: 'AI & Data Science Engineering Student specializing in Machine Learning, Big Data, Cloud, and AI-driven solutions',
    type: 'website',
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
