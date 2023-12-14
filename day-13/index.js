/**
Task:
- Write the code to help a user choose the perfect Christmas dinner idea
  based on the number of people attending.
- Include a checkbox for the user to specify the meal 
  should be vegetarian-friendly.

Dinner suggestions (or choose your own!):
Vegetarian: Winter Squash Risotto
4 people or less: Ham
5+ people: Turkey

Stretch goals:
- Add more dietary options.
- Show recipes when the meal has been selected.
 */

const dietType = [
  {
    recipeTwo: {
      name: "Easy jerk chicken and coconut rice",
      description:
        "Bring a taste of Jamaica to your weeknight dinner with our easy recipe for jerk chicken thighs, served with a speedier take on rice and peas.",
      imgURL:
        "https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/07/802051-1-eng-GB_easy-jerk-chicken-768x960.jpg",
    },

    recipeFour: {
      name: "Kashmiri lamb shank rogan josh",
      description:
        "Vivek Singh’s Kashmiri rogan josh is made with tender lamb, beetroot, ginger and yogurt. Serve on the bone over rice.",
      imgURL:
        "https://www.deliciousmagazine.co.uk/wp-content/uploads/2021/05/960x1200-DEL_2021_Q2_VIVEKSINGH_KASHMIRI_LAMB_SHANK_ROGAN_JOSH-768x960.jpg",
    },

    recipeFive: {
      name: "Harissa and honey chicken with almond tabbouleh",
      description:
        "Learn how to spatchcock a chicken with this sticky and spicy recipe, complete with pickled cabbage and a nutty almond tabbouleh.",
      imgURL:
        "https://www.deliciousmagazine.co.uk/wp-content/uploads/2019/09/roast-chicken-768x960.jpg",
    },
  },
  {
    recipeTwo: {
      name: "Mushroom and époisses pithiviers",
      description:
        "These beautiful puff-pastry parcels filled with époisses cheese and mushrooms are irresistible. Serve them as a vegetarian Valentine’s meal or stunning festive main course, or at your next dinner party.",
      imgURL:
        "https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/09/334875-1-eng-GB_mushroom-and-epoisses-pithiviers.jpg",
    },

    recipeFour: {
      name: "Salt-baked celeriac with tahini",
      description:
        "Salt-baked celeriac makes an easy but impressive vegan centrepiece. Serve on a colourful lentil and pomegranate salad with tahini sauce and zhoug.",
      imgURL:
        "https://www.deliciousmagazine.co.uk/wp-content/uploads/2021/11/960_SALT_ROASTED_CELERIAC-768x960.jpg",
    },

    recipeFive: {
      name: "Sweet potato, ciabatta and chestnut stuffing",
      description:
        "Looking for a smashing veggie dish to take Christmas lunch to the next level? This warming sweet potato, ciabatta and chestnut stuffing bake ticks all the boxes, and will satisfy both veggies and meat-eaters alike.",
      imgURL:
        "https://www.deliciousmagazine.co.uk/wp-content/uploads/2019/12/sweet-potato-ciabatta-and-chestnut-stuffing-768x962.jpg",
    },
  },
];

const guestsInput = document.getElementById("guests");
const vegetarianCheckbox = document.getElementById("vegetarian-input");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
const food = document.getElementById("food");
const btnDescription = document.getElementById("btn-desc");

// Modal
const modalContainer = document.getElementById("modalcontainer");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");

function chkType() {
  let checked = 0;
  if (vegetarianCheckbox.checked) {
    checked = 1;
  } else {
    checked = 0;
  }
  return checked;
}

function chkInput() {
  let myInput = guestsInput.value;
  let recipeNum = "";
  if (myInput) {
    if (myInput >= 5) {
      recipeNum = "recipeFive";
    } else if (myInput < 5 && myInput >= 3) {
      recipeNum = "recipeFour";
    } else if (myInput <= 2) {
      recipeNum = "recipeTwo";
    }
    return recipeNum;
  } else {
    alert("Please enter a number!!");
  }
}

function render() {
  let checked = chkType();
  let num = chkInput();

  if (num !== undefined) {
    food.textContent = `${dietType[checked][num].name}`;

    modalImg.src = `${dietType[checked][num].imgURL}`;
    captionText.textContent = `${dietType[checked][num].description}`;

    btn.classList.toggle("hidden");
    btnDescription.style.display = "block";
  }
}

function showModal() {
  modalContainer.style.display = "block";
}

function hideModal() {
  modalContainer.style.display = "none";
  btn.classList.remove("hidden");
  btnDescription.style.display = "none";
  guestsInput.value = "";
}

// Event Listners
btn.addEventListener("click", render);

// Show/Hide Modal
btnDescription.addEventListener("click", showModal);
modalImg.addEventListener("click", hideModal);
modalContainer.addEventListener("click", hideModal);
