// import { Link } from "react-router-dom"

// Styles
import styles from "./Buttons.module.scss"

// Icons
import { FaEnvelope } from "react-icons/fa"

const EmailButton = () => {
    return (
        <main className={styles.container}>
            <li><FaEnvelope />Email</li>
        </main>
    )
}

export default EmailButton