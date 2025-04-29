import React, { useEffect, useState } from 'react';
import { useCursor } from '../context/CursorContext';

const CustomCursor = () => {
  const { cursorType } = useCursor();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect if it's a touch device
  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
  }, []);

  // Handle mouse cursor for non-touch devices
  useEffect(() => {
    if (isTouchDevice) return;

    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isTouchDevice]);

  // Handle touch cursor for mobile devices
  useEffect(() => {
    if (!isTouchDevice) return;

    const updateTouchPosition = (e) => {
      if (e.touches.length > 0) {
        setPosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      }
    };

    document.addEventListener('touchmove', updateTouchPosition);

    return () => {
      document.removeEventListener('touchmove', updateTouchPosition);
    };
  }, [isTouchDevice]);

  const cursorVariants = {
    default: 'w-6 h-6 bg-transparent border-2 border-cyan-400',
    button: 'w-10 h-10 bg-cyan-400/20 backdrop-blur-sm border border-cyan-400',
    text: 'w-6 h-6 bg-transparent border-2 border-white',
  };

  // ⭐ This is the key point: if it's a touch device, no custom cursor.
  if (isTouchDevice) return null;

  return (
    <div
      className={`fixed pointer-events-none z-50 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 mix-blend-difference 
        ${cursorVariants[cursorType]} 
        ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
      `}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {/* This inner circle creates the small "tail" effect for the custom cursor */}
      <div className="w-1 h-1 bg-cyan-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
};

export default CustomCursor;
