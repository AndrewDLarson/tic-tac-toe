const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const outcome = document.getElementById("outcome");

const addO = (spot) => {
    spot.innerHTML = "O";
};

const addX = (spot) => {
    spot.innerHTML ="X"
};

one.onclick = function() {
    one.innerHTML = "X";
    addO(nine);
    three.onclick = function() {
        addX(three);
        addO(two);
        four.onclick = function() {
            addX(four);
            addO(five);
            six.onclick = function() {
                addX(six);
                addO(eight);
                seven.onclick = function() {
                    addX(seven)
                    outcome.innerHTML = "loser";
                }
            }
        }
    }
}

