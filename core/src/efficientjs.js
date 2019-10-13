"use strict";
var transpiled;
var inputCode;

var DOM = function(selector) {
  this.selector = selector || null;
  this.element = null;
};

// Defining $ for calling the fuction
var $ = function(selector) {
  var elem = new DOM(selector);
  elem.init();
  return elem;
};

var XHR = function(object) {
  this.object = object;
};

DOM.prototype.init = function() {
  if (this.selector == "document") {
    transpiled = `document`;
  } else {
    transpiled
      ? (transpiled = transpiled.concat(
          `document.querySelector("${this.selector}")`
        ))
      : (transpiled = `document.querySelector("${this.selector}")`);
  }
  return transpiled;
};

// Event Listeners:

DOM.prototype.ready = function(func) {
  transpiled
    ? (transpiled = transpiled.concat(
        `
        .addEventListener("DOMContentLoaded"), ${func})`
      ))
    : (transpiled = `
    .addEventListener("DOMContentLoaded"), ${func})`);
  return transpiled;
};

DOM.prototype.click = function(arg) {
  transpiled
    ? (transpiled = transpiled.concat(`
    .addEventListener("click", ${arg})
    `))
    : (transpiled = `
    .addEventListener("click", ${arg})
    `);
  return transpiled;
};

//  DOM manipulations:
DOM.prototype.text = function() {
  transpiled
    ? (transpiled = transpiled.concat(
        `
        .innerText
        `
      ))
    : (transpiled = `
    .innerText
    `);
  return transpiled;
};
// DOM.prototype.html = function(input) {

// //   return transpiled;
// };
DOM.prototype.val = function() {
  transpiled
    ? (transpiled = transpiled.concat(
        `
        .value
        `
      ))
    : (transpiled = `
    .value
    `);
  return transpiled;
};

DOM.prototype.html = function(input) {
  if (input == undefined) {
    transpiled
      ? (transpiled = transpiled.concat(
          `
                  .innerHTML
                  `
        ))
      : (transpiled = `
              .innerHTML
              `);
  } else {
    transpiled
      ? (transpiled = transpiled.concat(
          `
        .innerHTML("${input}")
        `
        ))
      : (transpiled = `
    .innerHTML("${input}")
    `);
  }
  return transpiled;
};

DOM.prototype.attr = function(attributeName, attributeValue) {
  if (attributeValue == undefined) {
    transpiled
      ? (transpiled = transpiled.concat(
          `
              .getAttribute("${attributeName}")
              
               `
        ))
      : (transpiled = `
          .getAttribute("${attributeName} ")
          
                  `);
  } else {
    transpiled
      ? (transpiled = transpiled.concat(
          `
          .setAttribute("${attributeName}", "${attributeValue}")
            
             `
        ))
      : (transpiled = `

    .setAttribute("${attributeName}", "${attributeValue}")
        
                `);
  }

  return transpiled;
};

DOM.prototype.append = function(data) {
  transpiled
    ? (transpiled = transpiled.concat(
        `
                .innerHTML += "${data}"
                `
      ))
    : (transpiled = `
            .innerHTML += "${data}"
            `);
};
// Attributes

// Animations
DOM.prototype.animate = function(prop) {};

$.ajax = function({ type, url, success }) {
  transpiled = `
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      response = this.responseText;
    }
  };
  xhttp.open("${type}", "${url}", true);
  xhttp.send();
  `;
  return transpiled;
};

$.ajax({
  type: "GET",
  url: "https://api.meetup.com/2/cities"
});

$(".btn.button #idSelector .realbutton").click(function() {
  console.log("hey there");
});

// innerText
$("#demo").text();

// innerHtml
$("#demo").html();

// Input value
$("#demo").val();

// innerHTML
$("#demo").html("Hey <em>There</em>");

// getAttribute
$("#link").attr("href");

// Setting attribute
$("#link").attr("href", "https://htmlg.com");

// Append
$(".demo").append("<em>Hey there!</em>");
console.log(transpiled);
