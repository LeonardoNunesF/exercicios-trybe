let word = 'tryber';
let reverso ='';

for (let i = 0; i < word.length; i += 1) {

    reverso += word[word.length - 1 - i];  
  }
  console.log(reverso);