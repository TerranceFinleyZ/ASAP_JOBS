import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorBorderRef = useRef<HTMLDivElement>(null);

  // Check for mobile only on the client-side
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;

  if (isMobile) {
    return null;
  }

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorBorder = cursorBorderRef.current;

    if (!cursor || !cursorBorder) {
      // Exit if refs are not yet assigned (e.g., during initial render before DOM is ready)
      return;
    }

    gsap.set([cursor, cursorBorder], {
      xPercent: -50,
      yPercent: -50,
    });

    const xTo = gsap.quickTo(cursor, 'x', {
      duration: 0.2,
      ease: 'power3.out',
    });

    const yTo = gsap.quickTo(cursor, 'y', {
      duration: 0.2,
      ease: 'power3.out',
    });

    const xToBorder = gsap.quickTo(cursorBorder, 'x', { duration: 0.5, ease: 'power.out' });

    const yToBorder = gsap.quickTo(cursorBorder, 'y', { duration: 0.5, ease: 'power3.out' });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xToBorder(e.clientX);
      yToBorder(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    document.addEventListener('mousedown', () => {
      gsap.to([cursor, cursorBorder], {
        scale: 0.6,
        duration: 0.2,
      });
    });

    document.addEventListener('mouseup', () => {
      gsap.to([cursor, cursorBorder], {
        scale: 1,
        duration: 0.2, // Fixed: Added missing comma here
      });
    });

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', () => { }); // Dummy function for cleanup, actual listener needs to be removed
      document.removeEventListener('mouseup', () => { }); // Dummy function for cleanup, actual listener needs to be removed
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <div
        ref={cursorRef}
        className='fixed top-0 left-0 w-[20px] h-[20px] bg-[#ff66ff]
                   rounded-full pointer-events-none z-[999] mix-blend-difference'
      />

      <div
        ref={cursorBorderRef}
        className='fixed top-0 left-0 w-[40px] h-[40px] border rounded-full border-pink-200 
                   pointer-events-none z-[999] mix-blend-difference opacity-50' // Corrected 'opacoty-50' to 'opacity-50'
      />
    </>
  );
};

export default CustomCursor;