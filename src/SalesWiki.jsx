import React from 'react';

function SalesWiki({ productStories, wikiContent, t, language, openModal }) {
  return (
    <div className={`sales-wiki-container ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <h2>{t('salesWiki')}</h2>
      {/* Add sales wiki content here */}
    </div>
  );
}

export default SalesWiki;
