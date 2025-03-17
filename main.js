const square = document.querySelectorAll(".block");
let img;
const imgX = new Image();
const imgO = new Image();
imgX.src = './img/x.svg'; 
imgO.src = './img/o.svg';
imgO.classList.add('imageFormat');
imgX.classList.add('imageFormat');
img = imgX;


function imageClick(item){
    item.removeChild(img);
    let imgPlay = new Image();
    imgPlay.src = img.src;
    imgPlay.classList.add('imageFormat');

    if (img == imgX)  {img = imgO;} 
    else img = imgX;

    return imgPlay;
}

square.forEach((item) =>{
    
    item.addEventListener("mouseover", ()=>{
        if(item.classList.contains("1") == false){
        img.classList.add('opacity');
        item.appendChild(img);}
    })

    item.addEventListener("click", ()=>{
        
        item.classList.add('1');
        item.appendChild(imageClick(item));
    })
})