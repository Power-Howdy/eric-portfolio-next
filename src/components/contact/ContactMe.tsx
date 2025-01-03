'use client'
import styles from './ContactMe.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);
const ContactMe = () => {
    useEffect(() => {
        gsap.from('#contact', {
            duration: 1,
            y: -50, 
            opacity: 0,
            ease: 'expo.out',
            scrollTrigger: {
                trigger: '#contact',
                start: 'top 75%',
                toggleActions: 'play reverse play reverse'
            },
        });
    })
    return (
        <section className={styles.contactSection} id='contact'>
            <h2 className={styles.title}>Contact Me</h2>
            <p className={styles.description}>
                I would love to hear from you! Feel free to reach out through any of the platforms below:
            </p>
            <div className={styles.contactMethods}>
                <div className={styles.contactMethod}>
                    <h3>Email</h3>
                    <p>
                        <a href="mailto:giftedclan0305@gmail.com" className={styles.contactLink}>
                            giftedclan0305@gmail.com
                        </a>
                    </p>
                </div>
                <div className={styles.contactMethod}>
                    <h3>Skype</h3>
                    <p>
                        <a href="skype:live:.cid.fc34b5163bb64816?chat" className={styles.contactLink}>
                            live:.cid.fc34b5163bb64816
                        </a>
                    </p>
                </div>
                <div className={styles.contactMethod}>
                    <h3>Telegram</h3>
                    <p>
                        <a href="https://t.me/Power_Howdy" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                            @Power_Howdy
                        </a>
                    </p>
                </div>
                <div className={styles.contactMethod}>
                    <h3>GitHub</h3>
                    <p>
                        <a href="https://github.com/Power-Howdy" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                            github.com/Power-Howdy
                        </a>
                    </p>
                </div>
                <div className={styles.contactMethod}>
                    <h3>X (formerly Twitter)</h3>
                    <p>
                        <a href="https://x.com/coocoohive" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                            @coocoohive
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;