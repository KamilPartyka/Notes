import { useCallback, useEffect, useRef } from 'react';

/**
 * Custom hook to automatically grow a textarea element based on its content.
 * @returns An object containing the autoGrow function and a ref for the textarea element.
 */
export const useAutoGrow = () => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const autoGrow = useCallback(() => {
    if (!textAreaRef.current) return;
    const { current } = textAreaRef;
    current.style.height = 'auto'; // Reset height to auto to recalculate scrollHeight
    current.style.height = current.scrollHeight + 'px'; // Set height to scrollHeight to fit content
  }, [textAreaRef]);

  useEffect(() => {
    autoGrow();
  }, [textAreaRef, autoGrow]);

  return { autoGrow, textAreaRef };
};
