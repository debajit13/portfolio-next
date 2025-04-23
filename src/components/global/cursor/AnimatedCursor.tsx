// components/AnimatedCursor.tsx
import React, { useEffect, useRef, useState } from 'react';

interface CursorProps {
  color?: string;
  outerSize?: number;
  innerSize?: number;
  outerScale?: number;
  innerScale?: number;
  trailingSpeed?: number;
  outerAlpha?: number;
  outerStyle?: React.CSSProperties;
  innerStyle?: React.CSSProperties;
  clickEffect?: boolean;
}

const AnimatedCursor: React.FC<CursorProps> = ({
  color = '#ffffff',
  outerSize = 20,
  innerSize = 10,
  outerScale = 2,
  innerScale = 0.6,
  trailingSpeed = 0.8, // Increased from 0.2 to 0.8 for faster response
  outerAlpha = 0.3,
  outerStyle = {},
  innerStyle = {},
  clickEffect = true,
}) => {
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);
  const previousTimeRef = useRef<number>(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isActiveClickable, setIsActiveClickable] = useState(false);
  const endX = useRef(0);
  const endY = useRef(0);

  // Mouse position management - more direct now
  const onMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
    endX.current = clientX;
    endY.current = clientY;
    setIsVisible(true);

    // For immediate response on the inner cursor
    if (cursorInnerRef.current) {
      cursorInnerRef.current.style.left = `${clientX}px`;
      cursorInnerRef.current.style.top = `${clientY}px`;
    }
  };

  // Click effect handling
  const onMouseDown = () => {
    if (clickEffect) {
      setIsActive(true);
    }
  };

  const onMouseUp = () => {
    if (clickEffect) {
      setIsActive(false);
    }
  };

  // Handle clickable elements
  const onMouseOver = (e: MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains('clickable')) {
      setIsActiveClickable(true);
    }
  };

  const onMouseOut = (e: MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains('clickable')) {
      setIsActiveClickable(false);
    }
  };

  // Initial setup and cleanup
  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    // Handle cursor moving out of browser window
    document.addEventListener('mouseenter', () => setIsVisible(true));
    document.addEventListener('mouseleave', () => setIsVisible(false));

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      document.removeEventListener('mouseenter', () => setIsVisible(true));
      document.removeEventListener('mouseleave', () => setIsVisible(false));
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Animation loop using requestAnimationFrame - simplified for the outer cursor
  const animateOuterCursor = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      const outerCursor = cursorOuterRef.current;

      if (outerCursor) {
        // Calculate new position with faster trailing speed
        outerCursor.style.left = `${endX.current}px`;
        outerCursor.style.top = `${endY.current}px`;

        // Apply transform for scaling effect
        outerCursor.style.transform = `translate(-50%, -50%) scale(${
          isActive ? outerScale : 1
        })`;
      }
    }

    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateOuterCursor);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuterCursor);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isActive, isActiveClickable]);

  // Styles for the inner and outer cursor elements
  const cursorOuterStyle = {
    ...outerStyle,
    position: 'fixed',
    width: outerSize + 'px',
    height: outerSize + 'px',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    border: `1px solid ${color}`,
    opacity: isVisible ? outerAlpha : 0,
    pointerEvents: 'none',
    zIndex: 9999,
    top: 0,
    left: 0,
    transform: 'translate(-50%, -50%)',
    transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out', // Faster transition
    mixBlendMode: 'difference',
  } as React.CSSProperties;

  const cursorInnerStyle = {
    ...innerStyle,
    position: 'fixed',
    width: innerSize + 'px',
    height: innerSize + 'px',
    borderRadius: '50%',
    backgroundColor: color,
    opacity: isVisible ? 1 : 0,
    pointerEvents: 'none',
    zIndex: 9999,
    top: 0,
    left: 0,
    transform: 'translate(-50%, -50%) scale(${isActive ? innerScale : 1})',
    transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out', // Faster transition
    mixBlendMode: 'difference',
  } as React.CSSProperties;

  // Conditionally render the cursor if we're in a browser environment
  if (typeof window === 'undefined') {
    return null; // Don't render during SSR
  }

  return (
    <>
      <div ref={cursorOuterRef} style={cursorOuterStyle} />
      <div ref={cursorInnerRef} style={cursorInnerStyle} />
    </>
  );
};

export default AnimatedCursor;
