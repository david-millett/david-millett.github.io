
const cv = [
    {
        role: 'Communications & Media Officer',
        company: 'Ravensbourne University London',
        location: 'London, UK',
        startDate: 'Dec 2020',
        endDate: 'Aug 2024',
        description: '',
        logo: '',
    },
    {
        role: 'English Instructor',
        company: 'AEON',
        location: 'Fukuoka, Japan',
        startDate: 'Feb 2018',
        endDate: 'Dec 2019',
        description: '',
        logo: '',
    },
    {
        role: 'Senior News Reporter',
        company: 'GPonline (Haymarket Media Group)',
        location: 'London, UK',
        startDate: 'Feb 2014',
        endDate: 'Jan 2018',
        description: '',
        logo: '',
    },
]

const Experience = () => {
    return (
        <main>
            <h2>Experience</h2>
            <p>Little intro</p>
            <ul>
                {cv.map(job => {
                    return (
                        <li key={job.role}>
                            <h3>{job.role}</h3>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default Experience