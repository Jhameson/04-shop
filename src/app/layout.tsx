'use client'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Head from 'next/head'
import { getCssText } from 'src/app/styles'
import { globalStyles } from 'src/app/styles/global'

import logoImg from '../assets/logo.svg'
import { Container, Header } from 'src/app/styles/app'
import Image from 'next/image'

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

globalStyles()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body className={roboto.className}>
        <Container>
          <Header>
            <Image src={logoImg.src} alt="logo" width={130} height={52} />
          </Header>
          {children}
        </Container>
      </body>
    </html>
  )
}
