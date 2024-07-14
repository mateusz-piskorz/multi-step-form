import { useState } from 'react';

export default function usePagination(totalPages: number) {
  const [activeIndex, setActiveIndex] = useState(0);

  const moveTo = (index: number) => {
    setActiveIndex(index);
  };

  const moveToNext = () => {
    if (activeIndex < totalPages) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const moveToPrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return {
    activeIndex,
    isLastIndex: activeIndex === totalPages - 1,
    isFirstIndex: activeIndex === 0,
    moveToPrevious,
    moveToNext,
    moveTo,
  };
}
