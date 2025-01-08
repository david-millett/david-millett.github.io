// Styles
import styles from './Experience.module.scss'

// Images
import gaLogo from './gaLogo.png'

const cv = [
    {
        role: 'Software Engineering Bootcamp',
        company: 'General Assembly',
        location: 'London, UK',
        startDate: 'Sep 2024',
        endDate: 'Nov 2024',
        description: 'A 12-week bootcamp course held remotely via Zoom and Slack. Learned to build full-stack apps using the latest technologies and coding languages. The course consisted of online lectures, labs, daily standups, as well as individual and group projects.',
        logo: gaLogo,
    },
    {
        role: 'Communications & Media Officer',
        company: 'Ravensbourne University London',
        location: 'London, UK',
        startDate: 'Dec 2020',
        endDate: 'Aug 2024',
        description:
            <>
                <p>Designed from the ground up and launched various university newsletters for staff, students, and external stakeholders, including a monthly success email that included news and press coverage. Readership soared to over 60%.</p>
                <p>Managed and developed a process for digital screens across university buildings, including an official requests procedure, visual identity/design, and management system, that transformed the university’s on-site communications and established our identity to visitors.</p>
                <p>Coordinated reaction to adverse events and PR crises, and ensured thorough preparation by writing robust emergency comms plans. Led on preparing for and eventually coordinating the university’s response to ‘Operation London Bridge’ across internal and external channels.</p>
                <p>Identified stories for news and press releases that celebrated and promoted the university.</p>
                <p>Planned, designed, and wrote internal communications for staff and students at a design university, including emails, and blog posts.</p>
            </>,
        logo: '',
    },
    {
        role: 'English Instructor',
        company: 'AEON',
        location: 'Fukuoka, Japan',
        startDate: 'Feb 2018',
        endDate: 'Dec 2019',
        description:
            <>
                <p>Planned and taught bespoke English lessons for students aged 3 - 83 in Japan. Responsible for over 300 students.</p>
                <p>Publicised the company through media/advertising work, including TV interviews to help grow the business and successfully recruit new students.</p>
                <p>Oversaw colleagues as Sales Manager, setting goals and chasing results to surpass targets.</p>
            </>,
        logo: '',
    },
    {
        role: 'Senior News Reporter',
        company: 'GPonline (Haymarket Media Group)',
        location: 'London, UK',
        startDate: 'Feb 2014',
        endDate: 'Jan 2018',
        description:
            <>
                <p>Wrote and published daily news, features, and social media posts for GPonline, a news site and magazine for doctors. Designed infographics and figures for professional publication.</p>
                <p>Analysed raw datasets in Excel to uncover agenda-setting headlines and statistical trends.</p>
                <p>Transformed expert topics including medicine, politics, healthcare, law, and science into engaging, readable copy.</p>
                <p>Built relationships with high power stakeholders, including some of the UK’s most senior doctors, politicians, and lawyers, to source exclusive and agenda-setting news.</p>
            </>,
        logo: '',
    },
]

const Experience = () => {
    return (
        <main className={styles.container}>
            <div className="headingIntro">
                <h2>Experience</h2>
                <p>Little intro</p>
            </div>
            <ul>
                {cv.map(job => {
                    return (
                        <li key={job.role}>
                            <div>
                                <img src={job.logo} />
                                <div className={styles.line}></div>
                            </div>
                            <div>
                                <div className={styles.heading}>
                                    <h3>{job.role}</h3>
                                    <p>{job.startDate} - {job.endDate}</p>
                                </div>
                                <h4>{job.company}</h4>
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