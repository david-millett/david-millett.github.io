// Styles
import styles from './Banner.module.scss'

// Components
import Buttons from "../Buttons/ContactButtons"

const Banner = () => {
    return (
        <main className={styles.container}>
            <h1>Hey there, I'm <span>David</span>.</h1>
            <h1>Developer, writer, and creative.</h1>
            <h2>Read on to get a feel for my work, from full-stack websites, to games, to styling. You can find me at:</h2>
            <Buttons />
            
        </main>
    )
}

export default Banner