const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const selector = document.getElementById('displacement');
const text = document.getElementById('to-encrypt');
const button = document.getElementById('button');
const response = document.getElementById('response');

for (let i = 0; i < alphabet.length; i++) {
  selector.innerHTML =
    selector.innerHTML + `<option value="${i}">${alphabet[i]}</option>`;
}

button.addEventListener('click', () => {
  let textToEncrypt = text.value;
  let displacement = +selector.value;

  let encrypted = encrypt(textToEncrypt, displacement);
  response.classList.remove('invisible');
  response.innerText = encrypted;
});

function encrypt(text, displacement) {
  let uppercaseText = text.toUpperCase().split('');
  let encryptedText = []; // Array to store encrypted characters

  for (let i = 0; i < uppercaseText.length; i++) {
    let indexLetter = alphabet.indexOf(uppercaseText[i]);
    if (indexLetter >= 0) {
      // Encrypt and push the new character
      encryptedText.push(indexByLetter(indexLetter + displacement));
    } else {
      // Push the original character if it's not in the alphabet
      encryptedText.push(uppercaseText[i]);
    }
  }
  return encryptedText.join(''); // Join the array to form the encrypted string
}

function indexByLetter(index) {
  let finalIndex;
  if (index >= 0) {
    finalIndex = index % alphabet.length;
  } else {
    finalIndex = alphabet.length + (index % alphabet.length);
  }
  return alphabet[finalIndex];
}
