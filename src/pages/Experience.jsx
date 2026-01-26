import React from 'react';
export default function Experience() {
  return (
    <section className='section'>
      <h1>Experience</h1>
      <div className='card'>
        <h2>Product Engineer — Allstate</h2>
        <p>2022 – Present</p>
        <ul>
          <li>Built observability dashboards.</li>
          <li>Improved monitoring reliability.</li>
          <li>Led internal tooling.</li>
        </ul>
      </div>
      <div className='card'>
        <h2>Software Developer — Previous Company</h2>
        <p>2019 – 2022</p>
        <ul>
          <li>Developed UIs with React.</li>
          <li>Implemented microservices.</li>
          <li>Improved performance.</li>
        </ul>
      </div>
    </section>
  );
}