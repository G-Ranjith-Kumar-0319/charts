const generateRandomHexColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const generateColors = (numberOfColors: number): string[] => {
  const colorArray: string[] = [];
  for (let i = 0; i < numberOfColors; i++) {
    colorArray.push(generateRandomHexColor());
  }
  return colorArray;
};

export default generateColors;
