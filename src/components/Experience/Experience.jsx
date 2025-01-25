// Styles
import styles from './Experience.module.scss'

// Icons
import { FaUser } from 'react-icons/fa'

const cv = [
    {
        role: 'Software Engineering Bootcamp',
        company: 'General Assembly',
        location: 'London, UK',
        startDate: 'Sep 2024',
        endDate: 'Nov 2024',
        description: 'A 12-week bootcamp course held remotely via Zoom and Slack, where I learned to build full-stack apps using the latest technologies and coding languages. The course consisted of online lectures, labs, daily standups, as well as individual and group projects.',
    },
    {
        role: 'Communications & Media Officer',
        company: 'Ravensbourne University London',
        location: 'UK',
        startDate: 'Dec 2020',
        endDate: 'Aug 2024',
        description: 'Managed, wrote, and designed internal and external communications for a creative university. Coordinated responses to adverse events and PR crises and developed a design process for digital screens to transform on-site communications and establish our identity to visitors.',
    },
    {
        role: 'English Instructor',
        company: 'AEON',
        location: 'Fukuoka, Japan',
        startDate: 'Feb 2018',
        endDate: 'Dec 2019',
        description: 'Planned and taught bespoke English lessons forover 300 students aged 3 - 83 in Japan. Publicised the company through media/advertising work, including TV interviews to help grow the business and successfully recruit new students.',
    },
    {
        role: 'Senior News Reporter',
        company: 'GPonline (Haymarket Media Group)',
        location: 'London, UK',
        startDate: 'Feb 2014',
        endDate: 'Jan 2018',
        description: 'Wrote and published daily news, features, and social media posts for GPonline, a news site and magazine for doctors. Designed infographics and figures for professional publication, analysed raw datasets in Excel to uncover agenda-setting headlines and statistical trends, and transformed expert topics including medicine, politics, healthcare, law, and science into engaging, readable copy.',
    },
]

const Experience = () => {
    return (
        <main className={styles.container}>
            <div className="headingIntro">
                <h1 id='experience'><span className='logo'><FaUser /></span>Experience</h1>
            </div>
            <p className="introLine">It's true, I took the roundabout path to becoming a software engineer! Along the way, I honed valuable skills including writing, design, communication, and project managment.</p>
            <ul>
                {cv.map(job => {
                    return (
                        <li key={job.role}>
                            <div>
                                <div className={styles.line}></div>
                            </div>
                            <div>
                                <div className={styles.heading}>
                                    <h3>{job.role}</h3>
                                    <p>{job.startDate} - {job.endDate}</p>
                                </div>
                                <h4><em>{job.company}; {job.location}</em></h4>
                                <p>{job.description}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default Experience