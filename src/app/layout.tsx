import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';
import NotFound from './not-found';
import Theme from './theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          {/* 
            As Next is managing this `RootLayout` and we are not using this 1️⃣, 
            it's 🆒 to do like this 1️⃣ because Next will ensure that `children` should always be a valid React element. 
          
            We are not going to use this ourselves to render other stuff like strings, etc. 
          */}
          {React.isValidElement(children) ? children : <NotFound />}
        </Theme>
      </body>
    </html>
  );
}
