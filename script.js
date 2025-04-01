const boton=document.getElementById('boton');
boton.addEventListener('mouseover', ()=>{
    boton.style.backgroundcolor='#3e8e41';
});
boton.addEventListener('mouseout'), ()=>{
    boton.style.backgroundcolor='#4CAF50';
};
boton.addEventListener('click', () => { 
    boton.style.transform='scale(0.9)';
    setTimeout(()=>{
        boton.style.transform='scale(1)';
    }, 200);
});