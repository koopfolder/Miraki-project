$('document').ready(function(){
  $("#test").show();
  var account;

  $( "#test" ).submit(function( event ) {
    var accNo = $("#username").val();
    var pin = $('#password').val();
    var success = false;
    for (var i = 0; i < accounts.length; i++) {
      if (accounts[i].accountNo == accNo && accounts[i].pin == pin) {
      success = true;
      account = i;
      break;
      }
    }
    if (success) {
      $("#username").val(''); 
      $("#password").val('');
      window.location="addtocart.html";
      
      
    } else {
      alert('Username หรือ Password ไม่ถูกต้อง');
    }
    event.preventDefault();   
  });

});


var accounts = [
  {accountNo: 1234, pin: 1234},
  {accountNo: 1111, pin: 1111},
  {accountNo: 5555, pin: 5555}
]

