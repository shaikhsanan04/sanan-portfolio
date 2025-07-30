import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Web Developer (React.js / WordPress/ Wix) ',
      company: 'The Luxury Real Estate, Dubai',
      period: 'Jun 2024 – Jul 2025',
      achievements: [
        'Built and maintained 10+ React.js, WordPress, and Wix websites for high-end listings, achieving a 35% boost in lead conversions.',
        'Improved performance across devices, reducing mobile load times by 40% using lazy loading and optimization tools.',
        'Collaborated with SEO and marketing teams to implement schema, analytics, and A/B testing features.'
      ]
    },
    {
      id: 2,
      title: 'Web Designer & Frontend Developer (React.js)',
      company: 'Adal Agency, Sawantwadi',
      period: 'Jul 2023 – Feb 2024',
      achievements: [
        'Delivered 6+ responsive React.js websites using reusable components and clean state management.',
        'Translated Figma designs into production-ready code with Tailwind CSS, improving delivery speed by 20%.',
        'Worked alongside backend teams to integrate APIs and deploy across multiple hosting platforms.'
      ]
    },
    {
      id: 3,
      title: 'Desktop Support Engineer',
      company: 'Dynacons Systems & Solutions (Goa Electronics Ltd.), Goa',
      period: 'Jul 2022 – May 2023',
      achievements: [
        'Administered system updates, software setups, and network troubleshooting for over 100 devices across multiple offices.',
        'Provided technical support to developers and government staff, reducing issue resolution time by 45%.',
        'Introduced documentation practices for IT workflows and troubleshooting guides, improving support efficiency.',
        'Handled backend server tasks, including basic cloud configuration and monitoring, to support ongoing IT operations.'
      ]
    }
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title fade-in">Professional Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`experience-card glass-card ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="experience-header">
                <div className="experience-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <div className="experience-info">
                  <h3 className="experience-title">{exp.title}</h3>
                  <h4 className="experience-company">{exp.company}</h4>
                  <span className="experience-period">{exp.period}</span>
                </div>
              </div>
              
              <div className="experience-content">
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="achievement-item">
                      <i className="fas fa-check-circle achievement-icon"></i>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;