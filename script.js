
const display = document.querySelector('.first-display');
let num = "";

const btnDot = document.querySelector('.dot');
btnDot.addEventListener('click', () => {
    let arr = num.split(/[-+/*]/); 
    if(arr[arr.length-1].indexOf(".")===-1&&num[num.length-1]!=="+"&&num[num.length-1]!=="-"&&num[num.length-1]!=="*"&&num[num.length-1]!=="/"&&num[num.length-1]){
        num += "."
        display.textContent = num;
    }
    
});



const btnC = document.querySelector('.bigC');
btnC.addEventListener('click', () => {
    num = "";
    display.textContent = null;
    dotIsClicked =false;
});




const btnZero = document.querySelector('.zero');
btnZero.addEventListener('click', () => {
    if(num.length<=20) {
    num += "0";
    display.textContent = num;
    }
});


const btnOne = document.querySelector('.one');
btnOne.addEventListener('click', () => {
    if(num.length<=20) {
    num += "1";
    display.textContent = num;
    }    

});


const btnTwo = document.querySelector('.two');
btnTwo.addEventListener('click', () => {
    if(num.length<=20) {
    num += "2";
    display.textContent = num;
    }    
});

const btnThree = document.querySelector('.three');
btnThree.addEventListener('click', () => {
    if(num.length<=20) {
    num += "3";
    display.textContent = num;
    }    

});

const btnFour = document.querySelector('.four');
btnFour.addEventListener('click', () => {
    if(num.length<20) {
    num += "4";
    display.textContent = num;
    }    

});

const btnFive = document.querySelector('.five');
btnFive.addEventListener('click', () => {
    if(num.length<=20) {
    num += "5";
    display.textContent = num;
    }    

});

const btnSix = document.querySelector('.six');
btnSix.addEventListener('click', () => {
    if(num.length<=10) {
    num += "6";
    display.textContent = num;
    }    

});

const btnSeven = document.querySelector('.seven');
btnSeven.addEventListener('click', () => {
    if(num.length<=20) {
    num += "7";
    display.textContent = num;
    }    

});


const btnEight = document.querySelector('.eight');
btnEight.addEventListener('click', () => {
    if(num.length<=20) {
    num += "8";
    display.textContent = num;
    }    

});

const btnNine = document.querySelector('.nine');
btnNine.addEventListener('click', () => {
    if(num.length<=20) {
    num += "9";
    display.textContent = num;
    }    

});

const btnAdd = document.querySelector('.add');
btnAdd.addEventListener('click', () => {
    if(num[num.length-1]!=="+"&&num[num.length-1]!=="-"&&num[num.length-1]!=="*"&&num[num.length-1]!=="/"&&num[num.length-1]!==".") {
    num += "+";
    display.textContent = num;
    }

});

const btnSubtract = document.querySelector('.subtract');
btnSubtract.addEventListener('click', () => {
    if(num[num.length-1]!=="+"&&num[num.length-1]!=="-"&&num[num.length-1]!=="*"&&num[num.length-1]!=="/"&&num[num.length-1]!==".") {
    num += "-";
    display.textContent = num;
    }

});

const btnMultiply = document.querySelector('.multiply');
btnMultiply.addEventListener('click', () => {
    if(num[num.length-1]!=="+"&&num[num.length-1]!=="-"&&num[num.length-1]!=="*"&&num[num.length-1]!=="/"&&num[num.length-1]!==".") {
    num += "*";
    display.textContent = num;
    }

});


const btnDivide = document.querySelector('.divide');
btnDivide.addEventListener('click', () => {
    if(num[num.length-1]!=="+"&&num[num.length-1]!=="-"&&num[num.length-1]!=="*"&&num[num.length-1]!=="/"&&num[num.length-1]!==".") {
    num += "/";
    display.textContent = num;
    }

});


const btnEqual = document.querySelector('.equal');
btnEqual.addEventListener('click', () => {
    if(num[num.length-1]!=="+"&&num[num.length-1]!=="-"&&num[num.length-1]!=="*"&&num[num.length-1]!=="/"&&num[num.length-1]!==".") {
        let arr = num.split(/[-+/*]/);
        let sum = 0; 
        if(arr[0].indexOf(".")>0) {
            sum = parseFloat(arr[0]);
        } else {
            sum = parseInt(arr[0]);
        }
        let k = 0;
        for(let i=1; i<arr.length; i++) {
            let numberToadd = 0;
            if(arr[i].indexOf(".")>0) {
                numberToadd = parseFloat(arr[i]);
            } else {
                numberToadd = parseInt(arr[i]);
            }
            for(let j=k; j<num.length; j++) {
                if(num[j]==="+") {
                    sum += numberToadd;
                    k = j+1;
                    j = num.length;
                }
                if(num[j]==="-") {
                    sum -= numberToadd;
                    k = j+1;
                    j = num.length;
                }
                if(num[j]==="*") {
                    sum *= numberToadd;
                    k = j+1;
                    j = num.length;
                }
                if(num[j]==="/") {
                    sum /= numberToadd;
                    k = j+1;
                    j = num.length;
                }
            }
        }
        display.textContent = sum;
        num= "";
    }

});











