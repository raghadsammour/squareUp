import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
/* عرض قائمة المشاريع وأزرار التحكم */
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
    );
};

export default ProjectsList;