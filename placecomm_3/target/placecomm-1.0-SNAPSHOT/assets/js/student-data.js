let get_details = document.getElementById('getStudents2');

get_details.addEventListener('click', async (e) => {

    console.log("register yo");

    let response = await fetch("api/students/get");

    console.log("register yo",response);
    let students = await response.json();
    let userEmail = sessionStorage.getItem("email");
    let studentData = students.filter((item)=>item['email']==userEmail);

    let courses_option = document.getElementById('profile-table');
    courses_option.innerHTML = ' <tr>' +'<th>first_name:</th>' + '<td>'+studentData[0]['first_name']+'</td>' +'</tr>' +
        '<tr>' +'<th>last_name:</th>' + '<td>'+studentData[0]['last_name']+'</td>' +'</tr>'+
        '<tr>' +'<th>rollno:</th>' + '<td>'+studentData[0]['rollno']+'</td>' +'</tr>'+
        '<tr>' +'<th>email:</th>' + '<td>'+studentData[0]['email']+'</td>' +'</tr>'+
        '<tr>' +'<th>CGPA:</th>' + '<td>'+studentData[0]['cgpa']+'</td>' +'</tr>'+
        '<tr>' +'<th>description:</th>' + '<td>'+studentData[0]['description']+'</td>' +'</tr>'
    ;
});