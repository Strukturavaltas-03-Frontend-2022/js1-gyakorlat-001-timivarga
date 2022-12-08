// person.js: Hozz létre egy függvénykifejezést arrow function-nel!
// A függvény neve personDataLog legyen.
// A függvény paraméterként egy objektumot vár, amely firstname, lastname és age tulajdonságokkal rendelkezik.
// Amennyiben bármelyik tulajdonság hiányozna, úgy rendre a következő alapértelmezett értékeket vegyék fel:
// firstname: John
// lastname: Doe
// age: 33
// A függvény visszadja az adott illető adatait string-formátumban: My name is <firstname> <lastname>. I'm <age> years old.
// A <firstname>, <lastname> és <age> helyére a paraméterként kapott objektumtulajdonságok értékét kell behelyettesíteni.



// function personDataLog ({ firstname= 'John', lastname= 'Doe', age= 33 } = {}) {
//     return "My name is " + firstname  +" "+ lastname +  ". I'm" + " " + age + "years old.";
// }
// console.log(personDataLog());

const personDataLog = ({ firstname = 'John', lastname = 'Doe', age = 33 } = {}) => "My name is " + firstname + " " + lastname + ". I'm" + " " + age + "years old.";