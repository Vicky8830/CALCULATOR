let input = document.querySelector(".calculator-screen input");

input.onclick = function (e) {
    e.PreventDefault();
};

input.onkeypress = function (e) {
    e.PreventDefault();
};

const add = (value) => {
    input.value += value;
};

const allClear = () => {
    input.value = "";
};

const removeChar = () => {
    input.value = input.value.slice(0, -1);
};

const calculate = () => {
    if (!input.value) return;
    input.value = eval(input.value);
}