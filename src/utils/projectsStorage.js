
const STORAGE_KEY = 'projects';
const TRASH_KEY = 'trashed_projects';
import chicBoutique from "../../src/assets/imgs/Work/chicboutique.webp";
import hungrybites from "../../src/assets/imgs/Work/hungrybites.webp";
import evenmasters from "../../src/assets/imgs/Work/evenmasters.webp";
import protech from "../../src/assets/imgs/Work/protech.webp";
import dreamhomes from "../../src/assets/imgs/Work/dreamhomes.webp";
import fitlifetracker from "../../src/assets/imgs/Work/fitlifetracker.webp";
import globallogistics from "../../src/assets/imgs/Work/globallogistics.webp";
import educonnect from "../../src/assets/imgs/Work/educonnect.webp";
import wanderwise from "../../src/assets/imgs/Work/wanderwise.webp";
import connectcrm from "../../src/assets/imgs/Work/connectcrm.webp";

const initialProjects = [
    {
        id: 1,
        title: "Chic Boutique",
        subtitle: "E-Commerce Platform for Fashion Hub",
        image: chicBoutique,
        highlightText: "Online Boutique",
        link: "https://focal-x.com/",
        description: "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.",
    },
    {
        id: 2,
        title: "hungrybites",
        subtitle: "Mobile App for Food Delivery Service",
        image: hungrybites,
        highlightText: "Food Delivery App",
        link: "https://focal-x.com/",
        description: "HungryBites is a food delivery service app we developed with real-time order tracking, multiple payment options, and an intuitive interface that improved customer experience and operational efficiency.",
    },
    {
        id: 3,
        title: "EventMasters",
        subtitle: "Booking and Reservation System for Event Management",
        image: evenmasters,
        highlightText: "Food Delivery App",
        link: "https://focal-x.com/",
        description: "HungryBites is a food delivery service app we developed with real-time order tracking, multiple payment options, and an intuitive interface that improved customer experience and operational efficiency.",
    },
    {
        id: 4,
        title: "ProTech Solutions",
        subtitle: "Custom Software for Workflow Automation",
        image: protech,
        highlightText: "Food Delivery App",
        link: "https://focal-x.com/",
        description: "HungryBites is a food delivery service app we developed with real-time order tracking, multiple payment options, and an intuitive interface that improved customer experience and operational efficiency.",
    },
    {
        id: 5,
        title: "Dream Homes Realty",
        subtitle: "Web Portal for Real Estate Listings",
        image: dreamhomes,
        highlightText: "Food Delivery App",
        link: "https://focal-x.com/",
        description: "HungryBites is a food delivery service app we developed with real-time order tracking, multiple payment options, and an intuitive interface that improved customer experience and operational efficiency.",
    },
    {
        id: 6,
        title: "FitLife Tracker",
        subtitle: "Custom Software for Supply Chain Management",
        image: fitlifetracker,
        highlightText: "Food Delivery App",
        link: "https://focal-x.com/",
        description: "HungryBites is a food delivery service app we developed with real-time order tracking, multiple payment options, and an intuitive interface that improved customer experience and operational efficiency.",
    },
    {
        id: 7,
        title: "Global Logistics Solutions",
        subtitle: "Educational Platform for Online Learning",
        image: globallogistics,
        highlightText: "Food Delivery App",
        link: "https://focal-x.com/",
        description: "HungryBites is a food delivery service app we developed with real-time order tracking, multiple payment options, and an intuitive interface that improved customer experience and operational efficiency.",
    },
    {
        id: 8,
        title: "WanderWise",
        subtitle: "Educational Platform for Online Learning",
        image: educonnect,
        highlightText: "Food Delivery App",
        link: "https://focal-x.com/",
        description: "HungryBites is a food delivery service app we developed with real-time order tracking, multiple payment options, and an intuitive interface that improved customer experience and operational efficiency.",
    },
    {
        id: 9,
        title: "ConnectCRM",
        subtitle: "Mobile App for Travel Planning",
        image: wanderwise,
        highlightText: "Food Delivery App",
        link: "https://focal-x.com/",
        description: "HungryBites is a food delivery service app we developed with real-time order tracking, multiple payment options, and an intuitive interface that improved customer experience and operational efficiency.",
    },
    {
        id: 10,
        title: "HungryBites",
        subtitle: "Web Application for Customer Relationship Management",
        image: connectcrm,
        highlightText: "Food Delivery App",
        link: "https://focal-x.com/",
        description: "HungryBites is a food delivery service app we developed with real-time order tracking, multiple payment options, and an intuitive interface that improved customer experience and operational efficiency.",
    },

];

export const getProjects = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : initialProjects;
};

export const saveProjects = (projects) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
};

export const addProject = (project) => {
    const projects = getProjects();
    const newProject = {
        ...project,
        id: Date.now(), 
        achievements: project.achievements || [] 
    };
    saveProjects([...projects, newProject]);
    return newProject;
};

export const updateProject = (id, updatedData) => {
    const projects = getProjects();
    const updatedProjects = projects.map(proj =>
        proj.id === id ? { ...proj, ...updatedData } : proj
    );
    saveProjects(updatedProjects);
    return updatedProjects;
};
export const getTrashedProjects = () => {
    const data = localStorage.getItem(TRASH_KEY);
    return data ? JSON.parse(data) : [];
};

export const saveTrashedProjects = (projects) => {
    localStorage.setItem(TRASH_KEY, JSON.stringify(projects));
};

export const moveToTrash = (id) => {
    const projects = getProjects();
    const projectToTrash = projects.find(proj => proj.id === id);

    if (projectToTrash) {
        const trashedProjects = getTrashedProjects();
        saveTrashedProjects([...trashedProjects, projectToTrash]);
        saveProjects(projects.filter(proj => proj.id !== id));
    }
};

export const restoreProject = (id) => {
    const trashedProjects = getTrashedProjects();
    const projectToRestore = trashedProjects.find(proj => proj.id === id);

    if (projectToRestore) {
        addProject(projectToRestore);
        saveTrashedProjects(trashedProjects.filter(proj => proj.id !== id));
    }
};

export const permanentlyDeleteProject = (id) => {
    saveTrashedProjects(getTrashedProjects().filter(proj => proj.id !== id));
};

/* if (getProjects().length === 0 && getTrashedProjects().length === 0) {
    saveProjects(initialProjects);
} */
const localData = localStorage.getItem(STORAGE_KEY);
const trashData = localStorage.getItem(TRASH_KEY);

if (!localData && !trashData) {
    saveProjects(initialProjects);
}