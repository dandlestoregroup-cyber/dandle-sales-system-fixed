import React from 'react';

function DailyQuiz({ quizData, t, language, openModal }) {
  return (
    <div className={`daily-quiz-container ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <h2>{t('dailyQuiz')}</h2>
      {/* Add daily quiz content here */}
    </div>
  );
}

export default DailyQuiz;
