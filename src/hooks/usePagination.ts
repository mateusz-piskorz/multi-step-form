import { useState } from 'react';

export default function usePagination(totalPages: number) {
  const [activeIndex, setActiveIndex] = useState(0);

  const isLast = activeIndex === totalPages - 1;
  const isFirst = activeIndex === 0;

  const moveTo = (index: number) => setActiveIndex(index);
  const moveToNext = () => !isLast && setActiveIndex((prev) => prev + 1);
  const moveToPrevious = () => !isFirst && setActiveIndex((prev) => prev - 1);

  return {
    activeIndex,
    isLast,
    isFirst,
    moveToPrevious,
    moveToNext,
    moveTo,
  };
}
