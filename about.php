<?php include("head-nav.html");?>

<p>About</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var person = prompt("Please enter your name", "Enter Here");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
  }
}
</script>

<?php include("footer.html");?>

