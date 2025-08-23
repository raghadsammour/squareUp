import React, { useState, useEffect } from 'react';
/* Main Component */
import {
    getProjects,
    addProject,
    moveToTrash,
    getTrashedProjects,
    restoreProject,
    permanentlyDeleteProject,
    updateProject
} from '../../utils/projectsStorage';
import EditProjectForm from './EditProjectForm';
import AddProjectForm from './AddProjectForm';
import ProjectsList from './ProjectsList';
import './AdminPage.css';

const AdminPage = () => {
    const [projects, setProjects] = useState([]);
    const [editingProject, setEditingProject] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: '',
        achievements: '',
        link: ''
    });
    const [activeTab, setActiveTab] = useState('projects');

    useEffect(() => {
        refreshData();
    }, [activeTab]);

    const refreshData = () => {
        if (activeTab === 'projects') {
            setProjects(getProjects());
        } else if (activeTab === 'trash') {
            setProjects(getTrashedProjects());
        }
    };

    const handleEdit = (project) => {
        setEditingProject(project);
        setFormData({
            title: project.title || '',
            description: project.description || '',
            image: project.image || '',
            achievements: project.achievements?.join('\n') || '',
            link: project.link || ''
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleAddSubmit = (e) => {
        e.preventDefault();

        const projectData = {
            title: formData.title.trim(),
            description: formData.description.trim(),
            image: formData.image || '',
            achievements: formData.achievements
                ? formData.achievements.split('\n').filter(a => a.trim())
                : [],
            link: formData.link || ''
        };

        addProject(projectData);
        alert('Added successfully');

        setFormData({
            title: '',
            description: '',
            image: '',
            achievements: '',
            link: ''
        });
        setEditingProject(null);
        refreshData();
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();

        const projectData = {
            title: formData.title.trim(),
            description: formData.description.trim(),
            image: formData.image || '',
            achievements: formData.achievements
                ? formData.achievements.split('\n').filter(a => a.trim())
                : [],
            link: formData.link || ''
        };

        updateProject(editingProject.id, projectData);
        alert('Updated successfully');

        setFormData({
            title: '',
            description: '',
            image: '',
            achievements: '',
            link: ''
        });
        setEditingProject(null);
        refreshData();
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to move this project to trash?')) {
            moveToTrash(id);
            refreshData();
        }
    };

    const handleRestore = (id) => {
        restoreProject(id);
        refreshData();
        alert('Project restored successfully');
    };

    const handlePermanentDelete = (id) => {
        if (window.confirm('Are you sure you want to permanently delete?')) {
            permanentlyDeleteProject(id);
            refreshData();
        }
    };

    return (
        <div className="admin-container">
            <h2>Projects Management</h2>

            <div className="tabs">
                <button
                    className={activeTab === 'projects' ? 'active' : ''}
                    onClick={() => setActiveTab('projects')}
                >
                    Projects ({getProjects().length})
                </button>
                <button
                    className={activeTab === 'trash' ? 'active' : ''}
                    onClick={() => setActiveTab('trash')}
                >
                    Trash ({getTrashedProjects().length})
                </button>
            </div>

            {editingProject !== null ? (
                editingProject.id ? (
                    <EditProjectForm
                        editingProject={editingProject}
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleEditSubmit}
                        setEditingProject={setEditingProject}
                    />
                ) : (
                    <AddProjectForm
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleAddSubmit}
                        setEditingProject={setEditingProject}
                    />
                )
            ) : (
                <ProjectsList
                    projects={projects}
                    activeTab={activeTab}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    handleRestore={handleRestore}
                    handlePermanentDelete={handlePermanentDelete}
                    setEditingProject={setEditingProject}
                />
            )}
        </div>
    );
};

export default AdminPage;