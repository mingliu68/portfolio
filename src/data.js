export const skillset = [
    {
        cat: "Programming Language",
        skills: ["JavaScript", "HTML5", "CSS3", "SQL", "Python", "PHP", "C#", "AngularJS"]
    },
    {
        cat: "Frameworks / Libraries / CMS",
        skills: ["React", "React Native", "Node.JS", "Redux", "Express", "Expo", "JQuery", "Bootstrap", "WordPress", "WooCommerce", "PrestaShop"]
    },
    {
        cat: "Tools",
        skills: ["PhotoShop", "Illustrator", "InDesign", "Blender 3D", "Adobe XD", "Figma", "Unity"]
    }
]

export const project_position = [
    {
        top: "5%",
        bottom: null,
        left: "35%",
        right: null,
        transformPost: "rotate(0deg) scale(1.25) translate(0, 35px) translateZ(0)", //transformPost => transforming
        transformPre: "rotate(-4deg) scale(1)",  // transformPre => return to original
    },
    {
        top: "8%",
        bottom: null,
        left: "5%",
        right: null,
        transformPost: "rotate(0deg) scale(1.25) translate(25px, 10px) translateZ(0)", //transformPost => transforming
        transformPre: "rotate(10deg) scale(1)",  // transformPre => return to original
    },
    {
        top: null,
        bottom: "8%",
        left: "4%",
        right: null,
        transformPost: "rotate(0deg) scale(1.25) translate(25px, -10px) translateZ(0)", //transformPost => transforming
        transformPre: "rotate(-7deg) scale(1)",  // transformPre => return to original
    },
    {
        top: "15%",
        bottom: null,
        left: null,
        right: "7%",
        transformPost: "rotate(0deg) scale(1.25) translateZ(0)", //transformPost => transforming
        transformPre: "rotate(-5deg) scale(1)",  // transformPre => return to original
    },
    {
        top: null,
        bottom: "8%",
        left: null,
        right: "5%",
        transformPost: "rotate(0deg) scale(1.25) translate(-25px, -10px) translateZ(0)", //transformPost => transforming
        transformPre: "rotate(5deg) scale(1)",  // transformPre => return to original
    },
    {
        top: null,
        bottom: "5%",
        left: "25%",
        right: null,
        transformPost: "rotate(0deg) scale(1.25) translate(0, -25px) translateZ(0)", //transformPost => transforming
        transformPre: "rotate(2deg) scale(1)",  // transformPre => return to original
    },

]

export const projects = [

    {
        name: "Sarama Animal Rescue",
        display: "Sarama Rescue - WordPress Site",
        boardDisplay: "Sarama Rescue",
        tech: ["JavaScript", "PHP", "HTML5", "CSS3", "MySQL", "WordPress", "WooCommerce", "JQuery"],
        img: "/img/sarama_home.png",
        role: ["Full Stack Engineer", "SOLO DEVELOPER"],
        link: "https://sarama.org",
        year: "2018",
        github: "",
        description: "A custom WordPress site for Sarama Animal Rescue with rescue management app and eCommerce integration.",
        techDescription: ["WordPress theme development.",
            "JS multi-step applications.",
            "Custom management app.",
            "Notification system in PHP",
            "WooCommerce integration.",
            "UX / UI design and development"
        ]
    },
    {
        name: "PawsnFind",
        display: "PawsnFind - React App",
        boardDisplay: "PawsnFind",
        tech: ["React", "JavaScript", "Redux", "HTML5", "CSS3", "Node.JS", "Express", "PostgreSQL", "PHP", "Material UI"],
        img: "/img/pawsnfind_home.png",
        role: ["Full Stack Engineer", "One of seven developers"],
        link: "https://pawsnfind.com",
        year: "2019",

        github: "https://github.com/Pawsnfind",
        description: "Pawsnfind is a web app that connects rescues and adopters while helping rescues manageing their operation.",
        techDescription: ["React FE w/ Redux.",
            "Database schema design",
            "Role based user dashboards",
            "Express.js BE with Postgres.",
            "Stripe and SendGrid integration.",
            "UX/UI design and development."]
    },
    {
        name: "Brookside Media & Co.",
        display: "Brookside Media - WordPress Site",
        boardDisplay: "Brookside Media & Co.",
        tech: ["JavaScript", "PHP", "HTML5", "CSS3", "WordPress", "JQuery"],
        img: "/img/brooksidemedia_home.png",
        link: "https://brooksidemediaco.com",
        year: "2018",

        github: "",
        role: ["Full Stack Engineer", "SOLO DEVELOPER"],
        description: "A custom WordPress site for Brookside Media & Co.",
        techDescription: ["WordPress theme development.",
            "Contact notification system in PHP",
            "Custom plug-in integration",
            "UX / UI design and development"
        ]
    },
    {
        name: "SkinDecoded",
        display: "eCommerce Site - PrestaShop",
        boardDisplay: "eCommerce Site",
        tech: ["JavaScript", "PHP", "HTML5", "CSS3", "PrestaShop", "JQuery", "MySQL"],
        img: "/img/skinDecoded_home.png",
        role: ["Frontend Engineer", "Solo Developer"],
        link: "https://web.archive.org/web/20141222211511/http://www.skindecoded.com/",
        year: "2011",

        github: "",
        description: "",
        techDescription: ["PrestaShop theme development.",
            "Custom plug-ins integration.",
            "UX / UI design and development"]
    },
    {
        name: "Peach&Lemon",
        boardDisplay: "eCommerce Site",
        display: "eCommerce Site - PrestaShop",
        tech: ["JavaScript", "PHP", "HTML5", "CSS3", "PrestaShop", "JQuery", "MySQL"],
        img: "/img/peachLemon_home.png",
        role: ["Frontend Engineer", "Solo Developer"],
        link: "",
        year: "2012",

        github: "",
        description: "",
        techDescription: ["PrestaShop theme development.",
            "Custom plug-ins integration.",
            "UX / UI design and development"]
    },
    {
        name: "Personal Portfolio",
        boardDisplay: "Personal Portfolio",
        display: "Personal Portfolio - React App",
        tech: ["React", "JavaScript", "HTML5", "CSS3", "Node.JS", "Express", "SendGrid"],
        img: "/img/mingliuPortfolio_home.png",
        role: ["Full Stack Engineer", "SOLO DEVELOPER"],
        link: "",
        year: "2020",

        github: "https://github.com/mingliu68/portfolio",
        description: "A fun side project that turned into my personal portfolio. Always a work-in-progress",
        techDescription: ["React w/ Hooks fronend with CSS animation and draggable components",
            "Integrate canvas for blackboard drawing.",
            "Express.js backend for SendGrid integration",
            "UX / UI design and development"]
    },

]

export const wallart = [
    {
        name: "twitter",
        type: "social",
        link: "https://twitter.com/minaskye68",
        top: 100,
        left: "50%",
        transform: "translate(-400px, 0)",
        width: 105,
        height: 105,
    },
    {
        name: "linkedin",
        type: "social",
        link: "https://www.linkedin.com/in/minaskye68/",
        top: 220,
        left: "50%",
        transform: "translate(-400px, 0)",
        width: 105,
        height: 105,
    },
    {
        name: "github",
        type: "social",
        link: "https://github.com/mingliu68",
        top: 340,
        left: "50%",
        transform: "translate(-400px, 0)",
        width: 105,
        height: 105,
    },
    {
        name: "resume",
        type: "social",
        link: "/pdf/ming_liu_resume.pdf",
        top: 460,
        left: "50%",
        transform: "translate(-400px, 0)",
        width: 105,
        height: 125,
    },
]

export const dials = ["hour", "minute", "second"]

export const colors = ["white", "#FF0000", "#FFC107", "#2196F3", "#9C27B0", "black"]

export const serviceNowProjects = [
    {
        name: "Conference Room Reservation",
        github: "https://github.com/mingliu68/SN-conference-rm-reservation",
        img: ["/img/roomReservation_1.png", "/img/roomReservation_2.png", "/img/roomReservation_3.png"],
        description: "A simple application that lets users to reserve a conference room based on availability. " +
            'Users enter their desired start and end date / time,  and the "Available Rooms" option field will be populated dynamically with the available rooms for the specified time frame.',
        techDescription: "ServiceNow custom application, JavaScript, Script Includes, Scheduled Script Executions, Client Scripts, UI Policies, Access Control"
    },
    {
        name: "SP - My Meeting Notes",
        github: "https://github.com/mingliu68/SN-meeting-notes",
        img: ["/img/meetingNote_1.png", "/img/meetingNote_2.png", "/img/meetingNote_3.png"],
        description: "Simple meeting note taking Service Portal application.",
        techDescription: "Service Portal app, AngularJS, JavaScript, HTML, CSS, Server Script, Client Script, Widgets"
    },
    {
        name: "Job Listing Tracker",
        github: "https://github.com/mingliu68/SN-job-listing-tracker",
        img: ["/img/jobListingTracker_1.png",],
        description: "Simple job listing tracking app to keep track of recruiter contacts and application progress",
        techDescription: "ServiceNow custom application"
    },
    // {
    //     name: "SP - Conference Room Reservation",
    //     github: "",
    //     img: [],
    //     description: "",
    //     techDescription: ""
    // },
]

export const certificates = [
    {
        img: "/img/certificate.png",
        boldDesc: "ServiceNow",
        description: "Certified System Administrator",
        year: "2022"
    },
    // {
    //     img: "/img/certificate.png",
    //     boldDesc: "ServiceNow",
    //     description: "Certified Application Developer",
    //     year: "in progress"
    // },
    // {
    //     img: "/img/certificate.png",
    //     boldDesc: "AWS",
    //     description: "Certified Solution Architect Associate",
    //     year: "in progress"
    // }

]