import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import CocktailName from './CocktailName'

export default function Home() {
  return (
    <div className={styles.container}>
    <Link href="/Ingredients"><p className='ingredient-link'>Search By Ingredient</p></Link>
      <CocktailName />
    </div>
  )
}
