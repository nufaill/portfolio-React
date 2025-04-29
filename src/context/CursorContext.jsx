import React, { createContext, useContext, useState, useEffect } from 'react';

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [cursorType, setCursorType] = useState('default');

  useEffect(() => {
    const handleLinkHover = () => {
      setCursorType('button');
    };

    const handleLinkLeave = () => {
      setCursorType('default');
    };

    const handleTextHover = () => {
      setCursorType('text');
    };

    // Apply to all clickable elements
    const clickableElements = document.querySelectorAll('a, button, [role="button"]');
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, input, textarea');

    clickableElements.forEach(element => {
      element.addEventListener('mouseenter', handleLinkHover);
      element.addEventListener('mouseleave', handleLinkLeave);
    });

    textElements.forEach(element => {
      element.addEventListener('mouseenter', handleTextHover);
      element.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      clickableElements.forEach(element => {
        element.removeEventListener('mouseenter', handleLinkHover);
        element.removeEventListener('mouseleave', handleLinkLeave);
      });

      textElements.forEach(element => {
        element.removeEventListener('mouseenter', handleTextHover);
        element.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};