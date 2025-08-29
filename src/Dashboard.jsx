import React from 'react';

function Dashboard({ user, t, openModal, language }) {
  return (
    <div className={`dashboard-container ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <h2>{t('dashboard')}</h2>
      <p>{t('welcome')}, {user.name}!</p>
      {/* Add more dashboard content here */}
    </div>
  );
}

export default Dashboard;
