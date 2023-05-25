var checker = document.getElementById('checkbox');
var sendbtn = document.getElementById('sendBt');



sendbtn.addEventListener('click', function onClick() {
    var recipeName = document.getElementById('recipeName').value;
    var ingr = document.getElementById('ingr').value;
    var yourName = document.getElementById('yourName').value;
    var yourEmail = document.getElementById('yourEmail').value;
    var checkedValue = document.getElementById('checkbox').checked;

    // Email.send({
    //         Host: 'smtp.elasticemail.com',
    //         Username: 'trainingfsaact@gmail.com',
    //         Password: 'DE414F9445391F59891932C4B3AEAB62B8F6',
    //         To: yourEmail,
    //         From: 'trainingfsaact@gmail.com',
    //         Subject: 'Sending Email using javascript. FSA Training',
    //         Body: "Hi "+yourName + ".\n Thank you for sending your "+ recipeName + "recipe. \n Details: "+ingr+"." ,
    //     }).then(function (message) {
    //       alert('Mail sent successfully');
    //       console.log(message);
    //     });
    console.log("Hi "+yourName + ".\n Thank you for sending your "+ recipeName + " recipe. \n Details: "+ingr+".");
    
    document.getElementById('recipeName').value="";
    document.getElementById('ingr').value="";
    document.getElementById('yourName').value="";
    document.getElementById('yourEmail').value="";
    document.getElementById("checkbox").checked = false;
});


checker.addEventListener('click', function() {
    if(this.checked){
        sendbtn.disabled = false; 
           sendbtn.style.backgroundColor = '#cb47ff'; 
    }else{
            sendbtn.disabled = true;
            sendbtn.style.backgroundColor = '#e9e9e9';
            sendbtn.style.border= '2px solid #ffffff';
    }
});


