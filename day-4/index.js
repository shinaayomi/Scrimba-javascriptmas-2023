/** uncomment one of these **/
// import OpenAI from "openai"
import { HfInference } from "@huggingface/inference";
const hf = new HfInference(process.env.HUGGING_FACE_API_KEY);
const displayEl = document.querySelector(".joke-display");

document
  .getElementById("window-container")
  .addEventListener("click", async function () {
    /**
     * 🎄 Challenge:
     * 1. When clicked, the doors should open
     *    to reveal a festive joke.
     *
     * 🎁 hint.md for help!
     **/
    displayEl.innerText = "Loading...";

    document.querySelector(".left-door").style =
      "animation: left-open 0.3s forwards";
    document.querySelector(".right-door").style =
      "animation: right-open 0.3s forwards";
    document.querySelector(".joke-display").style =
      "animation: display-joke 0.3s forwards";

    const response = await hf.textGeneration(
      {
        model: "google/flan-t5-xxl",
        inputs: `Q: Give me a Christmas joke.`,
        temperature: 0.7,
      },
      {
        use_cache: false,
      }
    );

    displayEl.innerText = response.generated_text;
  });
