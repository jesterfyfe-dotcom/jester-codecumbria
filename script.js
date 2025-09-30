const hedgehogImg = document.getElementById("hedgehog-img");
const wormImg = document.getElementById("worm-img");
const wormEatingDisplay = document.getElementById("worm-eating");
const wormCatchingUpgrade = document.getElementById("worm-catching-upgrade");
const frenButton = document.getElementById("fren");
const splashGif = document.getElementById("splash-gif");

let hedgehogImgNum = 1;
let wormsEaten = 0;
let wormCatchingLevel = 0;
const wormCatchingUpgradePrice = [25,100,250,500]

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

function updateWormDisplay(){
    wormEatingDisplay.textContent = `Worms eaten: ${wormsEaten}`
}

function updateWormCatching(){
    wormCatchingUpgrade.textContent = `Worm Catching ${wormCatchingLevel+2} - [${wormCatchingUpgradePrice[wormCatchingLevel]} Worms]`
}

wormImg.addEventListener("click", function(){
    wormsEaten += (wormCatchingLevel+1);
    updateWormDisplay();
})

wormCatchingUpgrade.addEventListener("click", function(){
if(wormsEaten>=wormCatchingUpgradePrice[wormCatchingLevel]){
    wormsEaten -= wormCatchingUpgradePrice[wormCatchingLevel]
    wormCatchingLevel++;
    updateWormDisplay();
    updateWormCatching();
}
if(wormCatchingLevel === wormCatchingUpgradePrice.length){
    wormCatchingUpgrade.classList.add("hidden");
}
})

frenButton.