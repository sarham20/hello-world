{
    let text = "we are so called \"Vikinggs\" ";
    document.getElementById("strings").innerHTML = text;
}
{
    let text = `this is a template-string which "contain" both double and "single" qoutes also 
    multiline 
    strings`;
    document.getElementById("template-strings").innerHTML = text;
}
{
    let firstName = "Muhammad";
    let lastName = "Arham";
    let text = `His Name is ${firstName} ${lastName} and he's 24`;
    document.getElementById("variable-subs").innerHTML = text;
}
{
    let price = 15;
    let VAT = 0.25;
    let total = `The Total is : ${(price * (1 + VAT)).toFixed(2)}`;
    document.getElementById("expressions-string").innerHTML = total;
}
{
    let header = "Template Strings";
    let tags = ["Template Strings", "Java Script", "Es6"];

    let html = `<h2> ${header}</h2><ul>`;

    for (const x of tags) {
        html += `<li> ${x}</li>`;
    }
    html += `</ul>`;
    document.getElementById("ts2").innerHTML = html;
}
{
    let fruits = "Apple, Banana, Kiwi";
    let part = fruits.slice(7, 13);  //the end value like 13 not be included 12 will be the last
    document.getElementById("slice").innerHTML = part;
}
{
    myObj = {
        HouseNo: 641,
        StreetNo: 14,
        Members: 10,
        MyCars: {
            car1: "BMW",
            car2: "GTR",
            car3: "MERCEDES"
        },
        houseDetails: function () {
            return this.HouseNo + "<br>" + this.StreetNo + "<br>" + this.Members + "<br>";
        },

        bestCar: function () {
            return this.MyCars.car1;
        }


    };
    document.getElementById("method").innerHTML = myObj.houseDetails() + "These are my Home details" + " " + "and my favourite Car is" + " " + myObj.bestCar();
}
{
    const numbers = [4, 8, 16, 28, 34, 21];
    let first = numbers.find(myFunction);
    document.getElementById("array").innerHTML = "the  number which is over 19 is " + " " + first;
    function myFunction(value, index, array) {
        return value > 19
    }
}

{
    let result = "";

    result += "Start <br>";

    setTimeout(() => {
        result += "Hello Arham <br>";
        document.getElementById("event").innerHTML = result;
    }, 2000);

    result += "End <br>";

    document.getElementById("event").innerHTML = result;
}