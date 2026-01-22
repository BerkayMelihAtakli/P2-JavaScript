let blok = document.getElementById('blok');
blok.addEventListener("mouseover", kleurveranderen);
blok.addEventListener("mouseout", defaultkleur);


function kleurveranderen()  {
    blok.style.backgroundColor = 'red';
    blok.textContent = 'Nice hover!';
    blok.style.color = 'white';
    blok.style.transform = 'scale(1,2)';

}
function defaultkleur() {

    blok.style.backgroundColor = 'black';
    blok.textContent = 'sod1a';
    blok.style.color = 'white';
    blok.style.transform = 'scale(1)';
}