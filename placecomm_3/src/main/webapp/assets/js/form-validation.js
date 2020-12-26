let student_form = document.getElementById('student-validation');



function check(){
    console.log("its working")
}
student_form.addEventListener('submit', async (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("register yo");
    if (student_form.checkValidity() === true) {
        let response = await fetch('api/students/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                first_name: document.getElementById('first_name').value,
                last_name: document.getElementById('last_name').value,
                email: document.getElementById('email').value,
                password: document.getElementById("password").value,
                rollno : document.getElementById("Rollno").value,
                cgpa: document.getElementById("cgpa").value,
                domain: document.getElementById("domain").value,
                description: document.getElementById("description").value,

            })
        }).then(
            response => {
                if(response['status'] === 203){

                    console.log("register yo",response);
                    document.getElementById("login-success").style.display = "none";
                    document.getElementById("login-alert").style.display = "block";


                }else{
                    let mailID  = document.getElementById('email').value;
                    let userCompData = JSON.parse(localStorage.getItem(mailID));
                    let userObj = {
                        ...userCompData,
                        mail : mailID,
                        cgpa : document.getElementById("cgpa").value
                    };

                    localStorage.setItem(mailID,JSON.stringify(userObj));
                    document.getElementById("login-alert").style.display = "none";
                    document.getElementById("login-success").style.display = "block";
                    location.href="example.html";
                }

            }
        );
    }else{
        student_form.classList.add('was-validated');
    }
});





