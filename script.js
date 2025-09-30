const hedgehogImg = document.getElementById("hedgehog-img")
let hedgehogImgNum = 1;

hedgehogImg.addEventListener("click", function(){
if(hedgehogImgNum===1){
    hedgehogImg.src = "hedgehog_images/hedgehog_stare.jpg"
} else if (hedgehogImgNum===2){
    hedgehogImg.src = "hedgehog_images/hedgehog_yay.jpg"
} else if(hedgehogImgNum===3){
    hedgehogImg.src = "hedgehog_images/hedgehog_flowers.jpg"
} else if (hedgehogImgNum===4){
    hedgehogImg.src = "hedgehog_images/hedgehog_frens.jpg"
} else{
    hedgehogImg.src = "hedgehog_images/hedgehog_leaf.jpg"
    hedgehogImgNum = 0
}
hedgehogImgNum ++;
});