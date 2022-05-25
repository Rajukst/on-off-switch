let type= 'Bulb Off'
function callbulb(){
  if(type== 'Bulb On'){
      type= 'Bulb Off'
  }
  else{
      type='Bulb On'
  }
  console.log(type)
  document.getElementById('image').src='Image/'+type+'.jpg';
  document.getElementById('onOffButton').value= type;
}