import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { GiSoundOn } from 'react-icons/gi'
import { GiSoundOff } from 'react-icons/gi'
import adam from '../public/adam.png'
import essays from './essays.json'




const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='sound'><GiSoundOn /></h1>
      <main className={styles.main}>
        <div className='header'>
        <Image
          loader=""
          src={adam}
          alt="Adam"
          width={700}
          height={490}
          />
          <h1 className='mainTitle'>Paul Graham <br></br>Essays</h1>
        </div>
        <div className='menu'>
          <ul>
            <li className='example'>Most recent</li>
            <li>Startups</li>
            <li>Family</li>
            <li>Most recent</li>
            <li>Most recent</li>
          </ul>
        </div>
        <div>
          <h2>Article block</h2>
        </div>
        <div className='footer'>
          <h4>Made by <a>Liam Cloud</a></h4>
        </div>
      </main>
    </>
  )
}
