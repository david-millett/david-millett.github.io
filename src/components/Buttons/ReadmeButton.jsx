import { Link } from "react-router-dom"

// Styles
import styles from "./Buttons.module.scss"

// Icons
import { FaGithub } from "react-icons/fa"

const ReadMeButton = ({ readme, colour }) => {
    return (
        <main className={styles.container}>
            <Link to={readme} target='_blank'><li style={{color: colour, borderColor: colour}}><FaGithub />ReadMe</li></Link>
        </main>
    )
}

export default ReadMeButton