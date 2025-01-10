// Styles
import styles from './Banner.module.scss'

// Components
import Buttons from "../Buttons/ContactButtons"

const Banner = () => {
    return (
        <main className={styles.container}>
            <h1>Hello, I'm <span>David</span>, a software developer, writer, and dreamer.</h1>
            <h2>Read on to see some of my work, from full-stack websites, to games, to styling. Feel free to get in touch!</h2>
            <Buttons />
        </main>
    )
}

export default Banner