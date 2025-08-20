import React, { useState, useEffect } from 'react';
import {
    getProjects,
    addProject,
    moveToTrash,
    getTrashedProjects,
    restoreProject,
    permanentlyDeleteProject,
    updateProject
} from '../../utils/projectsStorage';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
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

    const handleSubmit = (e) => {
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

        if (editingProject && editingProject.id) {
            updateProject(editingProject.id, projectData);
            alert('تم التحديث بنجاح');
        } else {
            addProject(projectData);
            alert('تمت الإضافة بنجاح');
        }

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
        if (window.confirm('هل أنت متأكد من نقل هذا المشروع إلى سلة المحذوفات؟')) {
            moveToTrash(id);
            refreshData();
        }
    };

    const handleRestore = (id) => {
        restoreProject(id);
        refreshData();
        alert('تم استعادة المشروع بنجاح');
    };

    const handlePermanentDelete = (id) => {
        if (window.confirm('هل أنت متأكد من الحذف النهائي؟')) {
            permanentlyDeleteProject(id);
            refreshData();
        }
    };

    return (
        <div className="admin-container">
            <h2>إدارة المشاريع</h2>

            <div className="tabs">
                <button
                    className={activeTab === 'projects' ? 'active' : ''}
                    onClick={() => setActiveTab('projects')}
                >
                    المشاريع ({getProjects().length})
                </button>
                <button
                    className={activeTab === 'trash' ? 'active' : ''}
                    onClick={() => setActiveTab('trash')}
                >
                    سلة المحذوفات ({getTrashedProjects().length})
                </button>
            </div>

            {editingProject !== null ? (
                <div className="edit-form">
                    <h3>{editingProject && editingProject.id ? 'تعديل المشروع' : 'إضافة مشروع جديد'}</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>العنوان*</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>الوصف</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows="3"
                            />
                        </div>

                        <div className="form-group">
                            <label>رابط الصورة</label>
                            <input
                                type="text"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>الإنجازات (سطر لكل إنجاز)</label>
                            <textarea
                                name="achievements"
                                value={formData.achievements}
                                onChange={handleChange}
                                rows="5"
                            />
                        </div>

                        <div className="form-group">
                            <label>رابط المشروع</label>
                            <input
                                type="url"
                                name="link"
                                value={formData.link}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-actions">
                            <button type="submit" className="submit-btn">
                                {editingProject && editingProject.id ? 'حفظ التعديلات' : 'إضافة المشروع'}
                            </button>
                            <button
                                type="button"
                                onClick={() => setEditingProject(null)}
                                className="cancel-btn"
                            >
                                إلغاء
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <>
                    <div className="admin-actions">
                        <button
                            className="add-btn"
                            onClick={() => setEditingProject({})}
                        >
                            إضافة مشروع جديد
                        </button>
                    </div>

                    <div className="cards-grid">
                        {projects.length === 0 ? (
                            <p className="no-cards">لا توجد مشاريع لعرضها</p>
                        ) : (
                            projects.map(project => (
                                <div key={project.id} className="admin-card-wrapper">
                                    <ProjectCard project={project} />
                                    <div className="card-actions">
                                        <button
                                            className="edit-btn"
                                            onClick={() => handleEdit(project)}
                                        >
                                            تعديل
                                        </button>
                                        {activeTab === 'projects' ? (
                                            <button
                                                className="delete-btn"
                                                onClick={() => handleDelete(project.id)}
                                            >
                                                حذف
                                            </button>
                                        ) : (
                                            <>
                                                <button
                                                    className="restore-btn"
                                                    onClick={() => handleRestore(project.id)}
                                                >
                                                    استعادة
                                                </button>
                                                <button
                                                    className="delete-btn"
                                                    onClick={() => handlePermanentDelete(project.id)}
                                                >
                                                    حذف نهائي
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default AdminPage;