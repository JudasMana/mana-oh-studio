export const capitalizeWords = function (string) {
  const words = string
    .split(" ")
    .map(
      (word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
    );
  return words.join(" ");
};
