import Head from 'next/head'
import Image from 'next/image'
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

      <main className={styles.main}>
        <h1 className={styles.title}>
          WordStreamTV
        </h1>

        <p className={styles.description}>
          From my brain to yours and back again.
        </p>

        <div className={styles.grid}>
          <a href="https://www.twitch.tv/wordstreamtv"
          className={styles.social}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faTwitch} size="2x" />
          </a>
          <a href="https://www.youtube.com/channel/UCqwkm2sAGTmFHNukHd5WlJg"
          className={styles.social}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100077450324025"
          className={styles.social}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://twitter.com/wordstreamtv"
          className={styles.social}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com/wordstreamtv/"
          className={styles.social}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.reddit.com/user/wordstreamtv"
          className={styles.social}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faReddit} size="2x" />
          </a>
        </div>

        <div>
      <TwitchEmbed
        channel="wordstreamtv"
        id="twitch-embed"
        theme="light"
        withChat={false}
        width='300px'
        height='300px'
        muted
        onVideoPause={() => console.log(':(')}
      /></div>

        <div className={styles.grid}>

          <a href="http://wordstream.tv" className={styles.card}>
            <h2>2022-01-23 &rarr;</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
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
