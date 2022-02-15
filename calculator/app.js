document.getElementById('button').addEventListener('click',function(event){
const btnvalue=event.target.innerText;
const inputvalue = document.getElementById('maininput').value;
document.getElementById('maininput').value = inputvalue + btnvalue; 

if(btnvalue == 'C'){
    document.getElementById('maininput').value = '';
}
else if (btnvalue == '<'){
    document.getElementById('maininput').value = inputvalue.slice(0,inputvalue.length-1);

} 
else if(btnvalue == '='){
    document.getElementById('secondaryinput').value = inputvalue; 
    document.getElementById('maininput').value = eval(inputvalue);
}
else {
    document.getElementById('maininput').value = inputvalue + btnvalue;
}
})
