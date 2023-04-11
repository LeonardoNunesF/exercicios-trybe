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
