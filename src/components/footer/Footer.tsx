import React from 'react'
import styles from './Footer.module.css';
type Props = {}

function Footer({}: Props) {
  return (
    <footer className={styles.footer}>      
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Eric Haggerton. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer