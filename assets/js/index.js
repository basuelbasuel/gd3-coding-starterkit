//Scroll Pictures

window.addEventListener("scroll", parallaxEffect);

function parallaxEffect(){

  let { scrollX } = window;

//-------------------TITEL SCROLL---------------------------------------------------------- 

  var overlay = document.getElementById('overlay');
    var scrollPosition = window.scrollX;
    var opacity = 1 - (scrollPosition / 500); // Adjust this value based on your requirement
    
    overlay.style.opacity = opacity < 0 ? 0 : opacity; // Ensure opacity doesn't go below 0


//-------------------HOUSE SCENES----------------------------------------------------------             
	var houseScenes = document.getElementsByClassName("houseScene");

	for (var houseIndex = 0; houseIndex < houseScenes.length; houseIndex++) {
		let innerRow1 = houseScenes[houseIndex].getElementsByClassName('innerRow1_1')[0];
		let innerRow2 = houseScenes[houseIndex].getElementsByClassName('innerRow2_1')[0];
		let housePaddingR1 = houseScenes[houseIndex].getElementsByClassName('innerRow1')[0];
		let housePaddingR2 = houseScenes[houseIndex].getElementsByClassName('innerRow2')[0];
		
		var min = houseScenes[houseIndex].offsetLeft - window.innerWidth;
		var max = houseScenes[houseIndex].offsetLeft + houseScenes[houseIndex].clientWidth - 20;
		let percentage = ((scrollX - min) * 100) / (max - min);
		if (percentage < 0) percentage = 0;
		if (percentage > 100) percentage = 100;

		var sceneWidth = houseScenes[houseIndex].clientWidth - 20;
		var scaleFactorR2 = (sceneWidth - innerRow2.offsetWidth) / sceneWidth;
		var scaleFactorR1 = (sceneWidth - innerRow1.offsetWidth) / sceneWidth;

		housePaddingR1.style.marginLeft = (100 - percentage)*scaleFactorR1 + "%";
		housePaddingR2.style.marginLeft = (100 - percentage)*scaleFactorR2 + "%";

	}
	
	
//------------------- TEXT SCENES---------------------------------------------------------- 	
	var textScenes = document.getElementsByClassName("textScene");

	for (var textIndex = 0; textIndex < textScenes.length; textIndex++) {
		let textPaddingR2 = textScenes[textIndex].getElementsByClassName('innerRow2')[0];
		let textPaddingR3 = textScenes[textIndex].getElementsByClassName('innerRow3')[0];
		
		var min = textScenes[textIndex].offsetLeft - window.innerWidth;
		var max = textScenes[textIndex].offsetLeft + textScenes[textIndex].clientWidth - 20;
		var percentage = ((scrollX - min) * 100) / (max - min);
		if (percentage < 0) percentage = 0;
		if (percentage > 100) percentage = 100;
		
		textPaddingR2.style.marginLeft = percentage + "%";
		textPaddingR2.children[0].style.transform = "translateX(-" + percentage + "%";
		textPaddingR3.style.marginLeft = 100 - percentage + "%";
		textPaddingR3.children[0].style.transform = "translateX(-" + percentage + "%";
	}	

//--------------------OUTRO---------------------------------------------------------- 	

   var scenes = document.getElementsByClassName("scene");
    if (scrollX >= scenes[scenes.length -1].offsetLeft) {
        var overlay = document.getElementById('overlayEnd');
        var scrollPosition = window.scrollX - scenes[scenes.length -1].offsetLeft;
        var opacity = (scrollPosition / 800); // Adjust this value based on your requirement
        
        overlay.style.opacity = opacity < 0 ? 0 : opacity; // Ensure opacity doesn't go below 0
        overlay.style.opacity = opacity > 0.999 ? 0.999 : opacity; // Ensure opacity doesn't go below 0


        console.log(overlay.style.opacity);
    }
}

//-----------------------------------------------------------------------------------


//random stripes and color
var container3 = document.getElementById("innerRow3");
var container2 = document.getElementById("innerRow2");
var container1 = document.getElementById("innerRow1");
    
function getRandomColor() {
    var colors = ['rgb(126, 172, 79)', 'rgb(128, 135, 136)', 'rgb(233, 204, 43)', 'rgb(229, 197, 204)', 'rgb(240, 149, 86)', 'rgb(80, 134, 183)', 'rgb(194, 77, 88)', 'rgb(114, 100, 137)', 'rgb(183, 215, 224)'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function pickRandomNumber() {
const numbers = [16.6, 33.3, 50, 66.6, 83.33, 100];
const randomIndex = Math.floor(Math.random() * numbers.length);
return numbers[randomIndex];
}

function addRandomStripe(innerDiv) {
    var stripe = document.createElement("div");
    var stripeWidth = pickRandomNumber();
    stripe.style.width = stripeWidth + "%";
    stripe.style.height = "100%";
    stripe.style.backgroundColor = getRandomColor();
    innerDiv.appendChild(stripe);
}

var houseScenes = document.getElementsByClassName("houseScene");

for (var houseIndex = 0; houseIndex < houseScenes.length; houseIndex++) {

    // House 1
    var firstRowHouses = 0;
    var secondRowHouses = 0;
    var thirdRowHouses = 5;
    
    // House 2
    if (houseIndex == 1) {
        firstRowHouses = 2;
        secondRowHouses = 0;
        thirdRowHouses = 2;
    }

    // House 3
    if (houseIndex == 2) {
        firstRowHouses = 8;
        secondRowHouses = 6;
        thirdRowHouses = 5;
    }

    // House 4
    if (houseIndex == 3) {
        firstRowHouses = 2;
        secondRowHouses = 2;
        thirdRowHouses = 2;
    }
    
    // House 5
    if (houseIndex == 4) {
        firstRowHouses = 2;
        secondRowHouses = 2;
        thirdRowHouses = 2;
    }

    // House 6
    if (houseIndex == 5) {
        firstRowHouses = 2;
        secondRowHouses = 2;
        thirdRowHouses = 2;
    }

    // House 7
    if (houseIndex == 6) {
        firstRowHouses = 2;
        secondRowHouses = 2;
        thirdRowHouses = 2;
    }

    // House 8
    if (houseIndex == 7) {
        firstRowHouses = 4;
        secondRowHouses = 4;
        thirdRowHouses = 4;
    }

    // House 9
    if (houseIndex == 8) {
        firstRowHouses = 4;
        secondRowHouses = 4;
        thirdRowHouses = 4;
    }

     // House 10
    if (houseIndex == 9) {
        firstRowHouses = 1;
        secondRowHouses = 1;
        thirdRowHouses = 1;
    }

    // House 11
    if (houseIndex == 10) {
        firstRowHouses = 1;
        secondRowHouses = 1;
        thirdRowHouses = 1;
    }

    // House 12
    if (houseIndex == 11) {
        firstRowHouses = 1;
        secondRowHouses = 1;
        thirdRowHouses = 1;
    }

    // House 13
    if (houseIndex == 12) {
        firstRowHouses = 1;
        secondRowHouses = 1;
        thirdRowHouses = 1;
    }

    // House 14
    if (houseIndex == 13) {
        firstRowHouses = 1;
        secondRowHouses = 1;
        thirdRowHouses = 1;
    }

    // House 15
    if (houseIndex == 14) {
        firstRowHouses = 1;
        secondRowHouses = 1;
        thirdRowHouses = 1;
    }

    // House 16
    if (houseIndex == 15) {
        firstRowHouses = 1;
        secondRowHouses = 1;
        thirdRowHouses = 1;
    }

    // House 17
    if (houseIndex == 16) {
        firstRowHouses = 1;
        secondRowHouses = 1;
        thirdRowHouses = 1;
    }

    // House 18
    if (houseIndex == 17) {
        firstRowHouses = 1;
        secondRowHouses = 1;
        thirdRowHouses = 1;
    }

    // House 19
    if (houseIndex == 18) {
        firstRowHouses = 0;
        secondRowHouses = 0;
        thirdRowHouses = 10;
    }

    // House 20
    if (houseIndex == 19) {
      firstRowHouses = 0;
      secondRowHouses = 4;
      thirdRowHouses = 4;
  }
  
    // House 21
    if (houseIndex == 20) {
      firstRowHouses = 1;
      secondRowHouses = 0;
      thirdRowHouses = 1;
  }

  // House 22
  if (houseIndex == 21) {
    firstRowHouses = 0;
    secondRowHouses = 1;
    thirdRowHouses = 1;
}

// House 23
if (houseIndex == 22) {
    firstRowHouses = 1;
    secondRowHouses = 0;
    thirdRowHouses = 1;
}

// House 24
if (houseIndex == 23) {
    firstRowHouses = 0;
    secondRowHouses = 1;
    thirdRowHouses = 1;
}

// House 25
if (houseIndex == 24) {
    firstRowHouses = 1;
    secondRowHouses = 0;
    thirdRowHouses = 1;
}

// House 26
if (houseIndex == 25) {
    firstRowHouses = 0;
    secondRowHouses = 0;
    thirdRowHouses = 1;
}

  



    
    //random stripes and color
    var container3 = houseScenes[houseIndex].getElementsByClassName("innerRow3")[0];
    var container2 = houseScenes[houseIndex].getElementsByClassName("innerRow2_1")[0];
    var container1 = houseScenes[houseIndex].getElementsByClassName("innerRow1_1")[0];


    //R3
    for (var i = 0; i < thirdRowHouses; i++) {
    var outerDiv = document.createElement("div");
    outerDiv.className = "housesR3";

    var innerDiv1 = document.createElement("div");
    innerDiv1.className = "stripeContainer";
    addRandomStripe(innerDiv1);

    var innerDiv2 = document.createElement("div");
    innerDiv2.className = "stripeContainer";
    addRandomStripe(innerDiv2);

    outerDiv.appendChild(innerDiv1);
    outerDiv.appendChild(innerDiv2);

    container3.appendChild(outerDiv);
    }

    //R2
    for (var i = 0; i < secondRowHouses; i++) {
    var outerDiv = document.createElement("div");
    outerDiv.className = "housesR2";

    var innerDiv1 = document.createElement("div");
    innerDiv1.className = "stripeContainer";
    addRandomStripe(innerDiv1);

    var innerDiv2 = document.createElement("div");
    innerDiv2.className = "stripeContainer";
    addRandomStripe(innerDiv2);

    outerDiv.appendChild(innerDiv1);
    outerDiv.appendChild(innerDiv2);

    container2.appendChild(outerDiv);
    }

    //R1
    for (var i = 0; i < firstRowHouses; i++) {
    var outerDiv = document.createElement("div");
    outerDiv.className = "housesR1";

    var innerDiv1 = document.createElement("div");
    innerDiv1.className = "stripeContainer";
    addRandomStripe(innerDiv1);

    var innerDiv2 = document.createElement("div");
    innerDiv2.className = "stripeContainer";
    addRandomStripe(innerDiv2);

    outerDiv.appendChild(innerDiv1);
    outerDiv.appendChild(innerDiv2);

    container1.appendChild(outerDiv);
    }
}