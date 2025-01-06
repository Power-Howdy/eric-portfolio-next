'use client'
import styles from './Header.module.css';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { gsap } from 'gsap';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
    const handleScrollTo = (sectionId: string) => {
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



    useEffect(() => {
      const changeHeaderBgColor = () => {
        const scrollPos = window.scrollY;

        const aboutSection = document.querySelector("#about");
        const skillsSection = document.querySelector("#skills");
        const projectsSection = document.querySelector("#projects");
        const contactSection = document.querySelector("#contact");

        // Check if the sections exist before accessing their properties
        const aboutPos = aboutSection ? aboutSection.getBoundingClientRect().top + window.scrollY : 0;
        const skillsPos = skillsSection ? skillsSection.getBoundingClientRect().top + window.scrollY : 0;
        const projectsPos = projectsSection ? projectsSection.getBoundingClientRect().top + window.scrollY : 0;
        const contactPos = contactSection ? contactSection.getBoundingClientRect().top + window.scrollY : 0;
        gsap.set('.header-for-gsap', { backgroundColor: '#ffffff'});
        gsap.set(".navlink", { color: "black" })
        // Determine which section is currently in view
        if(scrollPos <= aboutPos) {
          gsap.to('.header-for-gsap', { backgroundColor: '#ffffff', duration: 0.5 });
          gsap.to('.navlink', { color: 'black',  duration: 0.5  })
        } else if (scrollPos > aboutPos && scrollPos < skillsPos) {
            gsap.to('.header-for-gsap', { backgroundColor: '#ffffff77', duration: 0.5 });
            gsap.to('.navlink', { color: 'black',  duration: 0.5  })
        } else if (scrollPos >= skillsPos && scrollPos < projectsPos) {
            gsap.to('.header-for-gsap', { backgroundColor: '#00000077', color: '#fff', duration: 0.5 });
            gsap.to('.navlink', { color: 'white',  duration: 0.5  })
        } else if (scrollPos >= projectsPos && scrollPos < contactPos) {
            gsap.to('.header-for-gsap', { backgroundColor: '#0070f377', duration: 0.5 });
            gsap.to('.navlink', { color: 'white',  duration: 0.5  })
        } else if (scrollPos >= contactPos) {
            gsap.to('.header-for-gsap', { backgroundColor: '#28a74577', duration: 0.5 });
            gsap.to('.navlink', { color: 'white',  duration: 0.5  })
        }
    };

      window.addEventListener('scroll', changeHeaderBgColor);
      
      // Cleanup the event listener on component unmount
      return () => {
          window.removeEventListener('scroll', changeHeaderBgColor);
      };
  }, []);


  return (
    <header className={`${styles.header} header-for-gsap`}>
    <div className={styles.container}>
      <div className={styles.logo} onClick={() => handleScrollTo("#about")}>
        <Image src={logo} width={50} height={50} alt='logo' />
        <h1>Eric Haggerton</h1>
      </div>
      <button className={styles.menuButton} onClick={toggleMenu}>
        <span className={`${styles.menuIcon} ${isMenuOpen ? styles.open : ''}`}></span>
      </button>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
        <ul className={styles.navList}>
          <li onClick={() => {handleScrollTo("#about"); setIsMenuOpen(false)}} className='navlink'>Home</li>
          <li onClick={() => {handleScrollTo("#skills"); setIsMenuOpen(false)}} className='navlink'>Skills</li>
          <li onClick={() => {handleScrollTo("#projects"); setIsMenuOpen(false)}} className='navlink'>Projects</li>
          <li onClick={() => {handleScrollTo("#contact"); setIsMenuOpen(false)}} className='navlink'>Contact</li>
        </ul>
      </nav>
    </div>
  </header>
  );
};

export default Header;