// Styles
import styles from './Banner.module.scss'

// Components
import Buttons from "../Buttons/ContactButtons"

const Banner = () => {
    return (
        <main className={styles.container}>
            <h1>Hey, I'm <span>David</span>, a software developer, writer, and dreamer.</h1>
            <h2>Read on to see some of my work, from full-stack websites, to games, to styling. You can find me at:</h2>
            <Buttons />
            
        </main>
    )
}

export default Banner