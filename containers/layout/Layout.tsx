import Head from "next/head";
import { ReactNode } from "react"
import {Footer, Header} from '../'
import { Breadcrumb, Navbar } from "../../components";
import styles from './Layout.module.css'

export const siteTitle: string = 'U-CARE Prototype Website';

interface LayoutProps {
    children: ReactNode,
    home: boolean
}

export default function Layout({ children, home}:LayoutProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A snippet of the U-CARE questionnaire"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.  app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main>
        <div className={styles.layout}>
          <Navbar />
          {children}
        </div>
      </main>
      <Footer />
      
    </>
  )
}