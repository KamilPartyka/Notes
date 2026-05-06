import { useCallback, useMemo, useState } from 'react';

/**
 * Custom hook to manage layering of items (e.g., cards) based on their IDs.
 * It provides functionality to bring an item to the front and calculates z-index values for each item.
 *
 * @param initialOrder - An array of item IDs representing the initial stacking order.
 * @returns An object containing:
 *   - zIndexById: A record mapping each item ID to its corresponding z-index value.
 *   - bringToFront: A function to bring a specific item to the front of the stack.
 *   - stackOrder: The current stacking order of item IDs.
 */
export const useLayering = <T extends string | number>(initialOrder: T[]) => {
  const [stackOrder, setStackOrder] = useState<T[]>(initialOrder);

  const bringToFront = useCallback((id: T) => {
    setStackOrder((prevOrder) => {
      if (prevOrder[prevOrder.length - 1] === id) {
        return prevOrder;
      }

      return [...prevOrder.filter((item) => item !== id), id];
    });
  }, []);

  // Assign z-index values based on the current stacking order, with the last item having the highest z-index.
  const zIndexById = useMemo(
    () =>
      Object.fromEntries(
        stackOrder.map((id, index) => [id, index + 1])
      ) as Record<T, number>,
    [stackOrder]
  );

  return {
    zIndexById,
    bringToFront,
    stackOrder,
  };
};
