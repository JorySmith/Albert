$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
$("a.prevent-default").click(function (e) {
  // Cancel the default action
  e.preventDefault();
});

// Dark mode selector
const toggler = document.getElementById('toggler');
const headOne = document.getElementsByTagName("h1");
const headFive = document.getElementsByTagName("h5");
const aTags = document.getElementsByTagName("a");
const accordionBody = document.getElementsByClassName("accordion-body");
const accordionButton = document.getElementsByClassName("accordion-button");
const ulSubheading = document.getElementsByClassName("ul-subheading");
const lists = document.getElementsByTagName("li");
const spans = document.getElementsByTagName("span");

toggler.addEventListener('change', () => {
	document.body.classList.toggle('dark-mode');
	for (let i=0; i< headOne.length; i++) {
    headOne[i].classList.toggle('dark-mode')
  }
	for (let i=0; i< headFive.length; i++) {
    headFive[i].classList.toggle('dark-mode')
  }
	for (let i=0; i< aTags.length; i++) {
    aTags[i].classList.toggle('dark-mode')
  }
  for (let i=0; i< accordionBody.length; i++) {
    accordionBody[i].classList.toggle('dark-mode')
  }
  for (let i=0; i< accordionButton.length; i++) {
    accordionButton[i].classList.toggle('dark-mode')
  }
  for (let i=0; i< ulSubheading.length; i++) {
    ulSubheading[i].classList.toggle('dark-mode')
  }
	for (let i=0; i< lists.length; i++) {
    lists[i].classList.toggle('dark-mode')
  }
	for (let i=0; i< spans.length; i++) {
    spans[i].classList.toggle('dark-mode')
  }	
});
