import styles from './Skills.module.css';

const Skills = () => {
    const skills = [
        {
            category: 'Programming Languages',
            items: ['TypeScript', 'JavaScript', 'Python', 'Java', '.NET', 'PHP', 'C++', 'HTML', 'CSS', 'Solidity']
        },
        {
            category: 'Frameworks & Libraries',
            items: ['Angular', 'React', 'Next.js', 'Remix', 'Vue', 'Material UI', 'Ant Design']
        },
        {
            category: 'Back-End Technologies',
            items: ['Express', 'Nest.js', 'FastAPI', 'Flask', 'Qt', 'Laravel', 'Spring Boot', 'DNN', 'WordPress']
        },
        {
            category: 'Web3 Technologies',
            items: ['Web3.js', 'Wagmi']
        },
        {
            category: 'Databases',
            items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Supabase', 'GraphQL']
        },
        {
            category: 'Other',
            items: ['OpenAI Integration', 'Flutter', 'React Native']
        },
        {
            category: 'Tools & Platforms',
            items: ['Git', 'Google Cloud', 'Microsoft Azure', 'AWS', 'Linux', 'Vercel']
        }
    ];

    return (
        <section className={styles.skillsSection} id='skills'>
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.skillsContainer}>
                {skills.map((skillCategory) => (
                    <div key={skillCategory.category} className={styles.category}>
                        <h3 className={styles.categoryTitle}>{skillCategory.category}</h3>
                        <ul className={styles.skillsList}>
                            {skillCategory.items.map((item) => (
                                <li key={item} className={styles.skillItem}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;