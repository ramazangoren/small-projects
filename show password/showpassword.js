var state = true;

function showpassword() {
    if (state) {
        
        const password= document.getElementById('password');
        password.setAttribute('type','password');
        document.getElementById("eye").style.color = " #707070";
        state = false;
    } else {
        const password = document.getElementById('password');
        password.setAttribute('type','text');
        document.getElementById("eye").style.color = " #5887ef";
        state = true;
    }
}






