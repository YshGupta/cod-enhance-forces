let cnt = 0;
chrome.storage.local.get({ CNT: 0 }, function(data) {
  cnt = data.CNT || 0;
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "DarkMode") {
    console.log("DarkMODE");
    chrome.storage.local.get('darkModeEnabled', function(data) {
       var toggle = data.darkModeEnabled || false;
      if(toggle){
        cnt = 0;
        chrome.storage.local.set({ CNT: cnt });
        design();
        // Reload the current page
        // location.reload();
      } 
      else{
        if( cnt != 1){
          cnt = 1;
          chrome.storage.local.set({ CNT: cnt });
          reset();
          window.location.reload();
        }
        // location.reload();
      }
      
    }); 
  }
});


let origconvcolor ={} ;
let paraorig = {} ;
let origtext1 = {} ;
let origtext2 = {} ;
let origlink = {} ;
let origilt = {} ;


function design() {
  convertColors();  
  constcolor();
  changeparacolor();
  changeTextColor();
  linkcolor();
  changetablehead()  ;
  changeinput();
  testcases();
  submissions();
  ratingchanges();
  searchbox();
  tagbox();
}
function reset() {
  reset_convcol();
  reset_para();
  reset_text_1();
  reset_text_2();
  reset_linkk();
  reset_tables();
  reset_input();
  reset_const();
  reset_testcases();
  reset_submissions();
  reset_rating_changes();
  reset_search_box();
  reset_tag_box();
  setTimeout(() => {
      window.location.reload();
      console.log("reload");
  }, 1000);
  
  // var body = document.body;

  // // Reset the background color of the body
  // body.style.backgroundColor = originalStyles.bodyBackgroundColor;

  // // Reset the color of each <p> element
  // var paragraphs = document.querySelectorAll('p');
  // for (var i = 0; i < paragraphs.length; i++) {
  //   paragraphs[i].style.color = originalStyles.paragraphColor[i];
  // }
}

function reset_convcol(){
  var elements = document.querySelectorAll('*');

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.style.backgroundColor = origconvcolor[i];
  }
}
function reset_para(){
  var paras = document.querySelectorAll("p, ul, span , div");
  for (var i = 0; i < paras.length; i++) {
      // paras[i].style.color = paraorig[i] ; 
      console.log("hey");
      var colr = paraorig[i];
      paras[i].style.color = toString(paraorig[i]);
  }
}
function reset_text_1(){
  let e5 = document.getElementsByClassName("dark");

  for(let i = 0; i < e5.length; i++) 
  {
      e5[i].style.backgroundColor = origtext1[i];
  }
}
function reset_text_2(){
  var elements = document.querySelectorAll('*');
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.style.color = origtext2[i];
  }
}
function reset_linkk(){
  var links = document.getElementsByTagName('a');
  // Iterate through each anchor tag
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.style.color = origlink[i] ;
  }
}
function reset_tables(){
  // #e1e1e1
  let table = document.getElementsByClassName("datatable")
  for(var i= 0 ; i < table.length ; i++){
    table[i].style.backgroundColor = "#e1e1e1";
    table[i].style.borderColor = "rgb(183 185 185)";  
    var tablei = table[i].querySelectorAll('div:nth-child(5)');
    tablei[0].style.color = "black";
  }
  // ffe3e3
  var rp = document.querySelectorAll(".rejected-problem .act");
  var ap = document.querySelectorAll(".accepted-problem .act");

  rp.forEach((rpp)=>{
    rpp.style.setProperty('background-color' , '#ffe3e3' , 'important');
  })

  ap.forEach((rpp)=>{
    rpp.style.setProperty('background-color' , '#d4edc9' , 'important');
  })
  var ilt = document.querySelectorAll('.lt , .ilt , .rt , .irt');
  if(ilt != null){
    for(var j = 0 ; j < ilt.length; j++){
      ilt[j].style.background = origilt[j];
    }
  }
  var tdElementr = document.querySelectorAll('tr.rejected-problem td.id.left');
  var tdElementg = document.querySelectorAll('tr.accepted-problem td.id.left');

  tdElementr.forEach((cell)=>{
    cell.style.setProperty('border-left-color' , '#ffe3e3' , 'important')
  })
  tdElementg.forEach((cell)=>{
    cell.style.setProperty('border-left-color' , '#d4edc9' , 'important')
  })

}
function reset_input(){
  let I = document.getElementsByTagName("input");
  for(var j = 0; j < I.length ; j++)
  {
    I[j].style.color = "black";
    I[j].style.backgroundColor = "buttonface";
  }
  var fileInput = document.querySelector('input[type="file"]');
  console.log(fileInput);
  if(fileInput != null){
    fileInput.style.color = "black";
  }
}
function reset_const(){
  setTimeout(function() {
    console.log("Delayed action executed after 2 seconds");
    let elemens = document.querySelectorAll('.mo , .mi , .mn');
    // console.log(elemens);
    for(var i = 0 ; i < elemens.length ; i++){
      elemens[i].style.color = "black";
    }
  }, 2000);
}
function reset_testcases(){
  let pres = document.getElementsByTagName("pre");
  for(var i= 0 ; i < pres.length ; i++){
    var pre = pres[i];
    var prechilds = pre.children;
    for(var j = 0; j < prechilds.length ; j++){
      prechilds[j].style.color = "#800"
    }
  }
}
function reset_submissions(){
  // #def
  var cells = document.querySelectorAll('.status-frame-datatable td');
  cells.forEach(function(cell) {
      cell.style.setProperty('background-color', '#def', 'important');
  });

  var acells = document.querySelectorAll(".verdict-accepted");
  acells.forEach((cell)=>{
    cell.style.setProperty('color', '#0a0', 'important');
  })

  var rcells = document.querySelectorAll('.verdict-rejected,  .verdict-format-judged');
  rcells.forEach((cell)=>{
    // console.log("here");
    cell.style.setProperty('color' , '#00a'  , 'important');
  })
}
function reset_rating_changes(){
  // 00ff00
  let table = document.getElementsByClassName("datatable");
  let rc = table[0].querySelectorAll('td span');
  rc.forEach((cell)=>{
    var ratingChange = cell.textContent.trim();
      if(ratingChange.startsWith("+")){
        cell.style.setProperty('color' , 'green' , 'important' );
      }else if(ratingChange.startsWith("-")){
        cell.style.setProperty('color' , 'gray' , 'important' );
      }
  })
}
function reset_search_box(){
  var ss = document.getElementsByClassName("search");
  for(var j = 0 ; j < ss.length ; j++){
    var s = ss[j];
    s.style.backgroundColor = "white";
  }
}
function reset_tag_box(){
  var tags = document.querySelectorAll(".tag-box");
  tags.forEach((tag)=>{
    tag.style.color = "black";
  })
}
// let prevcol = {};


function convertColors() {
  var elements = document.querySelectorAll('*');

  for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var computedStyle = window.getComputedStyle(element);

    var color = computedStyle.color;
    var backgroundColor = computedStyle.backgroundColor;

    // Convert white background color components to #1D1D1C
    origconvcolor[i] = backgroundColor;
    if (isWhiteColor(backgroundColor)) {
      var convertedBackgroundColor = convertToDarkColor(backgroundColor);
      element.style.backgroundColor = convertedBackgroundColor;
    }

    // Convert black background color components to white
    if (isBlackColor(backgroundColor)) {
      element.style.backgroundColor = '#a2a0ad';
    }
    // Convert white color components to #1D1D1C
    // if (isWhiteColor(color)) {
    //   var convertedColor = convertToDarkColor(color);
    //   element.style.color = convertedColor;
    // }

    // // Convert black color components to white
    // if (isBlackColor(color)) {
    //   // element.style.color = 'white';
    //   element.style.setProperty('color', '#a2a0ad', 'important');
    // }
  }
}
function changeparacolor(){
  // var paragraphs = document.getElementsByTagName("p");
  var paras = document.querySelectorAll("p, ul, span , div");
  var clr = getContrastingColor("rgb(107,110,87)");
  
  for (var i = 0; i < paras.length; i++) {
      var computed_style = getComputedStyle(paras[i]);
      paraorig[i] = computed_style.color;
      // console.log(paraorig[i] == null);
      paras[i].style.color = "#a2a0ad" ; 
  }
  
}
function changeTextColor() {
  let e5 = document.getElementsByClassName("dark");

for(let i = 0; i < e5.length; i++) {
    // e5[i].style.color = "black";
    origtext1[i] = e5[i].style.backgroundColor;
    e5[i].style.backgroundColor = "rgb(29, 29, 28)"; // replace "yourColor" with the color you want
}
  var elements = document.querySelectorAll('*');
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var computedStyle = window.getComputedStyle(element);
    var color = computedStyle.color;

    origtext2[i] = element.style.color;
    if (isBlackColor(color)) {
      element.style.color = '#a2a0ad';
    }
  }
}
function linkcolor(){
      // Select the anchor tag(s)
    var links = document.getElementsByTagName('a');

    // Iterate through each anchor tag
    for (var i = 0; i < links.length; i++) {
      var link = links[i];

    // Get the computed style of the anchor tag
    var computedStyle = getComputedStyle(link);

    // Get the color in RGB format
    var c = computedStyle.getPropertyValue('color');
      let clr = getContrastingColor(c );
      
      origlink[i] = link.style.color;
      link.style.color = clr ;
    }
}
function changetablehead(){
  let table = document.getElementsByClassName("datatable");
  for(var i= 0 ; i < table.length ; i++){
    table[i].style.backgroundColor ="#a2a0ad";
    table[i].style.borderColor = "#a2a0ad";  
    var tablei = table[i].querySelectorAll('div:nth-child(5)');
    tablei[0].style.color = "black";
  }

  var rp = document.querySelectorAll(".rejected-problem .act");
  var ap = document.querySelectorAll(".accepted-problem .act");

  rp.forEach((rpp)=>{
    rpp.style.setProperty('background-color' , '#AD0900FF' , 'important');
  })

  ap.forEach((rpp)=>{
    rpp.style.setProperty('background-color' , '#175C0DFF' , 'important');
  })

  var ilt = document.querySelectorAll('.lt , .ilt , .rt , .irt');
  if(ilt != null){
    for(var j = 0 ; j < ilt.length; j++){
      origilt[j] = ilt[j].style.background;
      ilt[j].style.background = "none";
    }
  }

  var tdElementr = document.querySelectorAll('tr.rejected-problem td.id.left');
  var tdElementg = document.querySelectorAll('tr.accepted-problem td.id.left');

  tdElementr.forEach((cell)=>{
    cell.style.setProperty('border-left-color' , '#AD0900FF' , 'important')
  })
  tdElementg.forEach((cell)=>{
    cell.style.setProperty('border-left-color' , '#175C0DFF' , 'important')
  })
}
function changeinput(){
  let I = document.getElementsByTagName("input");
    for(var j = 0; j < I.length ; j++)
    {
      I[j].style.color = "black";
      I[j].style.backgroundColor = "rgb(162, 160, 173)";
    }
  var fileInput = document.querySelector('input[type="file"]');
  console.log(fileInput);
  if(fileInput != null){
    fileInput.style.color = "#a2a0ad";
  }
}
function constcolor(){

  setTimeout(function() {
    console.log("Delayed action executed after 2 seconds");
    let elemens = document.querySelectorAll('.mo , .mi , .mn');
    // console.log(elemens);
    for(var i = 0 ; i < elemens.length ; i++){
      elemens[i].style.color = "#00ff00";
    }
  }, 2000);
}
function testcases(){
  let pres = document.getElementsByTagName("pre");
  for(var i= 0 ; i < pres.length ; i++){
    var pre = pres[i];
    var prechilds = pre.children;
    for(var j = 0; j < prechilds.length ; j++){
      if( j == 0){
        prechilds[j].style.color= "black";
        prechilds[j].style.fontWeight= "bold";
      } 
      else prechilds[j].style.color = "#800"
    }
  }
}
function submissions(){
  var cells = document.querySelectorAll('.status-frame-datatable td');

  // Loop through each cell
  cells.forEach(function(cell) {
      // Change the background color
      cell.style.setProperty('background-color', '#1D1D1C', 'important');
  });
  
  var acells = document.querySelectorAll(".verdict-accepted");
  acells.forEach((cell)=>{
    cell.style.setProperty('color', '#00ff00', 'important');
  })

  var rcells = document.querySelectorAll('.verdict-rejected,  .verdict-format-judged');
  rcells.forEach((cell)=>{
    // console.log("here");
    cell.style.setProperty('color' , '#FF4782'  , 'important');
  })
}
function ratingchanges(){
  let table = document.getElementsByClassName("datatable");
  let rc = table[0].querySelectorAll('td span');
  rc.forEach((cell)=>{
    var ratingChange = cell.textContent.trim();
      if(ratingChange.startsWith("+")){
        cell.style.setProperty('color' , '#00ff00' , 'important' );
      }else if(ratingChange.startsWith("-")){
        cell.style.setProperty('color' , '#FF4782' , 'important' );
      }
    
  })
}
function searchbox(){
  var ss = document.getElementsByClassName("search");
  for(var j = 0 ; j < ss.length ; j++){
    var s = ss[j];
    s.style.backgroundColor = "rgb(162, 160, 173)";
  }

}
function tagbox(){
var tags = document.querySelectorAll(".tag-box");
tags.forEach((tag)=>{
  tag.style.color = "black";
})
}

function getProblemIndex(problemId) {
  const problemIdChar = problemId.charCodeAt(0);
  const baseCharCode = 'A'.charCodeAt(0);
  return problemIdChar - baseCharCode;
}
async function displaySolvedContestants() {
  const problemUrl = window.location.href;
  if(validpage(problemUrl)){
    const problemId = problemUrl.split('/').pop();
    const url = problemUrl.replace('/problem/' + problemId, '/');
  
    const response = await fetch(url);
    const htmlContent = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const index = getProblemIndex(problemId); // Function to determine the index based on problem ID
    const aElement = doc.querySelectorAll('a[title="Participants solved the problem"]')[index];
    const text = aElement.textContent.trim();
  
    const participantsText = 'No of participants solved this problem is ' + text;
    let divElement = document.getElementById('myDiv');
  
    if (!divElement) {
      // Create a new div element if it doesn't exist
      divElement = document.createElement('div');
      stylediv(divElement);
  
  // Append the div element to the body of the current page
  document.body.appendChild(divElement);
  
  
      // Append the div element to the body of the current page
      document.body.appendChild(divElement);
    }
  
    // Update the content of the div element
    divElement.textContent = participantsText;
    console.log("yet again");
  }
 
}
// Check if the current page is a problem page
if (window.location.href.includes('/problem/')) {
  displaySolvedContestants();

  // Continuously update the total number of participants who solved the problem every 10 seconds
  setInterval(displaySolvedContestants, 10000);
}
function validpage(problemUrl){
  // Regular expression to match the prefixes
  const regex = /^https:\/\/codeforces\.com\/contest(s)?\//i;
  if (regex.test(problemUrl)) {
    console.log('Valid problemUrl format');
    return 1;
  } else {
    return 0 ;
  }
  
}
function stylediv(divElement){
  divElement.setAttribute('id', 'myDiv');
  divElement.style.width = '200px';
  divElement.style.height = '200px';
  divElement.style.backgroundColor = '#f2f2f2';
  divElement.style.borderRadius = '10px';
  divElement.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
  divElement.style.padding = '20px';
  divElement.style.textAlign = 'center';
  divElement.style.fontFamily = 'Arial, sans-serif';
  divElement.style.fontSize = '18px';
  divElement.style.color = '#333';
  divElement.style.display = 'flex';
  divElement.style.justifyContent = 'center';
  divElement.style.alignItems = 'center';
}
function convertToDarkColor(color) {
  return color.replace(/rgb\((\d+), (\d+), (\d+)\)/, 'rgb(29, 29, 28)')
              .replace(/rgba\((\d+), (\d+), (\d+), ([\d.]+)\)/, 'rgba(29, 29, 28, $4)');
}
function isWhiteColor(color) {
  return color === 'rgb(255, 255, 255)' || color === 'rgba(255, 255, 255, 1)';
}
function isBlackColor(color) {
  return color === 'rgb(0, 0, 0)' || color === 'rgba(0, 0, 0, 1)';
}







function getContrastingColor(rgbValue) {
  // Parse the RGB components
  var rgbValues = rgbValue.match(/\d+/g);
  var r = parseInt(rgbValues[0]);
  var g = parseInt(rgbValues[1]);
  var b = parseInt(rgbValues[2]);

  // Calculate the brightness of the background color
  var bgBrightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Calculate the brightness threshold for determining the contrasting color
  var threshold = 127.5;

  // Set the contrasting color based on the brightness of the background
  var contrastingColor = (bgBrightness > threshold) ? 'black' : 'white';

  // Adjust the tone of the contrasting color based on the original color family
  var adjustedColor = contrastingColor === 'black' ? `rgb(${Math.floor(r/2)}, ${Math.floor(g/2)}, ${Math.floor(b/2)})` : `rgb(${Math.floor(r + (255 - r) / 2)}, ${Math.floor(g + (255 - g) / 2)}, ${Math.floor(b + (255 - b) / 2)})`;

  return adjustedColor;
}