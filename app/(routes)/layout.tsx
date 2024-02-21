"use client"

import { Providers } from "./providers";
import { Noto_Sans } from "next/font/google"
import { ColorModeScript } from "@chakra-ui/react";
import theme from './theme'
import { Analytics } from '@vercel/analytics/react';

const noto_sans = Noto_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={noto_sans.className}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
