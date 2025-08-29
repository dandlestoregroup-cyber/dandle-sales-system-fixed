import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import OrderForm from './components/OrderForm';
import SalesWiki from './components/SalesWiki';
import DailyQuiz from './components/DailyQuiz';
import Modal from './components/Modal';
import { products, addons, colors, translations, productStories, wikiContent, quizData } from './data';
import './styles.css';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [activeComponent, setActiveComponent] = useState('dashboard');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [language, setLanguage] = useState('en'); // 'en' for English, 'ar' for Arabic

  useEffect(() => {
    // Check for saved language preference
    const savedLang = localStorage.getItem('appLanguage');
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setActiveComponent('dashboard'); // Reset to dashboard on logout
  };

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent('');
  };

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
    localStorage.setItem('appLanguage', newLang);
  };

  const t = (key) => translations[key]?.[language] || key; // Translation function

  if (!loggedInUser) {
    return <Login onLogin={handleLogin} t={t} language={language} toggleLanguage={toggleLanguage} />;
  }

  return (
    <div className={`app-container ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <header className="app-header">
        <h1>{t('dandleSalesSystem')}</h1>
        <nav>
          <button onClick={() => setActiveComponent('dashboard')}>{t('dashboard')}</button>
          <button onClick={() => setActiveComponent('orderForm')}>{t('orderForm')}</button>
          <button onClick={() => setActiveComponent('salesWiki')}>{t('salesWiki')}</button>
          <button onClick={() => setActiveComponent('dailyQuiz')}>{t('dailyQuiz')}</button>
          <button onClick={toggleLanguage} className="lang-toggle-button">
            {language === 'en' ? 'عربي' : 'English'}
          </button>
          <button onClick={handleLogout}>{t('logout')} ({loggedInUser.name})</button>
        </nav>
      </header>
      <main className="app-main">
        {activeComponent === 'dashboard' && <Dashboard user={loggedInUser} t={t} openModal={openModal} language={language} />} 
        {activeComponent === 'orderForm' && <OrderForm products={products} addons={addons} colors={colors} t={t} language={language} openModal={openModal} />} 
        {activeComponent === 'salesWiki' && <SalesWiki productStories={productStories} wikiContent={wikiContent} t={t} language={language} openModal={openModal} />} 
        {activeComponent === 'dailyQuiz' && <DailyQuiz quizData={quizData} t={t} language={language} openModal={openModal} />} 
      </main>
      <Modal show={showModal} onClose={closeModal} content={modalContent} t={t} language={language} />
    </div>
  );
}

export default App;
