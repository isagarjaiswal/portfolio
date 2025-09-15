import bop from "../images/Horizontal.png";
import merchantportal from "../images/Horizontal.png";
import savmoney from "../images/Horizontal.png";
import chromeext from "../images/Horizontal.png";
import reacttable from "../images/reacttable.png";
import tictactoe from "../images/tictactoi.png";

export const projectsData = [
    {
        title: "Back Office Portal",
        coCreator: "Solo",
        deployLink: "", 
        img: bop,
        description: "Scalable admin panel built with Next.js, Tailwind CSS, MUI, Redux, and Context API. Integrated NestJS backend with PostgreSQL, MongoDB, and Redis caching. Enabled real-time content sync with WooCommerce and data visualization from GCP reports."
    },
    {
        title: "Merchant Portal (Travelwings / Desert Adventures)",
        coCreator: "Solo",
        deployLink: "https://merchant.sav.money", 
        img: merchantportal,
        description: "Automated Excel report retrieval from GCP Buckets, built dynamic chart visualizations, and developed searchable, downloadable CSV exports for better decision-making."
    },
    {
        title: "Sav.money Website",
        coCreator: "Team Project",
        deployLink: "https://sav.money",
        img: savmoney,
        description: "Customized and managed WordPress site using Elementor, jQuery, and PHP. Developed WooCommerce integrations, improved frontend performance by 20%, and boosted engagement by 30%."
    },
    {
        title: "Chrome Extension for Product Scraping",
        coCreator: "Solo Project",
        deployLink: "", 
        img: chromeext,
        description: "React + Vite powered extension with Tailwind CSS. Scrapes product details from e-commerce sites, integrates Google Gemini AI for categorization, and syncs data with a Node.js backend."
    },
    {
        title: "React Table",
        coCreator: "Solo Project",
        deployLink: "https://react-js-table.app/",
        img: reacttable,
        description: "Interactive data table built with React.js, supporting sorting, searching, and pagination."
    },
    {
        title: "Tic Tac Toe Game",
        coCreator: "Solo Project",
        deployLink: "https://isagarjaiswal.github.io/tic-tak-toi/",
        img: tictactoe,
        description: "Classic Tic Tac Toe game developed with React.js for practicing state management and component-based design."
    }
];
