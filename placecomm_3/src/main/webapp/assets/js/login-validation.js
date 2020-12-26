let login_form = document.getElementById('login-validation');

login_form.addEventListener('submit', async (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("yo");
    let email_val= document.getElementById('email').value;
    let password_val=document.getElementById("password").value;
    if (login_form.checkValidity() === true) {
        let response = await fetch('api/students/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                email:email_val,
                password:password_val,
            })
        }).then(
            response => {
                if(response['status'] === 200){
                    sessionStorage.setItem("email",email_val);
                    document.getElementById("login-alert").style.display = "none";
                    document.getElementById("login-success").style.display = "block";
                    location.href="home.html";

                }else{
                    let data=response.json();
                    console.log("lalala",data);
                    document.getElementById("login-success").style.display = "none";
                    document.getElementById("login-alert").style.display = "block";
                }

            }
        );
    }else{
        login_form.classList.add('was-validated');
    }
});

