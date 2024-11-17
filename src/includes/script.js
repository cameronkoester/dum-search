document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const submitButton = document.getElementById("submitButton");
  const clearButton = document.getElementById("clearButton");

  // Focus on search input field when the page loads
  searchInput.focus();

  // Toggle "X" button visibility and enable/disable submit button
  searchInput.addEventListener("input", function () {
    const hasText = searchInput.value.trim() !== "";
    submitButton.disabled = !hasText;
    clearButton.style.display = hasText ? "flex" : "none";
  });

  // Clear input field when "X" button is clicked
  clearButton.addEventListener("click", function () {
    searchInput.value = "";
    searchInput.focus();
    submitButton.disabled = true;
    clearButton.style.display = "none";
  });

  // Handle form submission
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const query = searchInput.value;
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}&udm=14`;
    window.location.href = url;
  });
});
