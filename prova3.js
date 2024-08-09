document.addEventListener('DOMContentLoaded', () => {
    const cabelos = document.querySelectorAll('.cabelo');
    const contadorElemento = document.getElementById('contador');
    const dente = document.querySelector('.dente');
    let contador = 0;

    
    const url = 'https://www.youtube.com/watch?v=JR4V2KUVHxI'; 

    cabelos.forEach(cabelo => {
        cabelo.addEventListener('click', (event) => {
            console.log('Cabelo clicado:', event.target); 
            contador++;
            contadorElemento.textContent = contador;
            event.target.remove(); 
            
            
            if (document.querySelectorAll('.cabelo').length === 0) {
                console.log('Todos os cabelos removidos. Mostrando o dente.');
                dente.style.display = 'block'; 
            }
        });
    });

    
    dente.addEventListener('click', () => {
        console.log('Dente clicado');
        console.log('Redirecionando para:', url);
        window.open(url, '_blank'); 
    });
});