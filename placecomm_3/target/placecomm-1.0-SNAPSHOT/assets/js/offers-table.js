let get_offers = document.getElementById('get-offers');

get_offers.addEventListener('click', async (e) => {

    console.log("register yo");

    let response = await fetch("api/placements/get");

    console.log("register yo",response);
    let companies = await response.json();

    let offers_table_body = document.getElementById('offers-table-body');
    offers_table_body.innerHTML='';

    let userMail =sessionStorage.getItem("email");
    console.log(localStorage.getItem(userMail));

    let userDetails = JSON.parse(localStorage.getItem(userMail));
    let selectedCompanies = userDetails.selCompanies;

    let filteredCompanies = companies.filter(function(item){
        return selectedCompanies.indexOf(item['company_id']+"") !== -1;
    });

    let userCGPA = userDetails.cgpa;

    let filterCompaniesByCGPA = filteredCompanies.filter((item)=>item.cgpa<=parseInt(userCGPA))

    console.log(filteredCompanies);

    for (let i = 0; i < filterCompaniesByCGPA.length; i++) {
        offers_table_body.innerHTML += '<tr>'+
            '<td>'+
            '<div class="custom-control custom-checkbox">'+
            '<input class="form-control offers-input" type="checkbox" class="custom-control-input" id="'+filterCompaniesByCGPA[i]['company_id']+'"'+ '>'+
            ' <label class="custom-control-label" for="'+filterCompaniesByCGPA[i]['company_id']+'"'+'>'+filterCompaniesByCGPA[i]['company_id']+'</label>'+
            '</div>'+
            '</td>'+
            '<td>'+filterCompaniesByCGPA[i]['company_name']+'</td>'+
            '<td>'+filterCompaniesByCGPA[i]['ctc']+'</td>'+
            '<td>'+filterCompaniesByCGPA[i]['cgpa']+'</td>'+
            '<td>'+filterCompaniesByCGPA[i]['intake']+'</td>'+
            '</tr>';
    }

});