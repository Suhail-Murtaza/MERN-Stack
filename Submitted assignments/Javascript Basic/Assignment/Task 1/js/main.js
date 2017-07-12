function convertFunction() {
    var string = "A quick brown fox jumps over the lazy dog";
    var arr = string.split(" ");
    document.getElementById("paragraph").innerHTML = "[''"+arr.join("'',''")+"'']";

}
