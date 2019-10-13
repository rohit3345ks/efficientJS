const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    response = this.responseText;
  }
};
xhttp.open("GET", "https://api.meetup.com/2/cities", true);
xhttp.send();
document
  .querySelector(".btn.button #idSelector .realbutton")
  .addEventListener("click", function() {
    console.log("hey there");
  });
document.querySelector("#demo").innerText;
document.querySelector("#demo").innerHTML;
document.querySelector("#demo").value;
document.querySelector("#demo").innerHTML("Hey <em>There</em>");
document.querySelector("#link").getAttribute("href");

document.querySelector("#link").setAttribute("href", "https://htmlg.com");

document.querySelector(".demo").innerHTML += "<em>Hey there!</em>";
