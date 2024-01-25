
alert("U r Gonna use MY CALCULATOR !!!");

let string =""; 
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == 'C'){
            let len = string.length;
            len-=1;
            string=string.substring(0,len);
        }
        else if(e.target.innerHTML == 'AC'){
            string='';   
        }
        else if(e.target.innerHTML == '='){
            string=eval(string).toString();
        }
        else{
            string = string + e.target.innerHTML;
        }
        document.querySelector('input').value=string;
    })
    
})