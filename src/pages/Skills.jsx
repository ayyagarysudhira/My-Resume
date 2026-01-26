import React from 'react';
import { personalInfo, skillsByCategory, experience, projects } from '../data/content';

export default function Skills() {
  return (
    <section className='section'>


      <div className='skills-section'>
        <h2>Mobile Development</h2>
        <div className='skills-cards'>
          {skillsByCategory.mobile.map((skill, index) => (
            <div key={index} className='skill-card'>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

           <div className='skills-section'>
        <h2>Backend Development</h2>
        <div className='skills-cards'>
          {skillsByCategory.backend.map((skill, index) => (
            <div key={index} className='skill-card'>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

          <div className='skills-section'>
        <h2>Database</h2>
        <div className='skills-cards'>
          {skillsByCategory.databases.map((skill, index) => (
            <div key={index} className='skill-card'>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='skills-section'>
        <h2>Frontend Development</h2>
        <div className='skills-cards'>
          {skillsByCategory.frontend.map((skill, index) => (
            <div key={index} className='skill-card'>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

          <div className='skills-section'>
        <h2>TTD</h2>
        <div className='skills-cards'>
          {skillsByCategory.testing.map((skill, index) => (
            <div key={index} className='skill-card'>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='skills-section'>
        <h2>DevOps & Cloud</h2>
        <div className='skills-cards'>
          {skillsByCategory.devopsAndCloud.map((skill, index) => (
            <div key={index} className='skill-card'>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

  <div className='skills-section'>
        <h2>IDE's</h2>
        <div className='skills-cards'>
          {skillsByCategory.ides.map((skill, index) => (
            <div key={index} className='skill-card'>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='skills-section'>
        <h2>Security & Compliance</h2>
        <div className='skills-cards'>
          {skillsByCategory.securityAndCompliance.map((skill, index) => (
            <div key={index} className='skill-card'>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='skills-section'>
        <h2>Monitoring & Observability</h2>
        <div className='skills-cards'>
          {skillsByCategory.observability.map((skill, index) => (
            <div key={index} className='skill-card'>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='skills-section'>
        <h2>Version Control & Collaboration</h2>
        <div className='skills-cards'>
          {skillsByCategory.versionControlAndCollaboration.map((skill, index) => (
            <div key={index} className='skill-card'>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='skills-section'>
        <h2>Agile & Engineering Practices</h2>
        <div className='skills-cards'>
          {skillsByCategory.agileAndEngineeringPractices.map((skill, index) => (
            <div key={index} className='skill-card'>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='skills-section'>
        <h2>Product & Discovery Practices</h2>
        <div className='skills-cards'>
          {skillsByCategory.productAndDiscoveryPractices.map((skill, index) => (
            <div key={index} className='skill-card'>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}