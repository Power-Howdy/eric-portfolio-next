'use client'
import styles from './Header.module.css';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { gsap } from 'gsap';

const Header = () => {
  
    const handleScrollTo = (sectionId: any) => {
        // Use gsap to animate scrolling
        const section = document.querySelector(sectionId);
        if (section) {
            const sectionOffset = section.getBoundingClientRect().top + window.scrollY; // Get the section's position relative to the viewport
            const offsetAdjustment = 80; // Amount to scroll above the section
    
            gsap
                .to(window, {
                    duration: 1,
                    scrollTo: { y: sectionOffset - offsetAdjustment, autoKill: true },
                    ease: 'power2.out'
                })
                
        }
    };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => handleScrollTo("#about")}>
            <Image src={logo} width={50} height={50} alt='logo' />
            <h1>Eric Haggerton</h1>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li onClick={() => handleScrollTo("#about")}>Home</li>
            <li onClick={() => handleScrollTo("#skills")}>Skills</li>
            <li onClick={() => handleScrollTo("#projects")}>Projects</li>
            <li onClick={() => handleScrollTo("#contact")}>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;