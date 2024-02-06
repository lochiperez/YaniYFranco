const dias = document.getElementById('days')
const horas = document.getElementById('hours')
const minutos = document.getElementById('minutes')
const segundos = document.getElementById('seconds')


setInterval(() => {
    const diaInicio = new Date().getTime()
    const diaFinal = new Date('may 11, 2024 18:30:00').getTime()
    const distance = diaFinal - diaInicio
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours =  '0' + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
    const minutes = '0' + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = '0' + Math.floor((distance % (1000 * 60)) / (1000))

    dias.innerHTML = days;
    horas.innerHTML = hours.slice(-2);
    minutos.innerHTML = minutes.slice(-2);
    segundos.innerHTML = seconds.slice(-2);
    
}, 1000);

  
  var divDressCode = document.querySelector(".scroll-down");

  document.getElementById('openPopup').addEventListener('click', function(){
    document.getElementById('popup').style.display = 'block';
  });
  
  document.getElementById('closePopup').addEventListener('click', function(){
    document.getElementById('popup').style.display = 'none';
  });

  