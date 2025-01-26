import { useState } from 'react'

// Styles
import styles from './AboutMe.module.scss'

// Icons
import { FaRegSmile, FaRegGrinWink, FaRegLaughSquint } from 'react-icons/fa'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { TbLanguageHiragana } from 'react-icons/tb'
import { LuFish, LuDumbbell } from 'react-icons/lu'

const AboutMe = () => {
        
    const [jpReveal, setJpReveal] = useState(false)
    const [plantsReveal, setPlantsReveal] = useState(false)
    const [gymReveal, setGymReveal] = useState(false)
    
    const toggleReveal = (e) => {
        if (e === 'Japanese'){
            setJpReveal(!jpReveal)
            setPlantsReveal(false)
            setGymReveal(false)
        } else if (e === 'Outdoors-indoors') {
            setPlantsReveal(!plantsReveal)
            setJpReveal(false)
            setGymReveal(false)
        } else if (e === 'Fitness') {
            setGymReveal(!gymReveal)
            setJpReveal(false)
            setPlantsReveal(false)
        }
    }
    
    const interests = [
        {
            name: 'Japanese',
            icon: <TbLanguageHiragana />,
            desc: "I spent two incredible years living in Japan. I enjoy studying Japanese and reading manga in its native language. On my last trip, I picked up the full 鬼滅の刃 (Demon Slayer) set!",
            reveal: jpReveal
        },
        {
            name: 'Outdoors-indoors',
            icon: <LuFish />,
            desc: "I love the artistic side of displaying them - such as using bonsai techniques to shape branches or thrifting the perfect pot. I also love aquascaping fish tanks to create mini worlds… next, I’m dying to create a terrarium complete with poison dart frogs!",
            reveal: plantsReveal
        },
        {
            name: 'Fitness',
            icon: <LuDumbbell />,
            desc: "Recently, you’ll often catch me unwinding down at the gym or out and about getting those steps in after a long day spent at the desk.",
            reveal: gymReveal
        },
    ]
    
    return (
        <main className={styles.container}>
            <div className="headingIntro">
                <h1 id='aboutme'>
                    <div className={styles.click}>
                        <span className={`${styles.logo} ${styles.smile}`}><FaRegSmile /></span>
                        <span className={`${styles.logo} ${styles.wink}`}><FaRegGrinWink /><p>psst!</p></span>
                        <span className={`${styles.logo} ${styles.yay}`}><FaRegLaughSquint /><p>weee!</p></span>
                    </div>About Me
                </h1>
            </div>
            <p>With a decade of experience in journalism, communications, and digital publishing - in both medical and design fields - I have always been drawn to roles that combine logic and creativity. It was in my free time, spent building intricate spreadsheets - from automating progressive workout routines to analysing data on the books I had read - that I realised I was trying to code without the best tools.</p>
            <p className={styles.secondPara}>Discovering the possibilities provided by coding languages struck me like a bolt of lightning, and I soon enrolled on a software engineering course at General Assembly. I thrive on creating results and solutions, learning new things, and understanding complex concepts, which is why I am excited to bring my experience and designer’s eye to a career in this field.</p>
            <h2>Interests</h2>
            <ul>
                {interests.map(interest => {
                    return (
                        <div key={interest.name}>
                            <li onClick={() => toggleReveal(interest.name)} className={interest.reveal ? styles.pressed : ''} >
                                {interest.icon}
                                {interest.name}
                                {interest.reveal ? <BiChevronUp size={24} /> : <BiChevronDown size={24} />}
                            </li>
                            {interest.reveal && <p className={`${styles.infoPhone} ${styles.info}`}><br />{interest.desc}<br /><br /></p>}
                        </div>
                    )
                })}
            </ul>

            {interests.map(interest => {
                return (
                    <>
                        {interest.reveal && <p key={interest.name} className={`${styles.infoDesktop} ${styles.info}`}>{interest.desc}</p>}
                    </>
                )
            })}
            
            {/* {jpReveal && <p className={styles.info}>I spent two incredible years living in Japan. I enjoy studying Japanese and reading manga in its native language. On my last trip, I picked up the full 鬼滅の刃 (Demon Slayer) set!</p>} */}
            {/* {plantsReveal && <p className={styles.info}>I love the artistic side of displaying them - such as using bonsai techniques to shape branches or thrifting the perfect pot. I also love aquascaping fish tanks to create mini worlds… next, I’m dying to create a terrarium complete with poison dart frogs!</p>} */}
            {/* {gymReveal && <p className={styles.info}>Recently, you’ll often catch me unwinding down at the gym or out and about getting those steps in after a long day spent at the desk.</p>} */}
            {/* {isRevealed && <p>hey</p>} */}
        </main>
    )
}

export default AboutMe