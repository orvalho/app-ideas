export const trimText = (text, textLength) => {
  if (text.length > textLength) {
    return text.slice(0, textLength) + '...';
  }
  return text;
};
