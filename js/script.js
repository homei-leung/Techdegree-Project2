/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/

var fullList = document.getElementsByClassName('student-item cf');
const displayItems = 10;

/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/
function showPage(list, page){
  let startIndex = (page * displayItems) - displayItems;
  let endIndex = (page * displayItems);
  var i;
  for (i = 0; i <= list.length; i += 1) {
    if (i >= startIndex && i < endIndex){
    list[i].style.display = 'block'
    }
    else{
    list[i].style.display = 'none';
    }
  }
}

/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/


function appendPageLinks(list){
  let pageLinks = document.getElementById('.page').appendChild('div');
  pageLinks.classList.add("pagination");
  pageLinks.appendChild('ul');
  var i;
  for (i = 1; i <= math.ciel(list.length / displayItems); i += 1){
      ul.appendChild(li).appendChild(a);
      a.href = "#";
      a.textContent = i;

      a.addEventListener("click", showPage(fullList, i));
    }

  for (i = 1; i <= math.ciel(list.length / displayItems); i += 1){
      a.classList.remove("active");
      event.target.classList.add("active");
    }
  };

showPage(fullList, 1);
appendPageLinks(fullList);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
