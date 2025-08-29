import React, { useState } from 'react';
import { users } from '../data';

function Login({ onLogin, t, language, toggleLanguage }) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const user = users.find(u => u.pin === pin);
    if (user) {
      onLogin(user);
    } else {
      setError(t('invalidPin'));
    }
  };

  return (
    <div className={`login-container ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="login-box">
        <h2>{t('login')}</h2>
        <input 
          type="password" 
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          placeholder={t('enterPin')}
        />
        <button onClick={handleLogin}>{t('login')}</button>
        {error && <p className="error">{error}</p>}
        <button onClick={toggleLanguage} className="lang-toggle-button">
          {language === 'en' ? 'عربي' : 'English'}
        </button>
      </div>
    </div>
  );
}

export default Login;
