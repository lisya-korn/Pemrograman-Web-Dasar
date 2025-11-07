function fn_ValForm() {
  var sMsg = "";
  var email = document.getElementById("email").value.trim();

  if(document.getElementById("name").value == "") {
    sMsg += "\n* Anda belum mengisikan nama";
  }
  if(email === "") {
    sMsg += "\n* Anda belum mengisikan email";
  }else {
    var emailTest = /^[a-z0-9][a-z0-9_.-]*[a-z0-9]@[a-z0-9][a-z0-9_.-]*[a-z0-9]\.[a-z0-9]{2,4}$/i

    if (!emailTest.test(email)) {
      sMsg += "\n* Format email tidak valid";
    }
  }
  if (document.getElementById("message").value == "") {
    sMsg += "\n* Anda belum mengisikan pesan";
  }

  if (sMsg != "") {
    alert("Peringatan: \n" + sMsg);
    return false;
  } else {
    return true;
  }
}