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
  newDiv.innerText = i
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

const isALeftTypeTile = (relativeTiles) => {

    if(relativeTiles.upperDiv !== undefined) {
      relativeTiles.upperDiv.style.backgroundColor = 'red'
    }
    if(relativeTiles.diagonalUpperRightDiv !== undefined) {
      relativeTiles.diagonalUpperRightDiv.style.backgroundColor = 'red'
    }
    if(relativeTiles.rightDiv !== undefined) {
      relativeTiles.rightDiv.style.backgroundColor = 'red'
    }
    if(relativeTiles.bottomDiv !== undefined) {
      relativeTiles.bottomDiv.style.backgroundColor = 'red'
    }
    if(relativeTiles.diagonalLowerRightDiv !== undefined) {
      relativeTiles.diagonalLowerRightDiv.style.backgroundColor = 'red'
    }
}

const isARightTypeTile = (relativeTiles) => {

    if(relativeTiles.diagonalUpperLeftDiv !== undefined) {
      relativeTiles.diagonalUpperLeftDiv.style.backgroundColor = 'red'
    }
    if(relativeTiles.upperDiv !== undefined) {
      relativeTiles.upperDiv.style.backgroundColor = 'red'
    }
    if(relativeTiles.leftDiv !== undefined) {
      relativeTiles.leftDiv.style.backgroundColor = 'red'
    }
    if(relativeTiles.diagonalLowerLeftDiv !== undefined) {
      relativeTiles.diagonalLowerLeftDiv.style.backgroundColor = 'red'
    }
    if(relativeTiles.bottomDiv !== undefined) {
      relativeTiles.bottomDiv.style.backgroundColor = 'red'
    }
  
}

const isAUpperTypeTile = (relativeTiles) => {

    if(relativeTiles.leftDiv !== undefined) {
      relativeTiles.leftDiv.style.backgroundColor = 'red'
    }
    if(relativeTiles.rightDiv !== undefined) {
      relativeTiles.rightDiv.style.backgroundColor = 'red'
    }
    if(relativeTiles.diagonalLowerLeftDiv !== undefined) {
      relativeTiles.diagonalLowerLeftDiv.style.backgroundColor = 'red'
    }
    if(relativeTiles.bottomDiv !== undefined) {
      relativeTiles.bottomDiv.style.backgroundColor = 'red'
    }
    if(relativeTiles.diagonalLowerRightDiv !== undefined) {
      relativeTiles.diagonalLowerRightDiv.style.backgroundColor = 'red'
    }
  
}

const isABottomTypeTile = (relativeTiles) => {

    if(relativeTiles.diagonalUpperLeftDiv !== undefined) {
      relativeTiles.diagonalUpperLeftDiv.style.backgroundColor = 'red'
    }
    if(relativeTiles.upperDiv !== undefined) {
      relativeTiles.upperDiv.style.backgroundColor = 'red'
    }
    if(relativeTiles.diagonalUpperRightDiv !== undefined) {
      relativeTiles.diagonalUpperRightDiv.style.backgroundColor = 'red'
    }
    if(relativeTiles.leftDiv !== undefined) {
      relativeTiles.leftDiv.style.backgroundColor = 'red'
    }
    if(relativeTiles.rightDiv !== undefined) {
      relativeTiles.rightDiv.style.backgroundColor = 'red'
    }
  
}

const isACornerTypeTile = (selectedDivNumber, relativeTiles) => {

    if(selectedDivNumber === 0) {
      if(relativeTiles.rightDiv !== undefined) {
        relativeTiles.rightDiv.style.backgroundColor = 'red'
      }
      if(relativeTiles.bottomDiv !== undefined) {
        relativeTiles.bottomDiv.style.backgroundColor = 'red'
      }
      if(relativeTiles.diagonalLowerRightDiv !== undefined) {
        relativeTiles.diagonalLowerRightDiv.style.backgroundColor = 'red'
      }
    }
    if(selectedDivNumber === 18) {
      if(relativeTiles.leftDiv !== undefined) {
        relativeTiles.leftDiv.style.backgroundColor = 'red'
      }
      if(relativeTiles.diagonalLowerLeftDiv !== undefined) {
        relativeTiles.diagonalLowerLeftDiv.style.backgroundColor = 'red'
      }
      if(relativeTiles.bottomDiv !== undefined) {
        relativeTiles.bottomDiv.style.backgroundColor = 'red'
      }
    }
    if(selectedDivNumber === 361) {
      if(relativeTiles.upperDiv !== undefined) {
        relativeTiles.upperDiv.style.backgroundColor = 'red'
      }
      if(relativeTiles.diagonalUpperRightDiv !== undefined) {
        relativeTiles.diagonalUpperRightDiv.style.backgroundColor = 'red'
      }
      if(relativeTiles.rightDiv !== undefined) {
        relativeTiles.rightDiv.style.backgroundColor = 'red'
      }
    }
    if(selectedDivNumber === 379) {
      if(relativeTiles.diagonalUpperLeftDiv !== undefined) {
        relativeTiles.diagonalUpperLeftDiv.style.backgroundColor = 'red'
      }
      if(relativeTiles.upperDiv !== undefined) {
        relativeTiles.upperDiv.style.backgroundColor = 'red'
      }
      if(relativeTiles.leftDiv !== undefined) {
        relativeTiles.leftDiv.style.backgroundColor = 'red'
      }
    }
}

const isANormalTile = (relativeTiles) => {

  if(relativeTiles.diagonalUpperLeftDiv !== undefined) {
    relativeTiles.diagonalUpperLeftDiv.style.backgroundColor = 'red'
  }
  if(relativeTiles.upperDiv !== undefined) {
    relativeTiles.upperDiv.style.backgroundColor = 'red'
  }
  if(relativeTiles.diagonalUpperRightDiv !== undefined) {
    relativeTiles.diagonalUpperRightDiv.style.backgroundColor = 'red'
  }
  if(relativeTiles.leftDiv !== undefined) {
    relativeTiles.leftDiv.style.backgroundColor = 'red'
  }
  if(relativeTiles.rightDiv !== undefined) {
    relativeTiles.rightDiv.style.backgroundColor = 'red'
  }
  if(relativeTiles.diagonalLowerLeftDiv !== undefined) {
    relativeTiles.diagonalLowerLeftDiv.style.backgroundColor = 'red'
  }
  if(relativeTiles.bottomDiv !== undefined) {
    relativeTiles.bottomDiv.style.backgroundColor = 'red'
  }
  if(relativeTiles.diagonalLowerRightDiv !== undefined) {
    relativeTiles.diagonalLowerRightDiv.style.backgroundColor = 'red'
  }

}


const inferTiles = (selectedDivNumber) => {

  const diagonalUpperLeftDiv = document.getElementsByClassName("single_cell")[selectedDivNumber - 20]
  const upperDiv = document.getElementsByClassName("single_cell")[selectedDivNumber - 19]
  const diagonalUpperRightDiv = document.getElementsByClassName("single_cell")[selectedDivNumber - 18]
  const leftDiv = document.getElementsByClassName("single_cell")[selectedDivNumber - 1]
  const rightDiv = document.getElementsByClassName("single_cell")[selectedDivNumber + 1]
  const diagonalLowerLeftDiv = document.getElementsByClassName("single_cell")[selectedDivNumber + 18]
  const bottomDiv = document.getElementsByClassName("single_cell")[selectedDivNumber + 19]
  const diagonalLowerRightDiv = document.getElementsByClassName("single_cell")[selectedDivNumber + 20]    

  const relativeTiles = {
    diagonalUpperLeftDiv,
    upperDiv,
    diagonalUpperRightDiv,
    leftDiv,
    rightDiv,
    diagonalLowerLeftDiv,
    bottomDiv,
    diagonalLowerRightDiv
  }

  LeftTiles = [19, 38, 57, 76, 95, 114, 133, 152, 171, 190, 209, 228, 247, 266, 285, 304, 323, 342]
  rightTiles = [37, 56, 75, 94, 113, 132, 151, 170, 189, 208, 227, 246, 265, 284, 303, 322, 341, 360]
  upperTiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  bottomtiles = [362, 363, 364, 365, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378]
  cornerTiles = [0, 18, 361, 379]

if(LeftTiles.includes(selectedDivNumber)){
  isALeftTypeTile(relativeTiles);
} else if(upperTiles.includes(selectedDivNumber)){
  isAUpperTypeTile(relativeTiles);
} else if(rightTiles.includes(selectedDivNumber)){
  isARightTypeTile(relativeTiles);
} else if(bottomtiles.includes(selectedDivNumber)){
  isABottomTypeTile(relativeTiles);
} else if(cornerTiles.includes(selectedDivNumber)){
  isACornerTypeTile(selectedDivNumber, relativeTiles);
} else {
  isANormalTile(relativeTiles);
}
}

addBombEventListenerToTiles = () => {
  for (let i = 0; i < document.getElementsByClassName("single_cell").length; i++) {
    const selectedDiv =  document.getElementsByClassName("single_cell")[i]

    selectedDiv.addEventListener("click", () => {
      inferTiles(i)
    })


    selectedDiv.addEventListener("click", () => {
      for (let i = 0; i < selectedDiv.classList.length; i++) {
        if(selectedDiv.classList[i] === 'bomb') {
          selectedDiv.style.backgroundImage = 'url(assets/djeisonzinho.png)'
          selectedDiv.style.objectFit = 'contain'
        }
      }
      }
    );
  }
}





