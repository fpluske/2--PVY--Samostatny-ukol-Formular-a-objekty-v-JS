function toggleForm() {
    const selectedValue = document.getElementById("form-select").value;
    document.getElementById("obvod-form").style.display = selectedValue === "obvod" ? "block" : "none";
    document.getElementById("obsah-form").style.display = selectedValue === "obsah" ? "block" : "none";
  }