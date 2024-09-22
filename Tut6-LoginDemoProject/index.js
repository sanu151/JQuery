$("#login-button").click(function () {
  let pass1 = $("#pass1").val();
  let pass2 = $("#pass2").val();

  if (pass1 != "" && pass2 != "") {
    if (pass1 == pass2) {
      alert("Successfully Login");
    } else {
      alert("Password Mismatch");
    }
  } else {
    alert("Please enter password");
  }
});
