import React, { useState, useEffect } from 'react';
import { 
    getTrashedProjects, 
    restoreProject, 
    permanentlyDeleteProject 
} from '../../utils/projectsStorage';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { useNavigate } from 'react-router-dom';
import './TrashPage.css';

const TrashPage = () => {
    const [trashedProjects, setTrashedProjects] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setTrashedProjects(getTrashedProjects());
    }, []);

    const handleRestore = (id) => {
        restoreProject(id);
        setTrashedProjects(getTrashedProjects());
        alert('Project restored successfully!');
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to permanently delete this project?')) {
            permanentlyDeleteProject(id);
            setTrashedProjects(getTrashedProjects());
        }
    };

    return (
        <div className="trash-container">
            <h2>Trash</h2>
            <button 
                className="back-btn"
                onClick={() => navigate(-1)}
            >
                ← Back to Projects
            </button>

            {trashedProjects.length === 0 ? (
                <p className="empty-trash">Trash is empty</p>
            ) : (
                <div className="trash-grid">
                    {trashedProjects.map(project => (
                        <div key={project.id} className="trash-item">
                            <ProjectCard project={project} />
                            <div className="trash-actions">
                                <button 
                                    className="restore-btn"
                                    onClick={() => handleRestore(project.id)}
                                >
                                    Restore
                                </button>
                                <button 
                                    className="delete-btn"
                                    onClick={() => handleDelete(project.id)}
                                >
                                    Delete Permanently
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TrashPage;