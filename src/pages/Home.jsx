import React from 'react';
import { personalInfo } from '../data/content';

export default function Home() {
  return (
    <section className='section'>
      <h1>Hello, I'm {personalInfo.name} 👋</h1>
      <h2 className='tagline'>{personalInfo.tagline}</h2>
      <p className='description-text'>{personalInfo.description}</p>
      <p className='description-text'>{personalInfo.description2}</p>
      <button className='cta'>Download Resume</button>
    </section>
  );
}