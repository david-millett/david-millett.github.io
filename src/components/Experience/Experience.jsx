import { useState } from 'react'

// Styles
import styles from './Experience.module.scss'

// Icons
import { FaUser } from 'react-icons/fa'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

const Experience = () => {
    
    const [gaReveal, setGaReveal] = useState(false)
    const [raveReveal, setRaveReveal] = useState(false)
    const [aeonReveal, setAeonReveal] = useState(false)
    const [gpReveal, setGpReveal] = useState(false)

    const cv = [
        {
            role: 'Software Engineering Bootcamp',
            code: 'seb',
            company: 'General Assembly',
            location: 'London, UK',
            startDate: 'Oct 2024',
            endDate: 'Nov 2024',
            description: 'A 12-week bootcamp course held remotely via Zoom and Slack, where I learned to build full-stack apps using the latest technologies and coding languages. The course consisted of online lectures, labs, daily standups, as well as individual and group projects.',
            reveal: gaReveal,
        },
        {
            role: 'Communications & Media Officer',
            code: 'cmo',
            company: 'Ravensbourne University London',
            location: 'London, UK',
            startDate: '2020',
            endDate: '2024',
            description: 'Managed, wrote, and designed internal and external communications for a creative university. Coordinated responses to adverse events and PR crises and developed a design process for digital screens to transform on-site communications and establish our identity to visitors.',
            reveal: raveReveal,
        },
        {
            role: 'English Instructor',
            code: 'ei',
            company: 'AEON',
            location: 'Fukuoka, Japan',
            startDate: '2018',
            endDate: '2019',
            description: 'Planned and taught bespoke English lessons for over 300 students aged 3 - 83 in Japan. Publicised the company through media/advertising work, including TV interviews to help grow the business and successfully recruit new students.',
            reveal: aeonReveal,
        },
        {
            role: 'Senior News Reporter',
            code: 'snr',
            company: 'GPonline (Haymarket Media Group)',
            location: 'London, UK',
            startDate: '2014',
            endDate: '2018',
            description: 'Wrote daily news and features for an online magazine for doctors. Designed infographics and figures, analysed raw datasets to uncover agenda-setting headlines, and transformed expert topics including medicine, politics, healthcare, law, and science into engaging copy.',
            reveal: gpReveal,
        },
    ]

    const toggleReveal = (e) => {
        if (e === 'seb') {
            setGaReveal(!gaReveal)
        } else if (e === 'cmo') {
            setRaveReveal(!raveReveal)
        } else if (e === 'ei') {
            setAeonReveal(!aeonReveal)
        } else if (e === 'snr') {
            setGpReveal(!gpReveal)
        }
    }

    const openAll = () => {
        setGaReveal(true)
        setRaveReveal(true)
        setAeonReveal(true)
        setGpReveal(true)
    }

    const closeAll = () => {
        setGaReveal(false)
        setRaveReveal(false)
        setAeonReveal(false)
        setGpReveal(false)
    }

    return (
        <main className={styles.container}>
            <div className="headingIntro widescreenNone">
                <h1 id='experience'><span className='logo'><FaUser /></span>Experience</h1>
            </div>
            <h3 className="introLine widescreenNone">I took a slightly roundabout path to becoming a software engineer... Along the way, I worked around the world, made connections with people, and honed valuable skills including writing, design, and project management!</h3>
            <ul>
                {cv.map(job => {
                    return (
                        <li key={job.role} onClick={() => toggleReveal(job.code)}>
                                <div className={styles.heading}>
                                    <h3>{job.role}</h3>
                                    <p className={`${styles.more} ${styles.circle}`}>
                                        {job.reveal ? <BiChevronUp size={24} /> : <BiChevronDown size={24} />}
                                    </p>
                                </div>
                                <h4><em>{job.company}</em></h4>
                                {job.reveal && 
                                    <div>
                                        <p>{job.location}</p>
                                        <p>{job.startDate} - {job.endDate}</p>
                                        <p className={styles.desc}>{job.description}</p>
                                    </div>}
                        </li>
                    )
                })}
            </ul>
            <div className={styles.openClose}>
                <p onClick={() => openAll()} className={styles.more}>Open all</p>
                <p onClick={() => closeAll()} className={styles.more}>Close all</p>
            </div>
        </main>
    )
}

export default Experience