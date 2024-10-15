console.log("Array Exercises");
let people = ["Greg", "Mary", "Devon", "James"];

// 1.for loop untuk semua orang
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// 2. forEach()
people.forEach(function (item) {
  console.log(item);
});

// 3. hapus Greg menggunakan shift, greg berada pada index pertama
people.shift();
console.log(people);

// 4. hapus james menggunakan pop, james berada pada index terakhir
people.pop();
console.log(people);

// 5. tambahkan matt pada array pertama, menggunakan unshift
people.unshift("Matt");
console.log(people);

// 6. tambahkan nama anda pada array terakhir, menggunakan push
people.push("Busdan");
console.log(people);

// 7. gunakan for-loop
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") {
    break;
  }
}

// 8. gunakan slice dan hanya mengambil index setelah 2
let peopleNew = people.slice(2);
console.log(peopleNew);

// 9. gunakan splice dan hapus "Devon" kemudian tambahkan "Elizabeth" dan "Artie"
console.log(people);
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

// 10. buat variabel baru bernama withbob
withbob = people.concat("Bob");
console.log(people);
console.log(withbob);

console.log("\n\n");
console.log("Object Exercise");
let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

// 1.  Menambahkan string "Go" pada akhir index
programming.languages.push("Go");
console.log(programming.languages);

// 2. Mengunakan bracket notation ganti difficulty menjadi 7
programming["difficulty"] = 7;
console.log(programming.difficulty);

// 3. Menghapus jokes
delete programming.jokes;
console.log(programming);

// 4.  Mengunakan dot natation untuk menambahkan new key is fun
programming.isfun = true;
console.log(programming);

// 5. Update element
programming.languages.map((language, index) => {
  console.log(index + " - " + language);
});
