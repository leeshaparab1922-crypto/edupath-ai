async function getCareer() {
  const interest = document.getElementById("interest").value.trim();
  const btn = document.getElementById("submit-btn");
  const loading = document.getElementById("loading");
  const outputSection = document.getElementById("output-section");
  const output = document.getElementById("output");
  const errorMsg = document.getElementById("error-msg");

  // Reset UI
  outputSection.classList.add("hidden");
  errorMsg.classList.add("hidden");

  if (interest.length < 10) {
    errorMsg.textContent = "Please describe your interests in at least a sentence.";
    errorMsg.classList.remove("hidden");
    return;
  }

  // Show loading
  btn.disabled = true;
  loading.classList.remove("hidden");

  try {
    const response = await fetch("http://localhost:3000/career", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ interest })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Something went wrong.");
    }

    output.textContent = data.response;
    outputSection.classList.remove("hidden");

  } catch (err) {
    errorMsg.textContent = err.message || "Failed to connect to server. Is it running?";
    errorMsg.classList.remove("hidden");
  } finally {
    loading.classList.add("hidden");
    btn.disabled = false;
  }
}