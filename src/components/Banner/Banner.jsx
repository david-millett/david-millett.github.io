// Styles
import styles from './Banner.module.scss'

// Components
import Buttons from "../Buttons/ContactButtons"

const Banner = () => {
    return (
        <main className={styles.container}>
            <h1>Hey there, I'm <span>David</span>!</h1>
            <div className={styles.subhead}>
                    <h1>Developer<span>.</span></h1>
                    <h1>Writer<span>.</span></h1>
                    <h1>Creative<span>.</span></h1>
            </div>
            <h2>Read on to get a feel for my work, including full-stack websites, games, and styling. You can find me or get in touch via:</h2>
            <ul>
                <Buttons />
            </ul>
            
        </main>
    )
}

export default Banner