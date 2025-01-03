import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero} id='about'>
            <div className={styles.heroOverlay}></div>
            <div className={styles.content}>
                <h1 className={styles.title}>Eric Haggerton</h1>
                <p className={styles.description}>
                    Discover the power of my service as a full stack web/blockchain developer and how it can help you achieve your goals.
                </p>
                <a href="#contact" className={styles.button}>Contact Me</a>
            </div>
        </section>
    );
};

export default Hero;