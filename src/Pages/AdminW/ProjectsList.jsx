import React from 'react';
/* Display projects list in table format */
const ProjectsList = ({
    projects,
    activeTab,
    handleEdit,
    handleDelete,
    handleRestore,
    handlePermanentDelete,
    setEditingProject
}) => {
    return (
        <>
            <div className="admin-actions">
                <button
                    className="add-btn"
                    onClick={() => setEditingProject({})}
                >
                    Add New Project
                </button>
            </div>

            <div className="admin-table-container">
                {projects.length === 0 ? (
                    <p className="no-projects">No projects to display</p>
                ) : (
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Achievements</th>
                                <th>Link</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map(project => (
                                <tr key={project.id}>
                                    <td>
                                        {project.image && (
                                            <img 
                                                src={project.image} 
                                                alt={project.title}
                                                className="table-image"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                }}
                                            />
                                        )}
                                    </td>
                                    <td>{project.title}</td>
                                    <td className="description-cell">{project.description}</td>
                                    <td>
                                        {project.achievements && project.achievements.length > 0 ? (
                                            <ul>
                                                {project.achievements.slice(0, 2).map((achievement, index) => (
                                                    <li key={index}>{achievement}</li>
                                                ))}
                                                {project.achievements.length > 2 && (
                                                    <li>...and {project.achievements.length - 2} more</li>
                                                )}
                                            </ul>
                                        ) : (
                                            'No achievements'
                                        )}
                                    </td>
                                    <td>
                                        {project.link ? (
                                            <a 
                                                href={project.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                style={{color: 'var(--color-accent)'}}
                                            >
                                                Visit Project
                                            </a>
                                        ) : (
                                            'No link'
                                        )}
                                    </td>
                                    <td>
                                        <div className="table-actions">
                                            <button
                                                className="edit-btn"
                                                onClick={() => handleEdit(project)}
                                            >
                                                Edit
                                            </button>
                                            {activeTab === 'projects' ? (
                                                <button
                                                    className="delete-btn"
                                                    onClick={() => handleDelete(project.id)}
                                                >
                                                    Delete
                                                </button>
                                            ) : (
                                                <>
                                                    <button
                                                        className="restore-btn"
                                                        onClick={() => handleRestore(project.id)}
                                                    >
                                                        Restore
                                                    </button>
                                                    <button
                                                        className="delete-btn"
                                                        onClick={() => handlePermanentDelete(project.id)}
                                                    >
                                                        Delete Permanently
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};

export default ProjectsList;