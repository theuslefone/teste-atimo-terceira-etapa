

let count = 0;


function nextItemCarrousel(){
    if(count >= 0 && count < 7){
        count++;
    }
    changeItemCarrousel();
}

function previousItemCarrousel(){
    if(count != 0){
        count--;
    }
    changeItemCarrousel();
}

function changeItemCarrousel(){
    let photoElement = document.getElementById('photo_carousel');
    console.log(`carousel_${count}.png`);
    photoElement.setAttribute('src', `/img/carousel_${count}.png`);
}