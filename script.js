const btn=document.querySelector('button');
const body=document.querySelector('body');
const color=['pink', 'orange','blue','red','violet','brown,black'];
document.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorIndex];
});