let slider = document.getElementById('slider')
let sliderValue = document.getElementById('slidervalue')
let passbox = document.getElementById('passbox')
let lowercase = document.getElementById('lowercase')
let uppercase = document.getElementById('uppercase')
let number = document.getElementById('number')
let symbol = document.getElementById('symbols')
let btn = document.getElementById('genbtn')
let copy = document.getElementById('copyIcon')


slider.addEventListener('input',()=>{
    sliderValue.textContent = slider.value // showing slider value
})

btn.addEventListener('click',()=>{
    passbox.value = generatePassword();
})


let upperChar ="ABCDEFGHIZKLMNOPQRSTUVWXYZ";
let lowerChar = 'abcdefghizklmnopqrstuvwxyz';
let numbers = '0123456789';
let symbols = '!@#$%^&*-_';
//to generate Password

function generatePassword(){
    let str ='';
    let allchar='';

    allchar += lowercase.checked ? lowerChar : '';
    allchar += uppercase.checked ? upperChar : '';
    allchar += number.checked ? numbers : '';
    allchar += symbol.cheked ? symbols : '';
    
    for(let i =1; i<=slider.value;i++){
        str += allchar.charAt(Math.floor(Math.random()*allchar.length));
    }

    return str;
}

copy.addEventListener('click',()=>{
    if(passbox.value !==''){
        navigator.clipboard.writeText(passbox.value);
        copy.innerHTML = 'check';
        copy.title = "Password copied";

        setTimeout(()=>{
            copy.innerHTML = 'content_copy';
            copy.title = "";
        },2000)
    }
    
})