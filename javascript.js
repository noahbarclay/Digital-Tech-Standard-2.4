function myFunction() {
    var person = prompt("Please enter your name", "Enter Here");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "Hello " + person + "! How are you today?";
    }
  }