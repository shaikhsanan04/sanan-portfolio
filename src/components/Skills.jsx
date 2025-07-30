import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
    { name: 'JavaScript', icon: 'fab fa-js-square', color: '#F7DF1E' },
    { name: 'HTML5', icon: 'fab fa-html5', color: '#E34F26' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572B6' },
    { name: 'Figma', icon: 'fab fa-figma', color: '#F24E1E' },
    { name: 'WordPress', icon: 'fab fa-wordpress', color: '#21759B' },
    { name: 'GitHub', icon: 'fab fa-github', color: '#333' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952B3' },
    { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
    { name: 'Responsive Design', icon: 'fas fa-mobile-alt', color: '#3B82F6' },
    { name: 'WIX', icon: 'fas fa-paint-brush', color: '#0C6EBD' },
    { name: 'Tailwind CSS', icon: 'fab fa-css3-alt', color: '#a5f3fc' },
    
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title fade-in">Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card glass-card scale-in"
              style={{
                animationDelay: `${index * 0.1}s`,
                '--skill-color': skill.color
              }}
            >
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
