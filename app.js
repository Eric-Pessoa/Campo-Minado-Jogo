window.onload = () => {
  calculateIndividualTile()
};

convertPixelToVw = (pixelWidth) => {
  const screenWidth = document.getElementsByClassName("container_1")[0].clientWidth;
  return (100 * (pixelWidth / screenWidth)).toFixed(1)
 }

 convertPixelToVh = (pixelHeight) => {
  const screenHeight = document.getElementsByClassName("container_1")[0].clientHeight;
  return (100 * (pixelHeight / screenHeight)).toFixed(1)
 }

calculateIndividualTile = () => {
  const container3 = document.getElementsByClassName("container_3");

  const fatherElementVw = convertPixelToVw(container3[0].clientWidth);
  const fatherElementVh = convertPixelToVh(container3[0].clientHeight);

  const childrenElementVw = Number((fatherElementVw / 3).toFixed(1) - 0.1)
  const childrenElementVh = Number((fatherElementVh / 4).toFixed(1))

  let single_cell = document.getElementsByClassName("single_cell");

  for (let i = 0; i < single_cell.length; i++) {
    single_cell[i].style.width = `${childrenElementVw}vw`
    single_cell[i].style.height = `${childrenElementVh}vh`
 }
}