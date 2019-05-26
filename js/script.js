/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

/***
Search bar dynamically created.
***/
let h2 = document.querySelector('h2');
let searchBar = document.createElement('div');
searchBar.className = "student-search";
let input = document.createElement('input');
input.placeholder = "Search for students...";
let button = document.createElement('button');
button.textContent = "Search";
searchBar.appendChild(input);
searchBar.appendChild(button);
h2.parentNode.insertBefore(searchBar, h2.nextSibling);

/***
Global variables fullList holds the entire list of students, while displayItems
indicate the desired number of students to display on each page.
***/

var fullList = document.getElementsByClassName('student-item cf');
const displayItems = 10;
var i;

/***
The showPage function calculates and shows the appropriate students for the
current page.
***/
function showPage(list, page){
  let startIndex = (page * displayItems) - displayItems;
  let endIndex = (page * displayItems);
  for (i = 0; i < list.length; i += 1) {
    if (i >= startIndex && i < endIndex){
    list[i].style.display = 'block'
    }
    else{
    list[i].style.display = 'none';
    }
  }
}

/***
The appendPageLinks function dynamically creates the page buttons based on
the list passed in. The page buttons generated function as navigation through
the list.
***/


function appendPageLinks(list){
  let pageLinks = document.querySelector('.page');
  let pagDiv = document.createElement('div');
  pagDiv.className = "pagination";
  let numPages = Math.ceil(list.length / displayItems);
  let ul = document.createElement('ul');
  pageLinks.appendChild(pagDiv);
  pagDiv.appendChild(ul);

  for (i = 1; i <= numPages; i += 1){
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.href = "#";
      a.textContent = i;
      ul.appendChild(li);
      li.appendChild(a);

      a.addEventListener("click", (event) => {
      let links = document.getElementsByTagName('a');
      for(i=0; i < links.length; i += 1){
        links[i].classList.remove("active");
      }
      event.target.className = "active";
      let currentPage = event.target.textContent
      showPage(list, currentPage);
    });
    }
  };

showPage(fullList, 1);
appendPageLinks(fullList);

//Make an array of all names in fullList.
let studentNames = document.querySelectorAll('h3');
let studentNamesText = [];
for(i = 0; i < studentNames.length; i += 1){
  studentNamesText.push(studentNames[i].textContent.toLowerCase());
}

/***
Add functionality to search bar. Compare search query text with text in
studentNamesText array. Hides index of array that do not include search
query and will display "No results" if there are no matches.
***/

function matchInput() {
  let searchQuery = input.value.toLowerCase();
  let resultsArray = [];
  for (i = 0; i < studentNamesText.length; i += 1){
    if(studentNamesText[i].includes(searchQuery)){
      resultsArray.push(fullList[i]);
    }
  }
console.log(resultsArray);
    if(resultsArray.length == 0){
      resultsArray[i].style.display = "none";
      let p = document.createElement('p');
      let page = document.querySelector('.page');
      page.appendChild(p);
      p.textContent = "No results."
    }
    showPage(resultsArray, 1);
    appendPageLinks(resultsArray);
}

button.addEventListener("click", (event) => {
  matchInput();
})
