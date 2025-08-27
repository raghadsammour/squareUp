import React, { useRef, useEffect, useState } from 'react';
import {motion, useInView, useAnimation } from 'framer-motion';
import "./Card.css";

const Card = ({ id, title, description, className = "" }) => {
  let x = 0;
  if (id >= 0 && id < 10) {
    x = "0" + id;
  } else {
    x = id;
  }

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      color: "#9EFF00",
      transition: { duration: 0.3 }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.2
      }
    },
    hover: {
      color: "#FFFFFF",
      transition: { duration: 0.3 }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 10px 25px rgba(158, 255, 0, 0.15)",
      borderColor: "#333333",
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`${className} RB_Card`}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="RB_info">
        <motion.p 
          className='RB_id'
          variants={numberVariants}
        >
          {x}
        </motion.p>
        <motion.span 
          className='RB_title'
          variants={titleVariants}
        >
          {title}
        </motion.span>
      </div>
      <motion.p 
        className='RB_description'
        variants={descriptionVariants}
      >
        {description}
      </motion.p>

      {isHovered && (
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at center, rgba(158, 255, 0, 0.05) 0%, transparent 70%)',
            zIndex: -1,
            borderRadius: 'inherit'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
}

export default Card;