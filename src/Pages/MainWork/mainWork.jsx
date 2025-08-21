import React, { useState, useEffect } from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { getProjects } from '../../utils/projectsStorage';
import './MainWork.css';

const MainWork = () => {
    const [projects, setProjects] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const loadedProjects = getProjects();
        setProjects(loadedProjects);
    }, []);

    const toggleShowMore = () => {
        setShowAll(!showAll);
    };

    const visibleProjects = showAll ? projects : projects.slice(0, 4); 

    return (
        <div className="work-container" dir="ltr">
            <div className="intro-section">
                <h1>At SquareUp</h1>
                <p className="intro-text">
                    We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success.
                </p>
                <h2>Here are ten examples of our notable works:</h2>
            </div>
            <div className="projects-grid">
                {visibleProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>

            {projects.length > 4 && (
                <div className="show-more-container">
                    <button className="show-more-btn" onClick={toggleShowMore}>
                        {showAll ? 'Show Less' : 'Show More'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default MainWork;