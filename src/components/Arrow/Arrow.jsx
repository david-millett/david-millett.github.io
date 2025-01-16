import { animateScroll } from 'react-scroll'

// Styles
import styles from './Arrow.module.scss'

// Icons
import { FaChevronUp } from 'react-icons/fa'

const Arrow = () => {
    return (
        <a className={styles.container} onClick={() => {animateScroll.scrollToTop()}}><FaChevronUp /></a>
    )
}

export default Arrow