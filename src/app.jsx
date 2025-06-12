import React from "react";
import resume from "./resume.json";

// For the LLM Enabling
// const apiKey = import.meta.env.VITE_API_KEY;

export default function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: 800,
        margin: "auto",
        padding: "20px",
      }}
    >
      {/* Header Section */}
      <header style={{ marginBottom: "20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.3em", marginBottom: "5px", color: "#333" }}>
          {resume.personal_details.name}
        </h1>
        <p style={{ margin: "0", fontSize: "0.95em" }}>
          <a
            href={`mailto:${resume.personal_details.email}`}
            style={{ color: "#0066cc", textDecoration: "none" }}
          >
            {resume.personal_details.email}
          </a>{" "}
          | {resume.personal_details.phone} |{" "}
          <a
            href={resume.personal_details.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#0066cc", textDecoration: "none" }}
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href={resume.personal_details.github}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#0066cc", textDecoration: "none" }}
          >
            GitHub
          </a>
        </p>
        {/* <h3>{apiKey}</h3> */}
      </header>

      {/* Professional Summary Section */}
      <section style={{ marginBottom: "25px" }}>
        <h2
          style={{
            fontSize: "1.5em",
            borderBottom: "1px solid #ccc",
            paddingBottom: "5px",
            marginBottom: "15px",
            color: "#333",
          }}
        >
          Professional Summary
        </h2>
        <p
          style={{
            lineHeight: "1.6",
            fontSize: "0.95em",
            textAlign: "justify",
          }}
        >
          {resume.professional_summary}
        </p>
      </section>

      {/* Technical Expertise Section - REDESIGNED */}
      <section style={{ marginBottom: "25px" }}>
        <h2
          style={{
            fontSize: "1.5em",
            borderBottom: "1px solid #ccc",
            paddingBottom: "5px",
            marginBottom: "15px",
            color: "#333",
          }}
        >
          Technical Expertise
        </h2>
        {Object.keys(resume.technical_skills).map((category) => (
          <div key={category} style={{ marginBottom: "10px" }}>
            <strong
              style={{
                display: "inline-block",
                minWidth: "150px",
                fontSize: "1em",
                color: "#333",
              }}
            >
              {category
                .replace(/_/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase())}
              :
            </strong>
            <span style={{ fontSize: "0.95em", color: "#555" }}>
              {resume.technical_skills[category].join(", ")}
            </span>
          </div>
        ))}
      </section>

      {/* Work Experience Section */}
      <section style={{ marginBottom: "25px" }}>
        <h2
          style={{
            fontSize: "1.5em",
            borderBottom: "1px solid #ccc",
            paddingBottom: "5px",
            marginBottom: "15px",
            color: "#333",
          }}
        >
          Work Experience
        </h2>
        {resume.work_experience.map((exp, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <p style={{ margin: "0", fontSize: "1em" }}>
              <strong>{exp.title}</strong>
              <span
                style={{
                  float: "right",
                  fontWeight: "normal",
                  fontSize: "0.95em",
                }}
              >
                {exp.duration}
              </span>
            </p>
            <p style={{ margin: "0", fontSize: "0.95em", color: "#555" }}>
              {exp.company}, {exp.location}
            </p>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "20px",
                margin: "10px 0 0 0",
              }}
            >
              {exp.responsibilities.map((resp, respIndex) => (
                <li
                  key={respIndex}
                  style={{ fontSize: "0.95em", marginBottom: "5px" }}
                >
                  {resp}
                </li>
              ))}
            </ul>
            {exp.key_achievements && exp.key_achievements.length > 0 && (
              <>
                <h4
                  style={{
                    fontSize: "1em",
                    margin: "10px 0 5px 0",
                    color: "#333",
                  }}
                >
                  Key Impact:
                </h4>
                <ul
                  style={{
                    listStyleType: "disc",
                    paddingLeft: "20px",
                    margin: "0",
                  }}
                >
                  {exp.key_achievements.map((ach, achIndex) => (
                    <li
                      key={achIndex}
                      style={{ fontSize: "0.95em", marginBottom: "5px" }}
                    >
                      {ach}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </section>

      {/* Education Section */}
      <section style={{ marginBottom: "25px" }}>
        <h2
          style={{
            fontSize: "1.5em",
            borderBottom: "1px solid #ccc",
            paddingBottom: "5px",
            marginBottom: "15px",
            color: "#333",
          }}
        >
          Education
        </h2>
        {resume.education.map((edu, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <p style={{ margin: "0", fontSize: "1em" }}>
              <strong>
                {edu.degree} in {edu.field}
              </strong>{" "}
              - {edu.university}
            </p>
            <p
              style={{ margin: "3px 0 0 0", fontSize: "0.95em", color: "#555" }}
            >
              {edu.location} ({edu.duration})
            </p>
          </div>
        ))}
      </section>

      {/* Certifications Section */}
      <section style={{ marginBottom: "25px" }}>
        <h2
          style={{
            fontSize: "1.5em",
            borderBottom: "1px solid #ccc",
            paddingBottom: "5px",
            marginBottom: "15px",
            color: "#333",
          }}
        >
          Certifications
        </h2>
        {resume.certificates.map((cert, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <p style={{ margin: "0", fontSize: "1em" }}>
              <strong>{cert.name}</strong> - {cert.institution} ({cert.date})
            </p>
            {cert.skills && cert.skills.length > 0 && (
              <p
                style={{
                  margin: "5px 0 0 0",
                  fontSize: "0.95em",
                  color: "#555",
                }}
              >
                Skills: {cert.skills.join(", ")}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* Selected Projects Section */}
      <section style={{ marginBottom: "25px" }}>
        <h2
          style={{
            fontSize: "1.5em",
            borderBottom: "1px solid #ccc",
            paddingBottom: "5px",
            marginBottom: "15px",
            color: "#333",
          }}
        >
          Projects
        </h2>
        {resume.projects.map((project, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <p style={{ margin: "0", fontSize: "1em" }}>
              <strong>{project.name}</strong>{" "}
              {project.role ? `| ${project.role}` : ""}{" "}
              {project.company ? `| ${project.company}` : ""}
              <span
                style={{
                  float: "right",
                  fontWeight: "normal",
                  fontSize: "0.95em",
                }}
              >
                {project.duration}
              </span>
            </p>
            <p style={{ margin: "0", fontSize: "0.95em", color: "#555" }}>
              Technologies: {project.technologies.join(", ")}
            </p>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "20px",
                margin: "10px 0 0 0",
              }}
            >
              {project.description.map((desc, descIndex) => (
                <li
                  key={descIndex}
                  style={{ fontSize: "0.95em", marginBottom: "5px" }}
                >
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Publications Section */}
      {resume.publications && resume.publications.length > 0 && (
        <section style={{ marginBottom: "25px" }}>
          <h2
            style={{
              fontSize: "1.5em",
              borderBottom: "1px solid #ccc",
              paddingBottom: "5px",
              marginBottom: "15px",
              color: "#333",
            }}
          >
            Publications
          </h2>
          {resume.publications.map((pub, index) => (
            <div
              key={index}
              style={{
                marginBottom: "10px",
                fontSize: "0.95em",
                lineHeight: "1.5",
              }}
            >
              {pub.authors} "{pub.title}," {pub.journal}, {pub.volume},{" "}
              {pub.issue}, {pub.pages}, {pub.date}.
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
