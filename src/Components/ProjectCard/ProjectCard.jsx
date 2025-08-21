import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            {project.subtitle && (
                <div className="subtitle-above-image">
                    <h4>{project.subtitle}</h4>
                </div>
            )}
            
            {project.image && (
                <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                />
            )}
            
            <div className="project-content">
                <h3>{project.title}</h3>
                
                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                    >
                        {project.link}
                    </a>
                    
                )}
                
                <p className="project-description">{project.description}</p>
                
                {project.achievements && project.achievements.length > 0 && (
                    <div className="achievements">
                        <ul>
                            {project.achievements.map((achievement, index) => (
                                <li key={index}>{achievement}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;