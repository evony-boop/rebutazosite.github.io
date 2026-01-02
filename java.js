function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "admin" && pass === "faith") {
    window.location.href = "home.html";
  } else {
    alert("Invalid login. Try admin / faith");
  }
}