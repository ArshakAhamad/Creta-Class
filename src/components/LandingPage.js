// LandingPage.js
import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  // Logo component
  const Logo = () => (
    <div className="logo">
      <img src="images/logo.png" alt="Creta Class Logo" />
     
    </div>
  );

  // NavButton component
  const NavButton = ({ text }) => (
    <button className="nav-button">
      {text} <span role="img" aria-label="icon">🌟</span>
    </button>
  );

  // ContactInfo component
  const ContactInfo = () => (
    <div className="contact">
  <img src="images/contact.png" alt="Contact info image" />
    </div>
  );

  // Title component
  const Title = ({ text }) => <h1 className="title">{text}</h1>;

  return (
    <header className="header">
      <Logo />
      <div className="nav-buttons">
        <NavButton text="ABOUT" />
        <NavButton text="MATH" />
      </div>
      <ContactInfo />
      <Title text="ELON" />
    </header>
  );
};

export default LandingPage;
