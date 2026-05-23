import { useCallback, useEffect, useRef, useState } from 'react';
import { SIDEBAR_WIDTH } from '@/features/sidebar/constants/sidebarWidth';

interface UsePositionProps {
  initialPosition: { x: number; y: number };
}

/**
 * Custom hook to manage the position of a draggable element.
 * @param initialPosition - The initial position of the element.
 * @returns An object containing the current position, a ref for the element, a mouse down handler, and a dragging state.
 */
export const usePosition = ({ initialPosition }: UsePositionProps) => {
  const [position, setPosition] = useState(initialPosition || { x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const mouseStartingPoint = { x: e.clientX, y: e.clientY };
    const elPosition = cardRef.current.getBoundingClientRect();

    setOffset({
      x: mouseStartingPoint.x - elPosition.x,
      y: mouseStartingPoint.y - elPosition.y,
    });
    setIsDragging(true);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      const mouseStartingPoint = { x: e.clientX, y: e.clientY };

      // Don't allow dragging outside of the viewport
      const newPosition = {
        x: Math.max(SIDEBAR_WIDTH, mouseStartingPoint.x - offset.x),
        y: Math.max(0, mouseStartingPoint.y - offset.y),
      };

      setPosition(newPosition);
    },
    [isDragging, offset]
  );

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    window.addEventListener('mousemove', handleMouseMove, { signal });
    window.addEventListener('mouseup', handleMouseUp, { signal });

    return () => {
      controller.abort();
    };
  }, [handleMouseMove]);

  return { position, cardRef, handleMouseDown, isDragging };
};
