const headgehogLeaf = document.getElementById("hedgehog1")
const headgehogStare = document.getElementById("hedgehog2")
const headgehogYay = document.getElementById("hedgehog3")
const headgehogFlowers = document.getElementById("hedgehog4")
const headgehogFrens = document.getElementById("hedgehog5")

function changeHedgehogs(num){
headgehogLeaf.classList.add("hidden")
headgehogStare.classList.add("hidden")
headgehogYay.classList.add("hidden")
headgehogFlowers.classList.add("hidden")
headgehogFrens.classList.add("hidden")

if(num === 1) headgehogLeaf.classList.remove("hidden");
if(num === 2) headgehogStare.classList.remove("hidden");
if(num === 3) headgehogYay.classList.remove("hidden");
if(num === 4) headgehogFlowers.classList.remove("hidden");
if(num === 5) headgehogFrens.classList.remove("hidden");
}

headgehogLeaf.addEventListener("click", changeHedgehogs(1));
headgehogStare.addEventListener("click", changeHedgehogs(2));
headgehogYay.addEventListener("click", changeHedgehogs(3));
headgehogFlowers.addEventListener("click", changeHedgehogs(4));
// headgehogFrens.addEventListener("click", changeHedgehogs(5));