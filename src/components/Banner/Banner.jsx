// Styles
import styles from './Banner.module.scss'

// Components
import Buttons from "../Buttons/ContactButtons"

// Icons
// import { FaEnvelope, FaLinkedin, FaGithub} from 'react-icons/fa'

const Banner = () => {
    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <h1>Hey there, I'm <span>David</span> !</h1>
                <div className={styles.subhead}>
                        <h1>Developer.</h1>
                        <h1>Writer.</h1>
                        <h1>Creative.</h1>
                </div>
                {/* <h2>Get in touch:</h2> */}
                <ul><Buttons /></ul>
            </div>
            {/* <div className={styles.smiles}>
                <div className={styles.contactButtons}>
                    <FaEnvelope />
                    <p>Email</p>
                </div>
                <div className={styles.contactButtons}>
                    <FaLinkedin />
                    <p>LinkedIn</p>
                </div>
                <div className={styles.contactButtons}>
                    <FaGithub />
                    <p>GitHub</p>
                </div>
            </div> */}
        </main>
    )
}

export default Banner