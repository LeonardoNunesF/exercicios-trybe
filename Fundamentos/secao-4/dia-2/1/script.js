// Acesse o elemento where-are-you. 
const whereAreYou = document.getElementById('where-are-you');

//Acesse parent a partir de where-are-you e adicione uma color a ele. 
const colorParent = whereAreYou.parentElement;
colorParent.style.color = 'green';

// Acesse o first-child-of-child e adicione um texto a ele. 
// Você se lembra dos vídeos da aula anterior? Eles ensinam como fazer isso. 
const firstChildofChild = whereAreYou.firstElementChild;
firstChildofChild.innerText = 'First child of child';

//Acesse o first-child a partir de parent. 
const firstChild = colorParent.parentElement;

// Acesse o first-child a partir de where-are-you.
const firstChild2 = whereAreYou.previousSibling;

// Acesse o texto Attention! a partir de where-are-you.
const textAttention = whereAreYou.nextSibling;

// Acesse o third-child a partir de where-are-you.
const thirdChild = whereAreYou.nextElementSibling;

// Acesse o third-child a partir de parent. 
const thirdChild2 = colorParent.lastElementChild.previousElementSibling;