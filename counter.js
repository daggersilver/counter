var count = document.getElementById("count");

document.getElementById("plus").addEventListener("click", ()=>{
    count.innerHTML = parseInt(count.innerHTML) + 1;
})
document.getElementById("minus").addEventListener("click", ()=>{
    count.innerHTML = parseInt(count.innerHTML) - 1;
})
document.getElementById("zero").addEventListener("click", ()=>{
    count.innerHTML = 0;
})