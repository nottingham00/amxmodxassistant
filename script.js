function handleSubmit() {
  const input = document.getElementById('input').value.trim();
  const output = document.getElementById('output');

  if (!input) {
    output.textContent = "⚠️ Please enter a prompt.";
    return;
  }

  // Placeholder response
  output.textContent = "🛠️ Analyzing...\n\n" +
    "This is a placeholder. Later, you can connect this to an API or add static logic for plugin analysis.";
}
