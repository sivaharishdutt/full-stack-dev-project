let companies_form = document.getElementById('companies-form');

let userMail = sessionStorage.getItem("email");
let userDetails = JSON.parse(localStorage.getItem(userMail));

if(userDetails && userDetails.selCompanies && userDetails.selCompanies.length>0){
    document.getElementById("get-comp").disabled  = true;
}
else{
    document.getElementById("get-comp").disabled  = false;
}

companies_form.addEventListener('submit', async (e) => {
    e.preventDefault();
    e.stopPropagation();

    let rows = document.getElementsByClassName("companies-input");
    let selectedCompanyIDs = [];
    for (let i = 0; i < rows.length; i++) {
        if(document.getElementsByClassName("companies-input")[i].checked){
            selectedCompanyIDs.push(document.getElementsByClassName("companies-input")[i].id)
        }

    }

    let userDet2 = JSON.parse(localStorage.getItem(userMail2));

    let companyObj = {
        ...userDet2,
        selCompanies : selectedCompanyIDs,
    }

    localStorage.setItem(userMail,JSON.stringify(companyObj));

    document.getElementById("get-comp").click();
});





