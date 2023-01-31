import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { GiSoundOn } from 'react-icons/gi'
import { GiSoundOff } from 'react-icons/gi'
import { GoSearch } from 'react-icons/go'
import adam from '../public/adam.png'
import essays from './essays.json'
import { useState } from 'react'
import Link from 'next/link'
import Select from 'react-select'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const [category, setCategory] = useState('Latest')
  const [latest, setLatest] = useState(true)
  const [startups, setStartups] = useState(false)
  const updateCat = (selectedOption) => {
    setCategory(selectedOption.value)
    setLatest(false)
    setStartups(true)
    console.log(selectedOption)
  }
  const updateCat2 = () => {
    setCategory('family')
  }
  const myStyle = {
    backgroundImage:
      "url('https://www.dropbox.com/s/qd5o7hito845ohi/DALL%C2%B7E%202023-01-27%2013.32.23%20-%20stained%20glass%20window%20of%20a%20painting%20by%20michelangelo%20of%20mans%20thinking%20about%20philosophy%2C%20renaissance%20vibe%2C%20baroque%20vibe%20%281%29.png?raw=1')",
  }
  const options = [
    { value: 'mostrecent', label: 'Most recent'},
    { value: 'startups', label: 'Startups' },
    { value: 'family', label: 'Family' },
    { value: 'others', label: 'Others' },
  ]

  const colorStyles = {
    control: (styles) => ({
      ...styles,
      border: 'none',
      borderRadius: '10px',
      padding: '12px',
      boxShadow: '10px 10px 2px 1px #f8c8dc',
      fontSize: '18px',
      fontFamily: 'Old Standard TT, serif',
      cursor: 'pointer',
    }),
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="sound">
        <GiSoundOn />
      </h1>
      <main className={styles.main}>
        <div className="header">
          <Image loader="" src={adam} alt="Adam" width={700} height={490} />
          <h1 className="mainTitle">
            Paul Graham&#39;s<br></br>Essays
          </h1>
        </div>
        <div className="menu">
          <div className="select">
            <Select styles={colorStyles} options={options} onChange={updateCat}/>
          </div>
          <div className="form">
          <GoSearch className='iconSearch' />
            <form>
              <input type="text" name="search" placeholder="Search" />
            </form>
          </div>
        </div>
        <div className="grid">
          {essays.map((essay) => {
            if (essay.category.indexOf(category) !== -1) {
              return (
                <Link href={`${essay?.slug}`} key={essay.id}>
                  <div
                    key={essay.id}
                    className={'essayContainer'}
                    style={myStyle}
                  >
                    <h2>{essay.title}</h2>
                  </div>
                </Link>
              )
            }
          })}
        </div>
        <div className="footer">
          <h4>
            Made by <a>Liam Cloud</a>
          </h4>
        </div>
      </main>
    </>
  )
}
