/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

/***
Global variables fullList holds the entire list of students, while displayItems
indicate the desired number of students to display on each page.
***/

var fullList = document.getElementsByClassName('student-item cf');
const displayItems = 10;

/***
The showPage function calculates and shows the appropriate students for the
current page.
***/
function showPage(list, page){
  let startIndex = (page * displayItems) - displayItems;
  let endIndex = (page * displayItems);
  var i;
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
  var i;

  for (i = 1; i <= numPages; i += 1){
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.href = "#";
      a.textContent = i;
      ul.appendChild(li);
      li.appendChild(a);

      a.addEventListener("click", (event) => {
      let links = document.getElementsByTagName('a');
      for(var i=0; i < links.length; i += 1){
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
