const myCode = "CODE1234";
let testcode="";
function boom(){
    document.getElementById("body").style.visibility = "hidden";
    alert("BOOM")
}
document.addEventListener('keydown', function(e) {
    testcode +=  e.key;
    console.log (testcode);
    if (testcode.includes (myCode)){
        boom()
    }
})
