"use client"

import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorType, setCursorType] = useState('default');

  // Detect touch device
  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
  }, []);

  // Auto-detect cursor type based on hovered element
  const detectCursorType = (element) => {
    if (!element) {
      setCursorType('default');
      return;
    }

    const tagName = element.tagName.toLowerCase();
    const elementType = element.getAttribute('type');
    const isInteractive = element.matches('button, a, [role="button"], [onclick], input[type="submit"], input[type="button"]');
    const isTextInput = element.matches('input[type="text"], input[type="email"], input[type="password"], textarea, [contenteditable="true"]');

    if (isTextInput) {
      setCursorType('text');
    } else if (isInteractive) {
      setCursorType('button');
    } else {
      setCursorType('default');
    }
  };

  // Optimized mousemove handler with requestAnimationFrame
  useEffect(() => {
    if (isTouchDevice) return;

    let rafId;
    const updateMousePosition = (e) => {
      rafId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
        detectCursorType(elementUnderCursor);
      });
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'auto';
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isTouchDevice]);

  if (isTouchDevice || !visible) return null;

  const getCursorContent = () => {
    switch (cursorType) {
      case 'button':
        return (
          <div className="relative transform -translate-x-1/2 -translate-y-1/2">
            <div className={`w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg transition-all duration-200 ${isClicking ? 'scale-90' : 'scale-100'}`}>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
            <div className="absolute inset-0 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 animate-ping" />
          </div>
        );
      case 'text':
        return (
          <div className="relative transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-0.5 h-6 bg-gradient-to-b from-cyan-400 to-blue-400 animate-pulse shadow-lg shadow-cyan-400/50" />
            <div className="absolute -top-1 -left-1 w-2.5 h-8 bg-gradient-to-b from-cyan-400/20 to-blue-400/20 blur-sm" />
          </div>
        );
      default:
        return (
          <div className="relative transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-6 h-6 rounded-full border-2 border-cyan-300 bg-white/10 backdrop-blur-sm shadow-lg">
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-400/30" />
            </div>
            <div className="absolute inset-0 w-6 h-6 rounded-full border border-cyan-400/30 animate-pulse" />
          </div>
        );
    }
  };

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 transition-all duration-100"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        opacity: visible ? 1 : 0,
      }}
    >
      {getCursorContent()}
    </div>
  );
};

export default CustomCursor;