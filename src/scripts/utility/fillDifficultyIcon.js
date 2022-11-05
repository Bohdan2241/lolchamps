export default (difficulty, container) => {
  const difficultyMap = {
    0: 1,
    1: 1,
    2: 1,
    3: 1,
    4: 2,
    5: 2,
    6: 2,
    7: 2,
    8: 3,
    9: 3,
    10: 3,
    low: 1,
    moderate: 2,
    high: 3,
  };

  const indicators = container.children;
  Array.from(indicators).forEach((item, i) => {
    const indicator = item;
    indicator.className = '';
    if (i >= difficultyMap[difficulty]) {
      indicator.classList.add('difficulty-value-item-empty');
    } else {
      indicator.classList.add('difficulty-value-item');
    }
  });
};
