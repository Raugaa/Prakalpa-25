import React, { useEffect } from 'react';
import './ThemePage.css';
import Card from '../../components/Card';
import useSmoothScrollTo from '../../hooks/useSmoothScrollTo';

const cards = [
  { src: "https://github.com/user-attachments/assets/fda3deaf-8d91-414d-9f13-8cb4280b6555", title: "AI/Ml", description: "Generative AI creates new content using advanced machine learning models." },
  { src: "https://github.com/user-attachments/assets/ed3a421d-0556-4064-a60c-75cda82f86b7", title: "Game Development", description: "Designing, creating, and programming interactive video games." },
  { src: "https://github.com/user-attachments/assets/0b41654d-2d95-4121-85a3-0b0acd5fd788", title: "Blockchain", description: "Decentralized technology enabling secure digital transactions and Web3 applications." },
  { src: "https://github.com/user-attachments/assets/6b764909-3b9d-4663-897c-3977f20bc585", title: "Cybersecurity", description: "Protecting computer systems, networks, and data from cyberattacks." },
  { src: "https://github.com/user-attachments/assets/f804cb7f-2ab1-4c92-a629-6234a975d6b8", title: "Cloud Computing", description: "On-demand computing resources over the internet." },
  { src: "https://github.com/user-attachments/assets/ac7fbd65-6e7e-40b0-b70a-32d64f617349", title: "Autonomous Vehicles", description: "Self-driving vehicles equipped with sensors and AI." },
  { src: "https://github.com/user-attachments/assets/5e24f079-eacc-4d39-8eac-fbc1769d163b", title: "Wearable Technology", description: "Devices like smartwatches and fitness trackers worn on the body." },
  { src: "https://github.com/user-attachments/assets/636cd18b-af68-42c4-9b58-046d1d7266d9", title: "Robotics", description: "Designing and programming robots to perform tasks autonomously." },
  { src: "https://github.com/user-attachments/assets/00c25f1f-b89e-4fe3-97e0-457d731b3fbb", title: "Internet of Things", description: "Connecting physical devices to the internet for data sharing." },
  { src: "https://github.com/user-attachments/assets/2789afea-9167-46b1-9c74-dea1f3fd8bd2", title: "Renewable Energy", description: "Harnessing natural resources for sustainable and clean energy." },
  { src: "https://github.com/user-attachments/assets/ecd5d48e-573c-4a2d-aa79-a419d3c67a3f", title: "Biotechnology", description: "Using biological systems and organisms to develop new products." },
  { src: "https://github.com/user-attachments/assets/ddf9e287-aa40-4333-bd8c-51e2c264a924", title: "Agrotech", description: "Innovations in agriculture to improve farming practices and food production." },
];

const ThemePage = () => {
  const themeBind = useSmoothScrollTo('#themes');


  const handleScroll = () => {
    const header = document.querySelector('.themesHeader');
    const threshold = window.innerHeight / 3;

    if (window.scrollY >= threshold) {
      header.style.transform = 'translateX(0%)';
      header.style.opacity = '1';
    } else {
      header.style.transform = 'translateX(-100%)';
      header.style.opacity = '0';
    }
  };

  useEffect(() => {
    const header = document.querySelector('.themesHeader');
    header.style.transform = 'translateX(-100%)';
    header.style.opacity = '0';

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='landingAndThemePageDivide'></div>
      <div className="theme-page-bg" id="themes" {...themeBind}>
        <div className="layout">
          <h1 className="themesHeader">Themes for the Event</h1>
          <div className="card-container">
            {cards.map((card, index) => (
              <Card
                className="individualThemeCard glow-border"
                src={card.src}
                title={<span className="glow-effect">{card.title}</span>}
                description={card.description}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemePage;
