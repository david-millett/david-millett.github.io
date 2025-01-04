// Styles
import styles from './Banner.module.scss'

// Components
import Buttons from "../Buttons/LinkedInGitHubButtons"

const Banner = () => {
    return (
        <main className={styles.container}>
            <h1>Hello, I'm David, a software developer, writer, and guy.</h1>
            <h2>Read on to see some of my work, from full-stack websites, to games, to styling. Feel free to get in touch!</h2>
            <Buttons />
        </main>
    )
}

export default Banner