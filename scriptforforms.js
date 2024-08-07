function countrycode(){
    const country = document.getElementsByName("country")[0].value
    let phone = document.getElementsByName("phone")[0]
    
    if(country == "none") {
        phone.value="Выберите страну"
    }else if(country =="uz"){
        phone.value = "+998"
    }else if(country =="kz"){
        phone.value = "+8"
    }else if(country =="ru"){
        phone.value = "+7"
    }
}
function activebutton(){
    let check = document.getElementsByName("check")[0].checked;
    let activeBtn = document.getElementsByName("Btn")[0];
    if(check == true) {
        activeBtn.disabled = false;
    }else {
        activeBtn.disabled = true;
    }

}

function courseform(){
    let course = document.querySelector("#courseSelect").value;
    let totalPrice = document.getElementById("totalPrice")
    let FRONTEND_PRICE = 14000000;
    let PYTHON_PRICE = 12000000;
    let DATA_A_PRICE = 16000000;
    let price = 0;
    if (course == "none") {
        price = 0;
    } else if (course == "Python") {
        price = PYTHON_PRICE;
    } else if (course == "Frontend") {
        price = FRONTEND_PRICE;
    } else if (course == "Data") {
        price = DATA_A_PRICE;    
    }
    totalPrice.value = price
}

function discount() {
    let discountInput = document.getElementById("discountRange");
    let percentageSpan = document.getElementById("discountValue");

    percentageSpan.textContent = `${discountInput.value}%`;

    discountInput.addEventListener('input', function() {
        percentageSpan.textContent = `${this.value}%`;
    });
}

// Вызов функции discount() при загрузке страницы
discount();

