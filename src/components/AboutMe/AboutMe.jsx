import { useState } from 'react'

// Styles
import styles from './AboutMe.module.scss'

// Icons
import { FaRegSmile, FaRegGrinWink, FaRegLaughSquint } from 'react-icons/fa'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { TbLanguageHiragana } from 'react-icons/tb'
import { LuFish, LuDumbbell } from 'react-icons/lu'

// Images
import me from './me.jpg'

const AboutMe = () => {
        
    const [jpReveal, setJpReveal] = useState(false)
    const [plantsReveal, setPlantsReveal] = useState(false)
    const [gymReveal, setGymReveal] = useState(false)
    
    const toggleReveal = (e) => {
        if (e === 'jp'){
            setJpReveal(!jpReveal)
            setPlantsReveal(false)
            setGymReveal(false)
        } else if (e === 'fish') {
            setPlantsReveal(!plantsReveal)
            setJpReveal(false)
            setGymReveal(false)
        } else if (e === 'gym') {
            setGymReveal(!gymReveal)
            setJpReveal(false)
            setPlantsReveal(false)
        }
    }
    
    const interests = [
        {
            name: 'Japanese',
            code: 'jp',
            icon: <TbLanguageHiragana />,
            desc: "I spent two incredible years living in Japan. I enjoy studying Japanese and reading manga in its native language. On my last trip, I picked up the full 鬼滅の刃 (Demon Slayer) set! I also love JRPGs and strategy JRPGs - happy to discuss why Final Fantasy X is the best game of all time.",
            reveal: jpReveal
        },
        {
            name: 'Plants and fish',
            code: 'fish',
            icon: <LuFish />,
            desc: "Nature and living things soothe my soul - I actually also have a Zoology degree! I love bringing the outside into my home and am fascinated by the artistic side of displaying plants - such as using bonsai techniques to gently shape branches or thrifting the perfectly complementary pot. I also enjoy aquascaping fish tanks to create mini worlds… for my next project, I’m dying to create a terrarium complete with poison dart frogs!",
            reveal: plantsReveal
        },
        {
            name: 'Fitness',
            code: 'gym',
            icon: <LuDumbbell />,
            desc: "Recently, you’ll often catch me unwinding down at the gym or out and about getting those steps in after a long day spent at the desk. Some might call me crazy, but I love to relax by pushing myself as hard as possible! There are lots of stats and numbers to be had when you're into fitness - and I love a task that lets you collate data and track progress!",
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
            <div className={styles.sections}>
                <img src={me} alt='David' />
                <div className={styles.section1}>
                    <h2>Hello!</h2>
                    <p className={styles.para}>I am a junior software engineer with experience in journalism, communications, and digital publishing. It was in my free time, spent building intricate spreadsheets - from automating progressive workout routines to analysing data on the books I had read - that I realised where my true passion lay... and that I was trying to code without the best tools!</p>
                    <p className={`${styles.para} ${styles.secondPara}`}>Discovering the possibilities provided by coding struck me like a bolt of lightning, and I soon enrolled on a software engineering course at General Assembly. I thrive on creating results and solutions, learning new things, and understanding complex concepts, which is why I am excited to bring my experience and designer’s eye to a career in this field.</p>
                <div className={styles.section2}>
                    <h2>Interests</h2>
                    <ul>
                        {interests.map(interest => {
                            return (
                                <div key={interest.name}>
                                    <li onClick={() => toggleReveal(interest.code)} className={`${styles.more} ${interest.reveal ? styles.pressed : styles.unpressed}`} >
                                        {interest.name}
                                        {interest.reveal ? <BiChevronUp size={24} /> : <BiChevronDown size={24} />}
                                    </li>
                                    {interest.reveal && <div className={`${styles.infoPhone} ${styles.info}`}><h1>{interest.icon}</h1><p>{interest.desc}</p></div>}
                                </div>
                            )
                        })}
                    </ul>
                    {interests.map(interest => {
                        return (
                            <div key={interest.name}>
                                {interest.reveal && <div className={`${styles.infoDesktop} ${styles.info}`}><h1>{interest.icon}</h1><p>{interest.desc}</p></div>}
                            </div>
                        )
                    })}
                </div>
                </div>
            </div>
        </main>
    )
}

export default AboutMe