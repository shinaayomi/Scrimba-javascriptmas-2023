const wishlist = [
  "Macbook Air M2",
  // TODO: Add more items here
  "ATARI 2600+ Console",
  "Stack of Atari 2600 games",
  "Classic Atari T-Shirt",
  "Walkman with Retro Mixtapes",
  "Board Game Twilight Imperium",
];

const wishlistItems = document.getElementsByClassName("wishlist");

wishlist.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  listItem.classList = "wishlist-item";
  wishlistItems[0].appendChild(listItem);
});

/** Challenge: 
  - Iterate over the wishlist array.
  - Dynamically render your wishlist from the array.
  - Style the wishlist with CSS.
**/
