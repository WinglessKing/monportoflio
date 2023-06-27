function myFunction() {
  var colon = document.getElementById("colon");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readMoreBtn");

  if (colon.style.display === "none") {
    colon.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    colon.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
