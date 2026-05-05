import { useCallback, useEffect } from 'react';

interface UseAutoGrowProps {
  textAreaRef: React.RefObject<HTMLTextAreaElement | null>;
}

export const useAutoGrow = ({ textAreaRef }: UseAutoGrowProps) => {
  const autoGrow = useCallback(() => {
    if (!textAreaRef.current) return;
    const { current } = textAreaRef;
    current.style.height = 'auto'; // Reset height to auto to recalculate scrollHeight
    current.style.height = current.scrollHeight + 'px'; // Set height to scrollHeight to fit content
  }, [textAreaRef]);

  useEffect(() => {
    autoGrow();
  }, [textAreaRef, autoGrow]);

  return { autoGrow };
};
