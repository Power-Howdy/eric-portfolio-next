import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero} id='about'>
            <div className={styles.content}>
                <h1 className={styles.title}>Welcome to Our Amazing Service</h1>
                <p className={styles.description}>
                    Discover the power of our service and how it can help you achieve your goals.
                </p>
                <a href="#contact" className={styles.button}>Contact Me</a>
            </div>
        </section>
    );
};

export default Hero;