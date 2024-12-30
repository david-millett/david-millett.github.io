
const portfolio = [
    {
        number: 4,
        name: 'plantshelf',
        link: '',
        readme: '',
        timeframe: '1 week',
        team: 'solo',
        description: 'A house plant collecting and care app',
        techstack: 'Python, Django, PostgreSQL, SASS',
        picture: '',
    },
    {
        number: 3,
        name: 'Local Heroes',
        link: '',
        readme: '',
        timeframe: '1 week',
        team: 'solo',
        description: 'A volunteering portal for local communities',
        techstack: 'MongoDB, Express, React, Node.js, SASS',
        picture: '',
    },
    {
        number: 2,
        name: 'Boku no Style',
        link: '',
        readme: '',
        timeframe: '1 week',
        team: 'solo',
        description: 'A community for Japanese streetwear enthusiasts',
        techstack: 'MongoDB, Express, Node.js, CSS',
        picture: '',
    },
    {
        number: 1,
        name: 'Minecreeper',
        link: '',
        readme: '',
        timeframe: '5 days',
        team: 'solo',
        description: 'A horror-themed minesweeper game with pixel art style',
        techstack: 'HTML, CSS, JavaScript',
        picture: '',
    },
]

const Projects = () => {
    return (
        <main>
            <h2>Projects</h2>
            <p>Projects intro</p>
            <ul>
                {portfolio.map(project => {
                    return (
                        <li key={project.number}>
                            <p><strong>{project.name}</strong></p>
                            <p>{project.description}</p>
                            <p><strong>Tech stack:</strong> {project.techstack}</p>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default Projects