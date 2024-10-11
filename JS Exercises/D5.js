//test
console.log('File JS collegato correttamente')
/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
//console.log di ogni elemento dell'array pets tramite un ciclo pre-determinato 'for'. 
//Ad ogni iterazione la variabile contatore 'i' corrisponde ad un indice dell'array pets
for(let i=0; i<pets.length; i++) {
  console.log('Elemento di indice ' + i + ': ', pets[i])
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

// //Array Sort() è un metodo che permette di ordinare alfabeticamente gli elementi di tipo stringa di un array
// console.log(pets)
// console.log(pets.sort())

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

// const reversePets = []

// for(let i=0; i<pets.length; i++) {
//   reversePets.push(pets[pets.length-(i+1)])
// }
// console.log(reversePets)

//Oppure più velocemente con il metodo reverse() - console.log(pets.reverse())

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

// let temp = pets[0]// salvo in una variabile temporanea il primo elemento di pets
// pets.shift()//elimino dall'arrayy pets l'elemento in posizione 0
// pets.push(temp)//aggiungo quello che era il primo elemento dell'array,salvato nella variabile temp, alla fine dell'array pets a cui ho eliminato il precedente primo elemento 
// console.log(pets)

//posso anche creare una funzione che porti il primo elemento di un array in ultima posizione e come valore ritorni l'array con le nuove osizioini degli elementi 
const swap = function(arr) {
  let temp
  temp = arr[0]
  arr.shift()
  arr.push(temp)
  return arr
}

const petsSwap = swap(pets)
console.log(petsSwap)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

// for(let i = 0; i < cars.length; i++) {
//   //accedo ad ogni elemento dell'array cars e aggiungo con la dot notation la proprietà 'licensPlate' alla quale assegno un valore in base all'indice di ognuno di essi
//   cars[i].licensePlate = 'AA' + i + i + i + 'ZZ'
// }

// console.log(cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
//creo un nuovo oggetto
const newObj = {
  brand: 'AlfaRomeo',
  model: 'Giulietta',
  color: 'black',
  trims: ['allure', 'style', 's-line'],
}

//push del nuovo oggetto creato alla fine dell'array cars
cars.push(newObj)

console.log(cars)

// rimozione dell'ultimo elemento dalla proprietà 'trims' di ogni auto
// scorrimento dell'intero array con un ciclo for
for(let i = 0; i < cars.length; i++) {
  //accedo alla proprietà trims dell'elemento corrente e utilizzo pop()
  cars[i].trims.pop()
}

console.log(cars)



/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

for(let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0])
}

console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for(let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === 'b'){
    console.log('Fizz')
  } else {
    console.log('Buzz')
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let count = 0 
while (numericArray[count] !== 32) {
  console.log(numericArray[count])
  count++
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

const charPositions = []

for (let i = 0; i < charactersArray.length; i++){
  switch (charactersArray[i]) {
    case 'a':
      charPositions.push(1)
      break
    case 'b':
      charPositions.push(2)
      break
    case 'c':
      charPositions.push(3)
      break
    case 'd':
      charPositions.push(4)
      break
    case 'e':
      charPositions.push(5)
      break
    case 'f':
      charPositions.push(6)
      break
    case 'g':
      charPositions.push(7)
      break
    case 'h':
      charPositions.push(8)
      break
    case 'i':
      charPositions.push(9)
      break
    case 'l':
      charPositions.push(10)
      break
    case 'm':
      charPositions.push(11)
      break
    case 'n':
      charPositions.push(12)
      break
    case 'o':
      charPositions.push(13)
      break
    case 'p':
      charPositions.push(14)
      break
    case 'q':
      charPositions.push(15)
      break
    case 'r':
      charPositions.push(16)
      break
    case 's':
      charPositions.push(17)
      break
    case 't':
      charPositions.push(18)
      break
    case 'u':
      charPositions.push(19)
      break
    case 'v':
      charPositions.push(20)
      break
    case 'z':
      charPositions.push(21)
      break
    default:
      console.log ("Lettera non appartenente all'alfabeto italiano!")  
  }

}

console.log(charPositions)
