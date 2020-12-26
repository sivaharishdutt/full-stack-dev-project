let offers_form = document.getElementById('offers-form');

let userMail2 = sessionStorage.getItem("email");

let userDetails2 = JSON.parse(localStorage.getItem(userMail2));

if(userDetails2 && userDetails2.selOffer && userDetails2.selOffer.length>0){
    document.getElementById("get-offers").disabled  = true;
}
else{
    document.getElementById("get-offers").disabled  = false;
}

offers_form.addEventListener('submit', async (e) => {
    e.preventDefault();
    e.stopPropagation();

    let rows = document.getElementsByClassName("offers-input");
    let selectedOfferIDs = [];
    for (let i = 0; i < rows.length; i++) {
        if(document.getElementsByClassName("offers-input")[i].checked){
            selectedOfferIDs.push(document.getElementsByClassName("offers-input")[i].id)
        }

    }

    let userDet = JSON.parse(localStorage.getItem(userMail2));

    let companyObj = {
        ...userDet,
        selOffer : selectedOfferIDs
    }

    localStorage.setItem(userMail2,JSON.stringify(companyObj));

    document.getElementById("get-offers").click();
});





