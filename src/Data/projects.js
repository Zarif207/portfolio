import cropzenImg from "../assets/cropzen.png";
import tixgoImg from "../assets/tixgo.png";
import botaniImg from "../assets/botani.png";

export const projects = [
  {
    id: "cropzen",
    name: "Cropzen — Smart Crop Marketplace",
    image: cropzenImg, // update if different
    stack: [
      "React",
      "React Router",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase Auth",
      "Recharts",
    ],
    live: "https://cropzen.netlify.app/",
    github: "https://github.com/Zarif207/cropzen-client.git", // update repo
    description:
      "A modern crop trading platform connecting farmers and buyers in a seamless marketplace where crops can be listed, interests managed, and transactions tracked through an interactive dashboard.",
    challenges: [
      "Designing a bidirectional interest system between farmers and buyers",
      "Keeping crop quantity in sync after interest acceptance",
      "Managing role-based dashboards and protected routes",
      "Ensuring instant UI updates without page reloads",
    ],
    features: [
      "Dynamic crop listing with pricing and quantity control",
      "Buyer interest system with messaging and quantity selection",
      "Interactive dashboard with accept/reject workflow",
      "Automatic stock updates after interest approval",
      "Secure authentication with Firebase",
      "Responsive UI with protected routes and custom 404 page",
    ],
    future: [
      "In-app real-time chat between farmers and buyers",
      "Payment gateway integration",
      "Admin moderation dashboard",
      "Advanced analytics for crop demand trends",
    ],
  },

  {
    id: "tixgo",
    name: "TixGo — Online Ticket Booking Platform",
    image: tixgoImg, // update image path if needed
    stack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase Auth",
      "Stripe",
      "React Query",
      "Leaflet",
      "Recharts",
    ],
    live: "https://tixgo.netlify.app/",
    github: "https://github.com/Zarif207/tixgo-client.git", 
    description:
      "A MERN-based online ticket booking platform where users can discover and book travel tickets (Bus, Train, Launch, Plane) with role-based dashboards, secure payments, and real-time booking management.",
    challenges: [
      "Implementing role-based access for User, Vendor, and Admin",
      "Managing ticket availability with quantity control",
      "Handling secure Stripe payments with booking validation",
      "Synchronizing countdown timers with departure date & time",
      "Protecting routes and APIs using Firebase tokens and JWT",
    ],
    features: [
      "Firebase authentication (Email/Password & Google Login)",
      "Role-based dashboards for User, Vendor, and Admin",
      "Ticket booking system with quantity control",
      "Countdown timer based on departure date & time",
      "Stripe payment integration",
      "Advertisement system (maximum 6 advertised tickets)",
      "Search, filter, sort, and pagination for all tickets",
      "Dark / Light mode toggle",
      "Fully responsive UI",
      "Protected routes and secure APIs",
    ],
    future: [
      "Seat selection system",
      "Ticket cancellation & refund workflow",
      "Real-time booking notifications",
      "Multi-language support",
      "Vendor analytics dashboard",
    ],
  },

  {
    id: "botani",
    name: "Botani — Indoor Plant Care & Marketplace",
    image: botaniImg, // update with correct image path
    stack: [
      "React",
      "React Router",
      "Tailwind CSS",
      "Firebase Authentication",
      "JSON Data",
    ],
    live: "https://botani-plant-shop.netlify.app/", // update if different
    // github: "https://github.com/yourname/botani-client", // update repo
    description:
      "Botani is an elegant single-page web application built for plant lovers who want to nurture and decorate their homes with healthy indoor plants. The platform allows users to explore plant care guides, purchase plants, and book expert consultations — promoting a greener and healthier lifestyle through a calm and minimalist design.",
    features: [
      "Responsive and visually calming UI for plant lovers",
      "Firebase authentication (Email/Password, Google Sign-In, Forgot Password)",
      "Plant listings and care guides fetched from JSON data",
      "Protected routes for service details and user profile management",
      "Single Page Application (SPA) with smooth navigation",
    ],
    challenges: [
      "Designing a minimalist yet informative UI",
      "Managing protected routes with authentication state",
      "Structuring scalable plant and service data",
    ],
    future: [
      "Implement role-based access for User, Vendor, and Admin",
      "Plant availability management with quantity control",
      "Secure Stripe payment integration for purchases and consultations",
      "Appointment countdown timers for booked consultations",
      "Protecting routes and APIs using Firebase tokens and JWT",
    ],
  },
];
