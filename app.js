window.onload = () => {
  appendChilds(380)
  calculateIndividualTile()
  placeBombs()
  addBombEventListenerToTiles()
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

    const childrenElementVw = Number((fatherElementVw / 20).toFixed(1))
    const childrenElementVh = Number((fatherElementVh / 20).toFixed(1))

    let single_cell = document.getElementsByClassName("single_cell");

    for (let i = 0; i < single_cell.length; i++) {
      single_cell[i].style.width = `${childrenElementVw}vw`
      single_cell[i].style.height = `${childrenElementVh}vh`
  }
}

appendChilds = (numberOfIndividualTiles) => {
  for (let i = 0; i < numberOfIndividualTiles; i++) {
  const newDiv =  document.createElement("div");
  newDiv.classList.add('single_cell');
  document.getElementsByClassName("container_3")[0].appendChild(newDiv);
 }
}

placeBombs = () => {
  for (let i = 0; i < document.getElementsByClassName("single_cell").length; i++) {
    const randomNumber = Math.floor(Math.random() * 101);
    if(randomNumber > 50 && randomNumber % 2 === 0) {
      const selectedDiv = document.getElementsByClassName("single_cell")[i];
      selectedDiv.classList.add("bomb");
    }
  }
}

addBombEventListenerToTiles = () => {
  for (let i = 0; i < document.getElementsByClassName("single_cell").length; i++) {
    const selectedDiv =  document.getElementsByClassName("single_cell")[i]
    selectedDiv.addEventListener("click", () => {
      for (let i = 0; i < selectedDiv.classList.length; i++) {
        console.log('TA')
        if(selectedDiv.classList[i] === 'bomb') {
          console.log('TEC')
          selectedDiv.style.backgroundImage = 'url(assets/djeisonzinho.png)'
          selectedDiv.style.objectFit = 'contain'

        }
      }
      }
    );
  }
}





