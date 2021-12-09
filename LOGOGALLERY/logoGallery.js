let memory = {
    zoho : {
        name : "ZOHO",
        ceo : "Sridhar Vembu",
        year : "1996",
        count : 0
    },
    ford : {
        name : "Ford",
        ceo : "Jim Farley",
        year : "1903",
        count : 0
    },
    honda : {
        name : "Honda",
        ceo : "Toshihiro Mibe",
        year : "1948",
        count : 0
    },
    nissan : {
        name : "Nissan",
        ceo : "Makoto Uchida",
        year : "1933",
        count : 0
    },
    volksWagon : {
        name : "volksWagon",
        ceo : "Herbert Diess",
        year : "1937",
        count : 0
    },
    nokia : {
        name : "Nokia",
        ceo : "Pekka Lundmark",
        year : "1865",
        count : 0
    },
    oneplus : {
        name : "One Plus 1+",
        ceo : "Pete Lau",
        year : "2013",
        count : 0
    },
    oppo : {
        name : "Oppo",
        ceo : "Tony Chen",
        year : "2004",
        count : 0
    },
    redmi : {
        name : "Xiaomi Redmi",
        ceo : "Lei Jun",
        year : "2013",
        count : 0
    },
    samsung : {
        name : "Samsung",
        ceo : "Koh Dong-jin",
        year : "1938",
        count : 0
    }

};
var x;
var y;


function displayDetails(str,pt){
    x = pt.clientX;
    y = pt.clientY;
    memory[str].count += 1;
    var parent = document.getElementById("info");
    if(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    var element = document.createElement("div");
    element.setAttribute("id","container");
    var img = document.createElement("img");
    img.setAttribute("src" , str+".jpg");
    img.setAttribute("id" , "img");
    element.appendChild(img);
    var innerContainer = document.createElement("div");
    innerContainer.setAttribute("id","innerContainer");
    var nameOfLogo = document.createElement("h2");
    nameOfLogo.setAttribute("id","name");

    nameOfLogo.innerHTML = memory[str].name;
    var ceoOfLogo = document.createElement("p");
    ceoOfLogo.setAttribute("id","ceo");
    ceoOfLogo.innerHTML ="CEO : " + memory[str].ceo;
    var yearOfLogo = document.createElement("p");
    yearOfLogo.setAttribute("id","year");
    yearOfLogo.innerHTML ="Started in :" + memory[str].year;
    var clickCount = document.createElement("p");
    clickCount.setAttribute("id","clickCount");
    clickCount.innerHTML ="Clicked so far :" + memory[str].count;
    var clickedAt = document.createElement("p");
    clickedAt.setAttribute("id","clickedAt");
    clickedAt.innerHTML ="Clicked from left : " + x + " <br> Clicked from top : " + y;


    parent.appendChild(element);
    innerContainer.appendChild(nameOfLogo);
    innerContainer.appendChild(ceoOfLogo);
    innerContainer.appendChild(yearOfLogo);
    innerContainer.appendChild(clickCount);
    innerContainer.appendChild(clickedAt);
    element.appendChild(innerContainer);


}