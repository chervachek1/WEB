function validateForm() {
    let name = document.forms["myForm"]["name"].value;
    let phone = document.forms["myForm"]["phone"].value;
    let id_card = document.forms["myForm"]["id_card"].value;
    let faculty = document.forms["myForm"]["faculty"].value;
    let birthday = document.forms["myForm"]["birthday"].value;
    /*name*/
    if (name != null && name.length < 3 )
        {
            alert('Заповніть поле "ПІБ"');
            return false;
        }
    /*phone*/
    if (phone != null && phone.length == 0 )
        {
            alert('Заповніть поле "Телефон"');
            return false;
        }
    if (phone != null && phone.length < 10 )
        {
            alert('Дуже короткий номер телефону');
            return false;
        }
    if(!(/^[0-9-+()s]+z/.test(phone+"z")))
        {
        alert('"Контактний телефон" вказано невірно');
        return false;}
    /*id_card*/
    if (id_card != null && id_card.length == 0 )
        {
            alert('Заповніть поле "ID-card"');
            return false;
        }
    if (id_card != null && id_card.length < 10 )
        {
            alert('"ID-card" вказано невірно');
            return false;
        }
    if(!(/^[0-9A-Z№ s]+z/.test(id_card+"z")))
        {
        alert('"ID-card" вказано невірно');
        return false;}
    /*faculty*/
    if (faculty != null && faculty.length == 0 )
        {
            alert('Заповніть поле "Факультет"');
            return false;
        }
    if(!(/[A-Zs]+z/.test(faculty+"z")))
        {
        alert('"Факультет" вказано невірно');
        return false;}
    /*birthday*/
    if (birthday != null && birthday.length == 0 )
        {
            alert('Заповніть поле "Дата народження"');
            return false;
        }
    if (birthday != null && birthday.length < 10 )
        {
            alert('"Дата народження" вказано невірно');
            return false;
        }
    if(!(/^[0-9.s]+z/.test(birthday+"z")))
        {
        alert('"Дата народження" вказано невірно');
        return false;}
}

var variants = document.getElementsByClassName('variant');
for (var i = 0; i < variants.length; i++) {
    variants[i].onmouseover = function(e) {
        var color = '#'+Math.floor(Math.random()*16777215).toString(16);
        this.style['background-color'] = color;
    }
}


document.getElementById("color").addEventListener("input", updateFirst, false);

function updateFirst(event) {
    var p = document.getElementById("color");
    if (p) {
        p.setAttribute('value', event.target.value);
    }
  }


function color() {
    var myVariant = document.getElementById("variant");
    var color = document.getElementById("color").getAttribute('value');
    myVariant.style.backgroundColor = color;
}

function color2() {
    var color = document.getElementById("color").getAttribute('value');
    var trs = document.getElementsByTagName("tr");
    var arrayLength = trs.length;
    for (var i = 0; i < arrayLength; i++) {
        var tds = trs[i].getElementsByTagName("td");
        var currtd = tds[i];
        currtd.style.backgroundColor = color;
    }
}

