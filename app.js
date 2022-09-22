window.onload = () => {
  calculateIndividualTile()
};


calculateIndividualTile = () => {
  const container3 = document.getElementsByClassName("container_3");

  const fatherElementWidth = container3[0].clientWidth;
  const fatherElementHeight = container3[0].clientHeight;

  const childrenElementWidth = fatherElementWidth / 3
  const childrenElementHeight = fatherElementHeight / 3

  let single_cell = document.getElementsByClassName("single_cell");


  for (let i = 0; i < single_cell.length; i++) {
    console.log(i)
    console.log(childrenElementHeight)
    single_cell[i].style.width = `${childrenElementWidth}px`
    single_cell[i].style.height = `${childrenElementHeight}px`
 }

}