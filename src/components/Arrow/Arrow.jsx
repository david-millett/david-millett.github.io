import { animateScroll } from 'react-scroll'

// Styles
import styles from './Arrow.module.scss'

// Icons
import { FaChevronUp } from 'react-icons/fa'

const Arrow = () => {
    return (
        <div className={styles.container}><a onClick={() => {animateScroll.scrollToTop()}}><FaChevronUp /></a></div>
    )
}

export default Arrow