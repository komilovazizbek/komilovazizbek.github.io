var elInputString = document.querySelector('.string-input');
var elInputShifr = document.querySelector('.shifr-input');
var elInputNumber = document.querySelector('.number-input');
var elInputNumberTwo = document.querySelector('.number-input-two');
var elBtn = document.querySelector('.btn');
var elBtnCode = document.querySelector('.btncode');
var elTextshifr = document.querySelector('.text-shifr');
var elBeforeText = document.querySelector('.before-text');
var massiv;
var alifbo = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
var name;
var index;
var number; 
alifbo.sort();
alert("Bu yerda lotin alifbosi keltirilgan \n" + alifbo);



elBtn.addEventListener('click', function(){

  name = elInputString.value;
  massiv = name.split(''); 
  number = parseInt(elInputNumber.value, 10);


  if((number > 0))
  {
   for (i = 0; i < alifbo.length; i++) {
    for (j = 0; j < massiv.length; j++){

     if(massiv[j] === alifbo[i])
     {
      if(alifbo.length - 1 <= number + i)
      {

        massiv[j] = alifbo.slice(((number + i-1) - alifbo.length + 1),((number + i-1) - alifbo.length +1)+1);
      }
      else{
       massiv[j] = alifbo.slice((number + i),(number + i+1));
     }
   }
 }   
}
name = massiv.toString();
for (i=0; i<massiv.length;i++)
{
elTextshifr.innerHTML = (name.replace(/,/gi,""));
}

}else{
  alert('oka sonni kiriting')
}      
});


elBtnCode.addEventListener('click', function(){
  name = elInputShifr.value;
  massiv = name.split(''); 
  numberTwo = parseInt(elInputNumber.value, 10);
  if(numberTwo > 0)
  {

   for (i = 0; i < alifbo.length; i++) {
    for (j = 0; j < massiv.length; j++){

     if(massiv[j] === alifbo[i])
     {
      if((i - numberTwo) >= 0)
      {

        massiv[j] = alifbo.slice((i - numberTwo), (i - numberTwo + 1));
      }
      else{
       massiv[j] = alifbo.slice((alifbo.length - (numberTwo - i)),(alifbo.length - (numberTwo - i)+1));
     }
   }
 }   
}

name = massiv.toString();
for (i=0; i < massiv.length; i++)
{
elBeforeText.innerHTML = (name.replace(/,/gi,""));
}
}
else{
  alert('oka sonni kiritng')
}      
});