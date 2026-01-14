const adviceId = document.getElementById("adviceId");
const adviceText = document.getElementById("adviceText");
const generateAdviceBtn = document.querySelector("button");
const API_URL = "https://api.adviceslip.com/advice";

async function getQuote(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Unexpected error");
    const data = await res.json();
    const { id, advice } = data.slip;

    renderQuote(id, advice);
  } catch (error) {
    console.error(`Failed to load: ${error}`);
    adviceId.textContent = "# -";
    adviceText.innerHTML = `<span>Something went wrong: ${error.message}</span>`;
  }
}

async function renderQuote(id, advice) {
  adviceId.textContent = `# ${id}`;
  adviceText.innerHTML = `<q>${advice}</q>`;
}

generateAdviceBtn.addEventListener("click", () => {
  getQuote(API_URL);
});

getQuote(API_URL);
