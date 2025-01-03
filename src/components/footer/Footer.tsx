import React from 'react'
import styles from './Footer.module.css'; // Importing CSS Module for styling
import Link from 'next/link';
import Image from 'next/image';
import logImage from "@/assets/logo.png"
type Props = {}

function Footer({}: Props) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>Eric Haggerton</h1>
          <Image src={logImage} width={50} height={50} alt='logo' />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className={styles.socialLinks}>
          <a href="https://github.com/Power-Howdy" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://x.com/coocoohive" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Eric Haggerton. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer