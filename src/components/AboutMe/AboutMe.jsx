// Styles
import styles from './AboutMe.module.scss'

// Icons
import { FaRegSmile, FaRegGrinWink, FaRegLaughSquint } from 'react-icons/fa'

const AboutMe = () => {
    return (
        <main className={styles.container}>
            <div className="headingIntro">
                <h1 id='aboutme'><div className={styles.click}><span className={`${styles.logo} ${styles.open}`}><FaRegSmile /></span><span className={`${styles.logo} ${styles.wink}`}><FaRegGrinWink /><p>psst!</p></span><span className={`${styles.logo} ${styles.yay}`}><FaRegLaughSquint /><p>weee!</p></span></div>About Me</h1>
                {/* <p>Is this needed in addition to the contact?</p> */}
            </div>
                {/* <p>With a decade of experience in journalism, communications, and digital publishing - in both medical and design fields - I have always been drawn to roles that combine logic and creativity. It was in my free time, spent building intricate spreadsheets - from automating progressive workout routines to analysing data on the books I had read - that I realised I was trying to code without the best tools. Discovering the possibilities provided by coding languages struck me like a bolt of lightning, and I soon enrolled on a software engineering course at General Assembly. I thrive on creating results and solutions, learning new things, and understanding complex concepts, which is why I am excited to bring my experience and designer’s eye to a career in this field.</p> */}
        </main>
    )
}

export default AboutMe