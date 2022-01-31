import Script from 'next/script';
import Head from 'next/head'
//import Image from 'next/image'
import Image from './components/Image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitch,
    faTwitter,
    faInstagram,
    faReddit
  } from "@fortawesome/free-brands-svg-icons";
  import { faKeyboard } from '@fortawesome/free-regular-svg-icons'
  
// @ts-ignore
import { TwitchEmbed, TwitchChat, TwitchClip, TwitchPlayer } from 'react-twitch-embed';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WordStreamTV</title>
        <meta name="description" content="WordStreamTV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1Z8KCHR33P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-1Z8KCHR33P');
          `}
        </Script>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <div className={styles.constrained}><FontAwesomeIcon icon={faKeyboard} /></div> WordStreamTV
        </h1>

        <p className={styles.description}>
          From this brain to yours and back again.
        </p>

        <div className={styles.socialgrid}>
          <a href="https://www.twitch.tv/wordstreamtv"
          className={styles.social}>
          <FontAwesomeIcon icon={faTwitch} />
          </a>
          <a href="https://www.youtube.com/channel/UCqwkm2sAGTmFHNukHd5WlJg"
          className={styles.social}>
          <FontAwesomeIcon icon={faYoutube}/>
          </a>
          <a href="https://www.facebook.com/wordstreamtv/"
          className={styles.social}>
          <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com/wordstreamtv"
          className={styles.social}>
          <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com/wordstreamtv/"
          className={styles.social}>
          <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.reddit.com/user/wordstreamtv"
          className={styles.social}>
          <FontAwesomeIcon icon={faReddit} />
          </a>
        </div>

        <div>
      <TwitchEmbed
        channel="wordstreamtv"
        id="twitch-embed"
        theme="light"
        withChat={false}
        width='375px'
        height='211px'
        muted
        onVideoPause={() => console.log(':(')}
      /></div>

        <div className={styles.grid}>

          <a href="https://docs.google.com/document/d/1Z9rZVDxmtWdwPo-aJiBAMlLHq7vFY0YmBcwNGjsRkNA/edit" className={styles.card}>
            <h2>2022-01-30 &rarr;</h2>
            <p>Impatience is a virtue? ...</p>
          </a>

          
          {/* <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>2022-01-21 &rarr;</h2>
            <p><span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={250} height={50} />
          </span>And yet...</p>
          </a> */}


        </div>

        <div className={styles.footer}>Many buttons shall be pushed.
        </div>


      </main>

    </div>
  )
}
