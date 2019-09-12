/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   

// Global variables to select all list items from the HTML page & maximum number of students per page\\

const studentList = document.querySelectorAll('li');
let studentsPerPage = 10;

// ShowPage function displays ten students per page, from a list and its correlating page of a sepcific set of ten students \\

const showPage = (list, page) => {
   let startIndex = (page * studentsPerPage) - studentsPerPage;
   let endIndex = page * studentsPerPage;
   for (let i = 0; i < list.length; i += 1) {
         if (i >= startIndex && i < endIndex) {
            list[i].style.display = '';
         } else {
            list[i].style.display = 'none';
         }
   }
};

// appendPageLinks function accepts a list, creates links to each page of ten students \\ 

const pages = Math.ceil(studentList.length/10);

let appendPageLinks = (list) => {
   let div = document.createElement('div');
   let page = document.querySelectorAll('.page')[0];
   div.className = ('pagination');
   page.appendChild(div);
   
   let ul = document.createElement('ul');
   let li = ul.children;
   div.appendChild(ul);

// A loop to create each pagination link \\   

   for (let i = 1; i <= pages; i += 1) {
      let li = document.createElement('li');
      ul.appendChild(li);
      let a = document.createElement('a');
      li.appendChild(a);
      a.setAttribute('href','#');
      a.textContent = (i);
   };

// Sets the first link to 'active' class \\

   let a = ul.querySelectorAll('a')
   a[0].className = 'active';

// Event listener shows page of students & sets class to active \\   

   ul.addEventListener('click', (e) => {
         for (let i = 0; i < a.length; i += 1) {
            a[i].classList.remove('active');
         };
         showPage(studentList, e.target.textContent);
         e.target.className = 'active';
   });
};

showPage(studentList, 1);
appendPageLinks(studentList);
