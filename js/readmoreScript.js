function myFunction() {
  var arrow = document.getElementById("arrow");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readMoreBtn");

  if (arrow.style.display === "none") {
    arrow.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    arrow.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
