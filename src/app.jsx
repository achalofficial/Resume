import React from 'react';
import resume from './resume.json';


const apiKey = import.meta.env.VITE_API_KEY;


export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: 700, margin: 'auto', padding: 20 }}>
      <header style={{ borderBottom: '1px solid #ccc', marginBottom: 20 }}>
        <h1>{resume.name}</h1>
        <h3>{resume.title}</h3>
        <h3>{apiKey}</h3>
        <p>
          <a href={`mailto:${resume.contact.email}`}>{resume.contact.email}</a> | {resume.contact.phone} |{' '}
          {resume.contact.location} |{' '}
          <a href={resume.contact.website} target="_blank" rel="noreferrer">
            Website
          </a>{' '}
          |{' '}
          <a href={resume.contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
      </header>

      <section>
        <h2>Summary</h2>
        <p>{resume.summary}</p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul style={{ columns: 2 }}>
          {resume.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Experience</h2>
        {resume.experience.map(({ company, title, start, end, description }) => (
          <div key={company + title} style={{ marginBottom: 15 }}>
            <strong>{title}</strong> — {company} ({start} to {end})
            <p>{description}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Projects</h2>
        {resume.projects.map(({ name, url, description }) => (
          <div key={name} style={{ marginBottom: 15 }}>
            <a href={url} target="_blank" rel="noreferrer">
              <strong>{name}</strong>
            </a>
            <p>{description}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Education</h2>
        {resume.education.map(({ degree, institution, year }) => (
          <div key={institution + degree}>
            <strong>{degree}</strong>, {institution} ({year})
          </div>
        ))}
      </section>
    </div>
  );
}
