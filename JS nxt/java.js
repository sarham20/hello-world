function startProcess(){
    document.getElementById("demo").innerHTML =  "Start";

    setTimeout(() => {
    document.getElementById("demo").innerHTML = "Hello after 2 seconds";
    },2000);

    document.getElementById("demo").innerHTML ="End";

}
