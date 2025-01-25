import { animateScroll } from 'react-scroll'

// Styles
import styles from './Arrow.module.scss'

// Icons
import { FaArrowUp } from 'react-icons/fa'

const Arrow = ({ closeMenu }) => {

    const scrollyTop = () => {
        animateScroll.scrollToTop()
        closeMenu()
    }

    return (
        <div className={styles.container}><a onClick={() => {scrollyTop()}}><FaArrowUp /></a></div>
    )
}

export default Arrow