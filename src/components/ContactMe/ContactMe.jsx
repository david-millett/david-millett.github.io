// Styles
import styles from './ContactMe.module.scss'

// Components
import Buttons from '../Buttons/ContactButtons'

// Icons
import { 
    FaRegAddressCard,
    FaRegLaughBeam
} from 'react-icons/fa'

const ContactMe = () => {
    return (
        <main className={styles.container}>
            <div className="headingIntro">
                <h1 id='contact'><span className='logo'><FaRegAddressCard /></span>Contact</h1>
            </div>
            <div className={styles.body}>
                <h2><span>It was great to have you here! <FaRegLaughBeam /></span> <br/><br/>Want to get in touch? Catch me via:</h2>
                <ul><Buttons /></ul>
            </div>
        </main>
    )
}

export default ContactMe