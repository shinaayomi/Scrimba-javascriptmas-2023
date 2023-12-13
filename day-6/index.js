const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"];

function generateSecretSantaPairs(arr) {
  // Your code here
  let pairs = {};
  let copy = [...arr];

  for (let i = 0; i < arr.length; i++) {
    let person = arr[i];
    let index;

    if (copy.length === 1) {
      pairs[person] = copy[0];
      pairs[copy[0]] = person;
      break;
    }

    do {
      index = Math.floor(Math.random() * copy.length);
    } while (
      copy[index] === person ||
      (Object.values(pairs).includes(copy[index]) && copy.length > 1)
    );

    pairs[person] = copy[index];
    copy.splice(index, 1);
  }
  console.log(pairs);
  return pairs;

  // Shuffle array
  //   for (let i = arr.length - 1; i > 0; i--) {
  //     let j = Math.floor(Math.random() * (i + 1));
  //     [arr[i], arr[j]] = [arr[j], arr[i]];
  // }

  // let pairs = {};

  // // Circular assignment
  // for(let i = 0; i < arr.length; i++) {
  //     if(i === arr.length - 1) {
  //         pairs[arr[i]] = arr[0];
  //     } else {
  //         pairs[arr[i]] = arr[i + 1];
  //     }
  // }

  // console.log(pairs);
  // return pairs;
}

console.log(generateSecretSantaPairs(people));

/**
Example output:
{
    Alice: "Dan",
    Bob: "Ferdinand",
    Carly: "Ed",
    Dan: "Alice",
    Ed: "Ginny",
    Ferdinand: "Bob",
    Ginny: "Carly"
}
 */
