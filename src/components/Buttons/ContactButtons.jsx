import { Link } from "react-router-dom"

// Styles
import styles from "./Buttons.module.scss"

// Icons
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"

const Buttons = () => {
    return (
        <main className={styles.container}>
            <li><FaEnvelope />Email</li>
            <Link to={'https://www.linkedin.com/in/d-millett'} target='_blank'><li><FaLinkedin />LinkedIn</li></Link>
            <Link to={'http://github.com/david-millett'} target='_blank'><li><FaGithub />GitHub</li></Link>
        </main>
    )
}

export default Buttons