window.addEventListener("DOMContentLoaded", () =>{
  document.querySelector(".btn").click();
  document.querySelector(".btn-check").click();}
);

document.querySelector(".btn").addEventListener("click", () => {
  document.querySelector(".head-span").innerHTML = "Vanilla test clicked!";
  document.getElementById("box").style.width = "300px";
});

document.getElementById("btn-r").addEventListener("click", () => {
  document.querySelector(".head-span").innerHTML =
    "Click for Vanilla test";
  document.getElementById("box").style.width = "100px";
});

document.querySelector(".btn-check").addEventListener("click", () => {
  document.querySelector(".el-3").innerHTML = Date();
});
