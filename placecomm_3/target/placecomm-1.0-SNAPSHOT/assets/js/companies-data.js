let get_companies = document.getElementById('get-comp');

get_companies.addEventListener('click', async (e) => {

    console.log("register yo");

    let response = await fetch("api/placements/get");

    console.log("register yo",response);
    let companies = await response.json();

    let companies_body = document.getElementById('table-body');
    companies_body.innerHTML='';

    for (let i = 0; i < companies.length; i++) {
        companies_body.innerHTML += '<tr>'+
            '<td>'+
            '<div class="custom-control custom-checkbox">'+
            '<input class="form-control companies-input" type="checkbox" class="custom-control-input" id="'+companies[i]['company_id']+'"'+ '>'+
            ' <label class="custom-control-label" for="'+companies[i]['company_id']+'"'+'>'+companies[i]['company_id']+'</label>'+
            '</div>'+
            '</td>'+
            '<td>'+companies[i]['company_name']+'</td>'+
            '<td>'+companies[i]['ctc']+'</td>'+
            '<td>'+companies[i]['cgpa']+'</td>'+
        '<td>'+companies[i]['intake']+'</td>'+
            '</tr>';
    }

});