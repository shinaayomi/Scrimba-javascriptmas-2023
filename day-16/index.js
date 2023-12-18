const niceList = document.getElementById("nice-list");
const naughtyList = document.getElementById("naughty-list");
const btn = document.getElementById("btn");
// btn.addEventListener("click", sort)

const sorteesArr = [
  {
    name: "David",
    hasBeenGood: false,
  },
  {
    name: "Del",
    hasBeenGood: true,
  },
  {
    name: "Valerie",
    hasBeenGood: false,
  },
  {
    name: "Astrid",
    hasBeenGood: true,
  },
];

btn.addEventListener("click", sort, { once: true });

function sort() {
  sorteesArr.sort().filter((item) => {
    if (item.hasBeenGood === true) {
      niceList.innerHTML += item.name + "<br>";
    } else {
      naughtyList.innerHTML += item.name + "<br>";
    }
  });
}

// let newSorteesArr = '';

// for(let i = 0; i < sorteesArr.length; i++){
//     newSorteesArr += sorteesArr[i].name;
//     niceList.textContent = newSorteesArr
// }
console.log(sorteesArr);

/** Challenge: 
  - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.
**/

/** Stretch goals:
  - Add the option to add new names to the sorteesArr.
  - Make it possible to switch people to the other list.
**/
