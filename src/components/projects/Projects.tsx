'use client'
import styles from './Projects.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: 'Blockchain Based KYC Platform POC "Credence"',
        technologies: ['Ares Cloud Agent', 'ACA-PY', 'Keycloak', 'React (ChakraUI)', 'OpenAPI'],
        description: 'Developed a proof of concept (POC) for a blockchain-based KYC platform, showcasing secure identity verification processes.',
        link: '',
    },
    {
        title: 'Decentralized Exchange (DEX) Development',
        technologies: ['Next.js', 'Web3.js', 'Ethers.js', 'Solidity'],
        description: 'Contributed to the development of a DEX, enabling cryptocurrency trading with enhanced security and user experience.',
        link: '',
    },
    {
        title: 'Enterprise Business Platform MVP',
        technologies: ['Angular 16', 'Python Lambda', 'AWS'],
        description: 'Acted as a senior frontend developer in delivering the MVP version of an enterprise-level platform, improving business process efficiency.',
        link: '',
    },
    {
        title: 'Company Website Development',
        technologies: ['Next.js', 'Supabase', 'Vercel'],
        description: 'Built a full-scale website for a tech agency from Figma designs, enhancing brand visibility and user engagement.',
        link: '',
    },
    {
        title: 'Lawyers’ Business Platform MVP',
        technologies: ['Angular 17 SSR', 'NestJS', 'SQLite', 'ChatGPT', 'GCP', 'Vercel'],
        description: 'Developed an MVP for a specialized platform for lawyers, improving legal service management.',
        link: '',
    },
    {
        title: 'Customized E-commerce Platform',
        technologies: ['Node.js', 'React', 'Express', 'MongoDB'],
        description: 'Built a tailored e-commerce platform with VIP promotion features, boosting client sales opportunities.',
        link: '',
    },
    {
        title: 'Shopify Theme Customization',
        technologies: ['Javascript', 'HTML', 'Liquid'],
        description: 'Created visually stunning and user-friendly websites aligned with client specifications, enhancing customer experience.',
        link: '',
    },
    {
        title: 'Blockchain Market Data Bot',
        technologies: ['Python', 'Selenium'],
        description: 'Created a bot to collect and analyze blockchain market data, sending alerts via Telegram and Discord according to user needs.',
        link: '',
    },
    {
        title: 'Map Editing Platform Development',
        technologies: ['OpenLayers', 'Next.js', 'Supabase'],
        description: 'Developed a web-based platform for interactive map editing, enhancing geographical data manipulation capabilities.',
        link: '',
    },
    {
        title: 'Blockchain Based Tourism Platform POC',
        technologies: ['Remix'],
        description: 'Created a proof of concept for a blockchain-integrated tourism platform, highlighting innovative travel solutions.',
        link: '',
    },
];

const Projects = () => {
    useEffect(() => {
        // Animate the title
        gsap.from('#projects h2', {
            duration: 1,
            x: -50, 
            opacity: 0,
            ease: 'expo.out',
            scrollTrigger: {
                trigger: '#projects',
                start: 'top 75%',
                toggleActions: 'play reverse play reverse',
            },
        });
        // Animate the categories and their items
        gsap.utils.toArray('.project').forEach((project: any, index) => {
            gsap.from(project, {
                duration: 0.8,
                y: 30,
                opacity: 0,
                ease: 'power2.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: project,
                    start: 'top 80%', 
                    toggleActions: 'play none none reverse',
                },
            });
        });
    })
    return (
        <section className={styles.projectsSection} id='projects'>
            <h2 className={styles.title}>Recent Projects</h2>
            <div className={styles.projectsContainer}>
                {projects.map((project, index) => (
                    <div key={index} className={`${styles.projectCard} project`}>
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <p className={styles.projectDescription}>{project.description}</p>
                        <div className={styles.technologies}>
                            <strong>Technologies:</strong> {project.technologies.join(', ')}
                        </div>
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>View Project</a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;