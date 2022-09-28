window.onload = () => {
  calculateIndividualTile()
};

convertPixelToVw = (pixelWidth) => {
  const screenWidth = screen.width;
  return ((pixelWidth / screenWidth) * 100).toFixed(1)
 }

 convertPixelToVh = (pixelHeight) => {
  const screenHeight = screen.height;
  return ((pixelHeight / screenHeight) * 100).toFixed(1)
 }

calculateIndividualTile = () => {
  const container3 = document.getElementsByClassName("container_3");

  const fatherElementVw = convertPixelToVw(container3[0].clientWidth);
  const fatherElementVh = convertPixelToVh(container3[0].clientHeight);

  const childrenElementVw = (fatherElementVw / 3)
  const childrenElementVh = (fatherElementVh / 3)

  console.log(fatherElementVw)
  console.log(fatherElementVh)
  console.log(childrenElementVw)
  console.log(childrenElementVh)

  let single_cell = document.getElementsByClassName("single_cell");


  for (let i = 0; i < single_cell.length; i++) {
    single_cell[i].style.width = `${childrenElementVw}vw`
    single_cell[i].style.height = `${childrenElementVh}vh`
 }
}