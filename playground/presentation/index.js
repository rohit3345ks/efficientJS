// myFunction = function() {
//   document.getElementById("checkbox").checked
//     ? console.log("checked")
//     : console.log("boo");
// };

var jQWeb = (1500000000) * 0.74;
var jQCarbon = (0.74 * 830000000) * 0.18;
var jQCarbon_1 =(jQCarbon / 1000000) + ' Million Tones';
var saving = (830000000 - jQCarbon) / 1000000 + ' Million Tones';

function myFunction() {
    if (document.getElementById("checkbox").checked) {
        document.getElementById("op-hdr").innerHTML = "Emission on data-transfer with jQuery";
        document.getElementById("ct-1").innerHTML = jQCarbon_1;
        document.getElementById("card-footer").innerHTML = ""

    } else {
        document.getElementById("op-hdr").innerHTML = "Without jQuery, it's equivalent to seedling grown of"
        document.getElementById("ct-1").innerHTML = "1.8 Million Trees";
        document.getElementById("card-footer").innerHTML = "for 10 years"

    }
}