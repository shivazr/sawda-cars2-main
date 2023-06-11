const timeLine = document.querySelectorAll(".timeLine");
const isSecondBoxHidden = sessionStorage.getItem("secondBoxHidden");
for (let i = 1; i < timeLine.length; i++) {

  timeLine[i].style.display = "none";
}

const submitButton = document.querySelector("#step1 .btn1");
const inputField = document.querySelector('.btn2');
const u_times = document.querySelector('.u-times');
const u_check = document.querySelector('.u-check');

inputField.addEventListener("keyup", function (e) {
  const value = e.currentTarget.value;
  
  if (value === "") {
    submitButton.disabled = true;
    inputField.style.border = '2px solid red';
    u_times.style.display = 'block';
    u_check.style.display = 'none';
    return false;
  }

  if (value.length < 6) {
    inputField.style.border = '2px solid red';
    u_times.style.display = 'block';
    u_check.style.display = 'none';
  } else {
    inputField.style.border = '2px solid #FED215';
    u_times.style.display = 'none';
    u_check.style.display = 'block';
    submitButton.disabled = false;
  }
});
//step1----------------------------------
const checkfani = document.querySelector("#check-fani");
const checkShasi = document.querySelector("#check-shasi");

const checkElements = [ checkShasi];
checkElements.forEach((element, index) => {
  let clickedBtn = false;

  submitButton.addEventListener("click", () => {
    handleClick(clickedBtn, timeLine[index + 1], element);
    clickedBtn = true;
  });
});

//  
function handleClick(clickedBtn, timeLine, checkAdd) {
  if (!clickedBtn) {
    clickedBtn = true;
    answeredQuestions++;
    updateProgress();
  }

  if (timeLine) {
    timeLine.style.display = "block";
  }

  if (checkAdd) {
    checkAdd.style.display = "block";
  }
}
//step2=====================================
const selectPower = document.getElementById("selectPower");
 let clickedBtn2 = false;
selectPower.addEventListener("change", () =>{
  handleClick(clickedBtn2, timeLine[2], checkfani);
  clickedBtn2= true;
})

const selects = Array.from(document.querySelectorAll(".select select"));
for (let i = 1; i < selects.length; i++) {
  selects[i].disabled = true;

}
selects.forEach(function (select, index) {
  select.addEventListener("change", function () {
    
    if (select.value !== "") {
      if (index < selects.length - 1) {
        selects[index + 1].disabled = false;
      }
    }
    for (let i = index + 2; i < selects.length; i++) {
      selects[i].disabled = true;
      selects[i].selectedIndex = 0;
    }
    select.classList.add("selected");
  });
});
//step3 گیر بکس-------------------------------------------------
const buttons = document.querySelectorAll('.gir-bax .btn-bax');
 const checkBox = document.querySelector("#check-box");
 var clickedBtn3 = false;
buttons.forEach(button => {
  button.addEventListener('click', () => {
   
    handleClick(clickedBtn3, timeLine[3], checkBox);
    clickedBtn3= true;
    const activeButton = document.querySelector('.gir-bax .btn-bax.active');
    if (activeButton) {
      activeButton.classList.remove('active');
    }
    button.classList.add('active');
  });
});

//step4- نوع سوخت-----------------------------------------
const buttonsbaxx = document.querySelectorAll('.gir-bax .btn-baxx');
const checkBaxsoqt = document.querySelector("#checked-soqt");
var clickedBtn4 = false;
buttonsbaxx.forEach(option => {
  option.addEventListener('click', () => {
    
  handleClick(clickedBtn4, timeLine[4], checkBaxsoqt);
  clickedBtn4= true;
    const activeButton2 = document.querySelector('.gir-bax .btn-baxx.active');
    if (activeButton2) {
      activeButton2.classList.remove('active');
    }
    option.classList.add('active');
    
  });
});

//step5-نوع بدنه خودرو-- -----------------------------------------------
const buttonsSoqt = document.querySelectorAll('.btn-bax-soqt ')
const checkCarr = document.querySelector("#check-carr");
var clickedBtn5 = false;
buttonsSoqt.forEach(option => {
  option.addEventListener('click', () => {
    
  handleClick(clickedBtn5, timeLine[5], checkCarr);
  clickedBtn5= true;
    const activeButton4 = document.querySelector('.gir-bax .btn-bax-soqt.active');
    if (activeButton4) {
      activeButton4.classList.remove('active');
    }
    option.classList.add('active');
   
  })
})
//step6 تعداد درب --------------------------------------
const buttonsDoor = document.querySelectorAll('.btn-bax-door');
const checkDoor = document.querySelector("#checkedDoor");
var clickedBtn6 = false;
buttonsDoor.forEach(option => {
  option.addEventListener('click', () => {
    
    handleClick(clickedBtn6, timeLine[6], checkDoor);
     clickedBtn6= true;
    const activeButton4 = document.querySelector('.gir-bax .btn-bax-door.active');
    if (activeButton4) {
      activeButton4.classList.remove('active');
    }
    option.classList.add('active');
  });
});

//step7--DRIVE TYPE 4X4---------------------------------------------
const buttonsDrive = document.querySelectorAll('.btn-bax-drive')
const checkedDrive = document.querySelector("#checkedDrive");
var clickedBtn7 = false;
buttonsDrive.forEach(option => {
  option.addEventListener('click', () => {
    handleClick(clickedBtn7, timeLine[7], checkedDrive );
     clickedBtn7= true;
    console.log(option);
    const activeButton5 = document.querySelector('.gir-bax .btn-bax-drive.active');
   
    if (activeButton5) {
      activeButton5.classList.remove('active');
    }
    option.classList.add('active')

  })
});
//step8 وضعیت کارکرده-----------------------------------------------
const workButton = document.querySelector('.btn6');
const inputFieldineer = document.querySelector('.inp-inner');

const checkedWorkk = document.querySelector("#checked-workk")
var clickedBtn8= false;
workButton.addEventListener('click', () => {
  handleClick(clickedBtn8, timeLine[8], checkedDrive );
  clickedBtn8= true;
});

const nextBtn8 = document.querySelector("#step8");
const buttonInner = document.querySelectorAll('.btn6');
const buttonsShow = document.querySelector('.btn-inner2');
var clickedBtn8= false;
buttonInner.forEach(option => {

  option.addEventListener('click', () => {
    
 handleClick(clickedBtn8, timeLine[8],checkedWorkk  );
  clickedBtn8= true;
    document.querySelector('.btn6.btn5').classList.remove('btn5');
    option.classList.add('btn5');

    if (option.textContent === 'کارکرده') {
      buttonsShow.classList.add("show");
    } else {
      buttonsShow.classList.remove("show");
    }
  });
});
const buttonIn6 = document.querySelectorAll('.btn-in-btn6');
buttonIn6.forEach(option => {
  option.addEventListener('click', () => {

    document.querySelector('.btn-in-btn6.active').classList.remove('active');
    option.classList.add('active');
    
  });
});
const p_times = document.querySelector('.fa.u-times-work');
const p_check = document.querySelector('.fa.u-check-work');

inputFieldineer.addEventListener('keyup', function (e) {

  const value = e.currentTarget.value;

  if (value === "") {
    buttonIn6.forEach(btn => {
      btn.disabled = true;
    });
    inputFieldineer.style.border = '1px solid red';
    p_times.style.display = 'block';
    p_check.style.display = 'none';
    return false;
  }

  if (inputFieldineer.value.length === 0 || inputFieldineer.value.length < 1) {
    buttonIn6.forEach(btn => {
      btn.disabled = true;
    });
    inputFieldineer.style.border = '1px solid red';
    p_times.style.display = 'block';
    p_check.style.display = 'none';
    return false;
  } else {
    buttonIn6.forEach(btn => {
      btn.disabled = false;
    });
    inputFieldineer.style.border = '1px solid green';
    p_times.style.display = 'none';
    p_check.style.display = 'block';

  }
});
//step9-//btn-in-body--//وضعیت بدنه----------------------------------------------------
const checkBody = document.querySelector("#check-body");
const buttonsBody = document.querySelectorAll('.btn-in-body')
const buttonsRang = document.querySelector('.rang ')
 var clickedBtn9= false;
buttonsBody.forEach(option => {
  option.addEventListener('click', () => {
   
handleClick(clickedBtn9, timeLine[9],checkBody );
  clickedBtn9= true;
    document.querySelector(' .btn-in-body.active').classList.remove('active')
    option.classList.add('active')

    if (option.textContent === "رنگ تعویض") {
      buttonsRang.classList.add("showrang")
    } else {
      buttonsRang.classList.remove("showrang")
    }
  })
})
const buttonIn3 = document.querySelectorAll('.btn-in3');
const contentRangs = document.querySelectorAll('.list-rang');

buttonIn3.forEach((option, index) => {
  option.addEventListener('click', () => {
    console.log(option);
    document.querySelector('.btn-in3.active').classList.remove('active');
    option.classList.add('active');

    contentRangs.forEach((content, contentIndex) => {
      if (contentIndex === index) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  });
});
///sep10-----------------------------------------------
 const nextBtn10 = document.querySelector("#step10 ");

 const checkColor = document.querySelector("#check-color");
var clickedBtn10= false;
nextBtn10.addEventListener("change", () => {
handleClick(clickedBtn10, timeLine[10],checkColor );
  clickedBtn10= true;
 });

//step11-----------------------------
const nextBtn11 = document.querySelector("#step11 ");
const checkInternal = document.querySelector("#check-Internal");
var clickedBtn11= false;
nextBtn11.addEventListener("change", () => {
  
handleClick(clickedBtn11, timeLine[11],checkInternal);
  clickedBtn11= true;
});
//step12-//btn-Internal--------------------------------
const checkInternalj = document.querySelector("#check-Internal-j");

const buttonsInternal = document.querySelectorAll('.btn-Internal')
var clickedBtn12= false;
buttonsInternal.forEach(option => {
  option.addEventListener('click', () => {
    
handleClick(clickedBtn12, timeLine[12],checkInternalj);
  clickedBtn12= true;
    const activeButton4 = document.querySelector('.gir-bax .btn-Internal.active');
    if (activeButton4) {
      activeButton4.classList.remove('active');
    }
    option.classList.add('active')


  })
})
//step13//btn-seats-------------------------------
const checkSeats= document.querySelector("#check-seats");
const buttonsSeats = document.querySelectorAll('.btn-seats')

 var clickedBtn13= false;
buttonsSeats.forEach(option => {
  option.addEventListener('click', () => {
   
handleClick(clickedBtn13, timeLine[13],checkSeats );
  clickedBtn13= true;
    console.log(option);
    const activeButton4 = document.querySelector('.gir-bax  .btn-seats.active');
    if (activeButton4) {
      activeButton4.classList.remove('active');
    }
    option.classList.add('active')

  })

})
//step14-//btn-option-----------------------
const checkOption= document.querySelector("#check-option");
const buttonsOption = document.querySelectorAll('.btn-option ')

var clickedBtn14= false;
buttonsOption.forEach(option => {
  option.addEventListener('click', () => {
    
handleClick(clickedBtn14, timeLine[14], checkOption);
  clickedBtn14= true;
    option.classList.add('active')
  })
})
//step15-------------------------------------
const nextBtn15 = document.querySelector("#step15 ");
const checkOrder= document.querySelector("#checkOrder");
  var clickedBtn15= false;
nextBtn15.addEventListener("change", () => {

handleClick(clickedBtn15, timeLine[15], checkOrder);
  clickedBtn15= true;
});
//step16-----------------------------------------------
const nextBtn16 = document.querySelector("#step16 ");
const checkDescription= document.querySelector("#checkDescription");
 var clickedBtn16= false;
nextBtn16.addEventListener("click", () => {
 
handleClick(clickedBtn16, timeLine[16], checkDescription );
  clickedBtn16= true;
});
//step17---------------------------------------
const nextBtn17 = document.querySelector("#step17 ");
const checkImg= document.querySelector("#checkImg");
  var clickedBtn17= false;
nextBtn17.addEventListener("click", () => {

handleClick(clickedBtn17, timeLine[17],checkImg);
  clickedBtn17= true;
});

//step18-----------------------------------------

const checkConversation= document.querySelector("#checkConversation");
//btn-in-coversation 
const buttonsCoversation = document.querySelectorAll('.btn-in-coversation ')
var clickedBtn18= false;
buttonsCoversation.forEach(option => {
  option.addEventListener('click', () => {
    
handleClick(clickedBtn18, timeLine[18], checkConversation);
  clickedBtn18= true;
    document.querySelector(' .btn-in-coversation.active').classList.remove('active')
    option.classList.add('active')
  })
})
////step19------------------------------------

const checkPrice= document.querySelector("#checkPrice");


//btn-in-price----------------------
const buttonsPrice = document.querySelectorAll('.btn-price')
const buttonsInPrice = document.querySelector('.btn-inner-price')

    var clickedBtn19= false;
buttonsPrice.forEach(option => {
  option.addEventListener('click', () => {
handleClick(clickedBtn19, timeLine[19], checkPrice);
  clickedBtn19= true;
    document.querySelector('.btn-price.active').classList.remove('active')
    option.classList.add('active')

    if (option.textContent === "توافقی") {
      buttonsInPrice.classList.add("showPrice")
    } else {
      buttonsInPrice.classList.remove("showPrice")
    }
  })
})
const buttonInPrice = document.querySelectorAll('.btn-in-price')

buttonInPrice.forEach(option => {
  option.addEventListener('click', () => {
    document.querySelector(' .btn-in-price.active').classList.remove('active')
    option.classList.add('active')

  })
})
const inpInnerPrice = document.querySelector(".btn-inner-price .inp-inner")
inpInnerPrice.addEventListener('keyup', function () {
  var p_times = document.querySelector('.fa.u-times-price')
  var p_check = document.querySelector('.fa.u-check-price')
  if (inpInnerPrice.value.length == 0 || inpInnerPrice.value.length < 6) {
    inpInnerPrice.style.border = '1px solid red'
    p_times.style.display = 'block'
    p_check.style.display = 'none'
    return false
  } else {
    inpInnerPrice.style.border = '1px solid green'
    p_times.style.display = 'none'
    p_check.style.display = 'block'
  }
})
//step20--------------------------------------------
const nextBtn20 = document.querySelector("#step20 ");
const checkVisit= document.querySelector("#checkVisit");
var clickedBtn20= false;
nextBtn20.addEventListener("change", () => {
  
  handleClick(clickedBtn20, timeLine[20],checkVisit );
    clickedBtn20= true;
});
//step21---------------------------------
function togglepopup(){
  document.getElementById("popup").classList.toggle("active")
}
const popup = document.getElementById("popup");
const step20 = document.getElementById("step20");

step20.addEventListener("click", function(){
  popup.style.display="flex";
})
///-------------------------
//--------------------------------------
let elements = document.getElementsByClassName("btn-bax");
for (let i = 0; i < elements.length; i++) {
  elements[i].onclick = function () {
    this.classList.add("bak");
  };
}

//scroll---------------------------------
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  // console.log(scrolled);
});

const left1 = document.getElementById("left1");
const OffsetY = left1.offsetTop;
function onScroll(e) {
  if (window.pageYOffset >= 360) {
    left1.classList.add("sticky");
  } else {
    left1.classList.remove("sticky");
  }
}
document.addEventListener('scroll', onScroll);

// const boxes = document.querySelectorAll(".box")
// const iconCheck = document.querySelectorAll(".icon-check")
// const Buttons = document.querySelectorAll("button")
var canvas = document.getElementById("progressCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height / 2;
var radius = 40;
var lineWidth = 25;
var totalQuestions = 20;
var answeredQuestions = 0;

function updateProgress() {
  if (answeredQuestions > totalQuestions) {
    return
  }
  var progress = answeredQuestions / totalQuestions;
  // console.log(progress)
  var startAngle = .8 * Math.PI;
  var endAngle = (progress * 1.4 * Math.PI) + startAngle;
  var counterClockwise = false;
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Background 
  ctx.beginPath();
  ctx.arc(x, y, radius, .8 * Math.PI, 2.2 * Math.PI);
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = "#D0D0D0";
  ctx.stroke();
  // Progress 
  ctx.beginPath();
  ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = "#FED215";
  ctx.stroke();
  // Progress text
  ctx.font = "bold 16px Arial";
  ctx.fillStyle = "#646565";
  ctx.textAlign = "right";
  ctx.fillText("%" + Math.floor(progress * 100), 115, 60);
}

answeredQuestions = 0;
updateProgress();
//--------------
const p1 = document.getElementById("p1");
const model3 = document.getElementById("model3");

// model3.addEventListener("change", function () {
//   p1.innerText = model3.value;
//   // p1.style.color = "#FED215"
// });

const pbmw = document.getElementById("p-bmw");
const model1 = document.getElementById("model1");

// model1.addEventListener("change", function () {
//   pbmw.innerText = model1.value;
//   // pbmw.style.color = "#FED215"
// });

const pmodel = document.getElementById("pmodel");
const model2 = document.getElementById("model2");

// model2.addEventListener("change", function () {
//   pmodel.innerText = model2.value;
//   // pmodel.style.color = "#FED215"
// });

const pBmwText = document.getElementById("p-bmw-text");
const model4 = document.getElementById("model4");

// model4.addEventListener("change", function () {
//   pBmwText.innerText = model4.value;
// });
function handleModel3Change() {
  p1.innerText = model3.value;
  // p1.style.color = "#FED215"
}

function handleModel1Change() {
  pbmw.innerText = model1.value;
  // pbmw.style.color = "#FED215"
}

function handleModel2Change() {
  pmodel.innerText = model2.value;
  // pmodel.style.color = "#FED215"
}

function handleModel4Change() {
  pBmwText.innerText = model4.value;
}

model3.addEventListener("change", handleModel3Change);
model1.addEventListener("change", handleModel1Change);
model2.addEventListener("change", handleModel2Change);
model4.addEventListener("change", handleModel4Change);

const p2 = document.getElementById("p2");
const buttonns = document.querySelectorAll(".btn-bax");

// buttonns.forEach(button => {
//   button.addEventListener("click", function () {
//     if (button.textContent === "Automatic") {
//       p2.innerText = "Automatic";
//     } else if (button.textContent === "Manual") {
//       p2.innerText = "Manual";
//     }
//   });
// });
const options = document.querySelectorAll(".btn-baxx");
const p3 = document.getElementById("p3");

// options.forEach(option => {
//   option.addEventListener("click", function () {
//     p3.innerText = option.textContent;
//   });
// });
function handleButtonClick() {
  const buttonText = this.textContent;
  if (buttonText === "Automatic") {
    p2.innerText = "Automatic";
  } else if (buttonText === "Manual") {
    p2.innerText = "Manual";
  }
}

function handleOptionClick() {
  p3.innerText = this.textContent;
}

buttonns.forEach(button => {
  button.addEventListener("click", handleButtonClick);
});

options.forEach(option => {
  option.addEventListener("click", handleOptionClick);
});

const inpWork = document.querySelector("#inpWork");
const p5 = document.getElementById("p5");
const btnOptions = document.querySelectorAll(".btn-in-btn6");

inpWork.addEventListener("keyup", function () {
  p5.innerText = inpWork.value;
   
});

// btnOptions.forEach(option => {
//   option.addEventListener("click", function () {
//     // p5.innerText = option.textContent;
//    inpWork.value = ""; 
//   });
// });

