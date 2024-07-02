import React, { useRef } from 'react';
import ReactDOM from "react-dom/client"
import Home from "./pages/Home"
import Navigation from './components/Navigation'
import Footer from "./components/Footer"
import './index.scss'

function App() {
    const homeRef = useRef(null);
    const abilitiesRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const handleScroll = (event, section) => {
        event.preventDefault();
        switch (section) {
            case 'home':
                homeRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'abilities':
                abilitiesRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'projects':
                projectsRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'contact':
                contactRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            default:
                break;
        }
    };

    return (
        <>
            <Navigation handleScroll={handleScroll} />
            <Home homeRef={homeRef} abilitiesRef={abilitiesRef} projectsRef={projectsRef} contactRef={contactRef}/>
            <Footer />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);