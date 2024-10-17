document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault(); // pause submission
  document.getElementById("hiddenMessage").style.display = "block";
  document.getElementById("formDiv").style.display = "none";
  setTimeout(function() {
    e.target.submit()
  }, 2000)
})
