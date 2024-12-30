

const skillsList = [
    {name: 'HTML', icon: ''},
    {name: 'CSS', icon: ''},
    {name: 'SASS', icon: ''},
    {name: 'JavaScript', icon: ''},
    {name: 'React.js', icon: ''},
    {name: 'Bootstrap', icon: ''},
    {name: 'Node.js', icon: ''},
    {name: 'MongoDB', icon: ''},
    {name: 'Express.js', icon: ''},
    {name: 'Python', icon: ''},
    {name: 'Django', icon: ''},
    {name: 'PostgreSQL', icon: ''},
    {name: 'npm/pip', icon: ''},
    {name: 'Git/GitHub', icon: ''},
]

const Skills = () => {
    return (
        <main>
            <h2>Skills</h2>
            <p>Here are some skills!</p>
            <ul>
                {skillsList.map(skill => {
                    return (
                        <li key={skill.name}>{skill.name}</li>
                    )
                })}
            </ul>
        </main>
    )
}

export default Skills