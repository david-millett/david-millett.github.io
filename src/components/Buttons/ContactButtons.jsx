import { Link } from "react-router-dom"

// Styles
import styles from "./Buttons.module.scss"

// Icons
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"

const Buttons = () => {
    return (
        <main className={styles.container}>
            <li><FaEnvelope /><span>Email</span></li>
            <Link to={'https://www.linkedin.com/in/d-millett'} target='_blank'><li><FaLinkedin /><span>LinkedIn</span></li></Link>
            <Link to={'http://github.com/david-millett'} target='_blank'><li><FaGithub /><span>GitHub</span></li></Link>
        </main>
    )
}

export default Buttons