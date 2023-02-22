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

export default function Home() {
  const [category, setCategory] = useState('mostrecent')
  const [search, setSearch] = useState('')
  const updateCat = (selectedOption) => {
    setCategory(selectedOption.value)
  }

  const options = [
    { value: 'mostrecent', label: 'Most recent', color: 'gray', id: 0 },
    { value: 'startups', label: 'Startups', color: 'gray', id: 1 },
    { value: 'philosophy', label: 'Philosophy', color: 'gray', id: 2 },
    { value: 'programming', label: 'Programming', color: 'gray', id: 3 },
    { value: 'life', label: 'Life', color: 'gray', id: 4 },
  ]

  const colorStyles = {
    control: (styles) => ({
      ...styles,
      border: 'none',
      color: 'gray',
      borderRadius: '10px',
      padding: '12px',
      boxShadow: '10px 10px 2px 1px #f8c8dc',
      fontSize: '18px',
      fontFamily: 'Old Standard TT, serif',
      cursor: 'pointer',
    }),
    option: (styles, { data }) => {
      return { ...styles, color: data.color }
    },
  }

  const searchUpdate = (event) => {
    setSearch(event.target.value)
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="UI for Paul Graham's Essays" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="sound">
        <Link
          href="https://www.youtube.com/watch?v=LKBk-jC1oHQ"
          target="_blank"
        >
          <GiSoundOn />
        </Link>
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
            <Select
              styles={colorStyles}
              options={options}
              onChange={updateCat}
              isSearchable={false}
            />
          </div>
          <div className="form">
            <GoSearch className="iconSearch" />
            <form>
              <input
                type="text"
                name="search"
                placeholder="Search"
                onChange={searchUpdate}
              />
            </form>
          </div>
        </div>
        <div className="grid">
          {essays
            .filter((essay) => {
              if (search == '') {
                return essay
              } else if (
                essay.title.toLowerCase().includes(search.toLocaleLowerCase())
              ) {
                return essay
              }
            })
            .map((essay) => {
              if (essay.category.indexOf(category) !== -1) {
                return (
                  <Link href={`${essay?.slug}`} key={essay.id}>
                    <div
                      key={essay.id}
                      className={'essayContainer'}
                      style={{ backgroundImage: `url('${essay.image}')` }}
                    >
                      <h2>{essay.title}</h2>
                    </div>
                  </Link>
                )
              }
            })}
        </div>
        <div>
          <footer>
            <h1 className="li2">Made by <Link href="https://twitter.com/imliamcloud"><span className='made'>Liam ☁️</span></Link></h1>
          </footer>
        </div>
      </main>
    </>
  )
}
