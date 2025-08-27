import React from 'react';
import { motion } from 'framer-motion';
import './ProjectCard.css';
import arrowIcon from '../../assets/imgs/Work/Vector.svg';
import { Link } from 'react-router-dom';

const cardVariants = {
    offscreen: {
        y: 100,
        opacity: 0,
        scale: 0.95
    },
    onscreen: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: 0.3,
            duration: 0.7,
            ease: "easeOut"
        }
    }
};

const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
};

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            className="project-card"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{
                y: -15,
                transition: { duration: 0.3, ease: "easeOut" }
            }}
            custom={index}
        >
            {project.subtitle && (
                <motion.div
                    className="subtitle-above-image"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <h4>{project.subtitle}</h4>
                </motion.div>
            )}

            <div className="project-content-wrapper">
                {project.image && (
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={imageVariants}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    />
                )}

                <motion.div
                    className="project-content"
                    variants={contentVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {project.link && (
                        <motion.div className="link-container" variants={itemVariants}>
                            <div className="link-with-arrow">
                                <div className="title-link-wrapper">
                                    <h3>{project.title}</h3>
                                    <motion.a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                        whileHover={{
                                            backgroundColor: "var(--primary-color)",
                                            color: "var(--secondary-backgroundcolor)"
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {project.link}
                                    </motion.a>
                                </div>
                                <motion.div
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor: "var(--primary-color)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <Link
                                        className="arrow-link"
                                        to={project.behance}
                                        target="_blank"
                                    >
                                        <motion.img
                                            src={arrowIcon}
                                            alt="Arrow"
                                            className="arrow-icon"
                                            whileHover={{
                                                rotate: 45,
                                                transition: { duration: 0.2 }
                                            }}
                                        />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}

                    <motion.p
                        className="project-description"
                        variants={itemVariants}
                    >
                        {project.description}
                    </motion.p>

                    {project.achievements && project.achievements.length > 0 && (
                        <motion.div
                            className="achievements"
                            variants={contentVariants}
                        >
                            <ul>
                                {project.achievements.map((achievement, index) => (
                                    <motion.li
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ x: 5, color: "var(--primary-color)" }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {achievement}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;