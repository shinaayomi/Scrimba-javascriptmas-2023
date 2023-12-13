/** uncomment one of these **/
// import OpenAI from "openai"
import { HfInference } from "@huggingface/inference";

const dialogModal = document.getElementById("dialog-modal");
const imageContainer = document.getElementById("image-container");

/** show dialog on load **/
// dialogModal.show()

/**
 * 🎄 Challenge:
 * 1. When a user hits submit, dialogModal
 *    should be hidden.
 * 2. Use the inputted text to generate an image
 *    for the e-card using an AI model.
 *    ⚠️ Make sure the image is square.
 * 3. Render the image to imageContainer.
 *
 * 🎁 hint.md for help!
 **/

const inputForm = document.getElementById("input-form");
const userInput = document.getElementById("user-input");

async function generateImage() {
  const inference = new HfInference(process.env.HUGGING_FACE_API_KEY);
  const blob = await inference.textToImage({
    model: "stabilityai/stable-diffusion-2",
    inputs: userInput.value,
    parameters: {
      negative_prompt: "blurry",
    },
  });

  return await blobToDataURL(blob);
}

function blobToDataURL(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

inputForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  dialogModal.close();
  imageContainer.innerHTML = '<div class="spinner"></div>';
  imageContainer.innerHTML = `<img src="${await generateImage()}" alt="${
    userInput.value
  }">`;
  userInput.value = "";
});

dialogModal.show();
