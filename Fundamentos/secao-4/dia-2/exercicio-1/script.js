// Imagine que você trabalha em uma agência de viagens e 
// sua liderança informa que você será a pessoa responsável 
// por dar início à nova página inicial (landing page) da empresa.

// Seu objetivo nesse novo desafio é criar tags HTML usando a 
// manipulação do DOM com JavaScript. Para isso, utilize a 
// estrutura inicial apresentada a seguir.

// Para criar a página inicial da agência de viagens, você deve 
// utilizar apenas código JavaScript, o qual deve ser inserido 
// entre as tags <script> e </script>.

// Para dar início à página, você deve criar algumas tags, 
// conforme o passo a passo indicado a seguir:

//     1.Adicione a tag h1 com o texto TrybeTrip - Agência 
//     de Viagens como filho da tag body; 
const h1 = document.createElement('h1');
h1.innerText = 'TrybeTrip - Agência de Viagens'
document.body.appendChild(h1);

// 2 - Adicione a tag main com a classe main-content 
// como filha da tag body;
const mainContent = document.createElement('main');
mainContent.className = 'main-content';
document.body.appendChild(mainContent);

// 3 - Adicione a tag section com a classe center-content 
// como filha da tag main criada no passo 2;
const centerContent = document.createElement('section');
centerContent.className = 'center-content';
mainContent.appendChild(centerContent);

// 4 - Adicione a tag p como filha da section criada 
// no passo 3 e coloque algum texto;
const p = document.createElement('p');
p.innerText = 'algum texo'
centerContent.appendChild(p);

// 5 - Adicione a tag section com a classe left-content 
// como filha da tag main criada no passo 2;
const leftSection = document.createElement('section');
leftSection.className = 'left-content';
mainContent.appendChild(leftSection);

// 6 - Adicione a tag section com a classe right-content 
// como filha da tag main criada no passo 2;
const rightSection = document.createElement('section');
rightSection.className = 'right-content';
mainContent.appendChild(rightSection);

// 7 - Adicione uma imagem com src configurado para valor 
// https://picsum.photos/200 e classe small-image. 
// Esse elemento deve ser filho do section criado no passo 5;
const imagemzinha = document.createElement('img');
imagemzinha.src = 'https://picsum.photos/200 ';
imagemzinha.className = 'small-image';
leftSection.appendChild(imagemzinha);

// 8 - Adicione uma lista não ordenada com os valores 
// de 1 a 10 por extenso, ou seja, um, dois, três, e assim 
// por diante. Essa lista deve ser filha do section criado 
// no passo 6;
const numeros = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
const ul = document.createElement('ul');

for (let i = 0; i < numeros.length; i += 1) {
    const li = document.createElement('li');
    li.innerText = numeros[i];
    ul.appendChild(li);
}
rightSection.appendChild(ul);  

// 9 - Adicione 3 tags h3, todas filhas do main criado 
// no passo 2. 
for(let i = 0; i < 3; i += 1) {
    const h3 = document.createElement('h3');
    h3.innerText = i;
    mainContent.appendChild(h3);
}

// Suponha que, depois da criação das tags indicadas, 
// sua liderança tenha visualizado a estrutura inicial 
// da página e pedido a você que fizesse as seguintes 
// alterações:

// 1 - Adicione a classe title na tag h1 criada;
const title = document.querySelector('h1');
title.className = 'title';

// 2 - Adicione a classe description nas 3 tags h3 criadas;
// adicionado h3[index].className = 'description'; no 9
const h3 = document.getElementsByTagName('h3');
for (let i = 0; i < 3; i += 1) {
  h3[i].className = 'description';
}

// 3 - Remova a section criada no passo 5 
// (aquela que possui a classe left-content) 
// por meio da função .removeChild();
const sectionLeftContent = document.getElementsByClassName('left-content')[0];
mainContent.removeChild(sectionLeftContent);

// Centralize a section criada no passo 6 
// (aquela que possui a classe right-content).
const sectionRightContent = document.getElementsByClassName('right-content')[0];


// De olho na dica 👀: Para centralizar a section, 
// basta configurar o margin-right: auto da section.
sectionRightContent.style.marginRight = 'auto';

// 4 - Troque a cor de fundo do elemento-pai da 
// section criada no passo 3 (aquela que possui a 
//     classe center-content) para a cor verde;
const sectionCenterContent = document.getElementsByClassName('center-content')[0];
sectionCenterContent.parentNode.style.backgroundColor = 'green';

// 5 - Remova os dois últimos elementos (nove e dez) 
// da lista criada no passo 8.
ul.lastChild.remove();
ul.lastChild.remove();
