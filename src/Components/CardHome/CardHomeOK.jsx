import React from 'react';
import { motion } from 'framer-motion';
import './CardHomeOK.css';

const cardVariants = {
    offscreen: {
        y: 50,
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

const iconVariants = {
    hidden: { rotate: -30, opacity: 0 },
    visible: {
        rotate: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            delay: 0.2,
            duration: 0.7
        }
    }
};

const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

const Card = ({ card, index }) => {
    if (!card) {
        return <div className="card error">Error: Card data is missing</div>;
    }

    return (
        <motion.div
            className="card"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{
                y: -10,
                boxShadow: "0 15px 30px rgba(158, 255, 0, 0.2)",
                transition: { duration: 0.3, ease: "easeOut" }
            }}
            custom={index}
        >
            <motion.div
                className="card-header"
                variants={contentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {card.icon && (
                    <motion.img
                        src={card.icon}
                        alt={card.title || 'Card icon'}
                        className="card-icon"
                        variants={iconVariants}
                        whileHover={{
                            scale: 1.2,
                            rotate: 5,
                            transition: { duration: 0.2 }
                        }}
                    />
                )}
                <motion.h3 variants={itemVariants}>
                    {card.title || 'No title'}
                </motion.h3>
            </motion.div>

            <motion.p
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
            >
                {card.description || 'No description'}
            </motion.p>
        </motion.div>
    );
};

export default Card;