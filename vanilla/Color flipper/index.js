const colors=["green","red","#f15025","blue"];
const button=document.getElementById("btn");
const color=document.querySelector(".color");
button.addEventListener("click",function(){
  //console.log(document.body);
  //we have array ... therefore need random number btw 0 to 3
  const randomNumber=getRandom();
  document.body.style.backgroundColor=colors[randomNumber];
  color.textContent=colors[randomNumber];
});
function getRandom(){
  return Math.floor(Math.random()*colors.length);
}
