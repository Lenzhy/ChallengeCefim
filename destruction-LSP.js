// a key map of allowed keys
var allowedKeys = {
    37: '1',
    38: '2',
    39: '3',
    40: '4',
    65: 'a',
    66: 'b',
    67:'c',
    68:'d',
    69:'e',
    79:'o'
};
let myCode = ['c','o','d','e'];
let myCodePosition = 0;
document.addEventListener('keydown', function(e) {
    let key = allowedKeys[e.keyCode];
    let requiredKey = myCode[myCodePosition];
    if (key == requiredKey) {
        myCodePosition++;
        if (myCodePosition == myCode.length) {
            boom();
            myCodePosition = 0;
        }
    } else {
        myCodePosition = 0;
    }
});
function boom() {
    alert("BOOM");
}