const consolelog = document.querySelector("#consoleLog");

consolelog.addEventListener('click',() => {
    alert('Служит для вывода информации в консоль');
})

const alerteFunction = document.querySelector("#alert");
alerteFunction.addEventListener('click',() => {
    alert('служит для вывода информации во вспывающем окне в браузере');
})
const promptFunction = document.querySelector("#prompt");
promptFunction.addEventListener('click',() => {
    alert('выводит окно для ввода данных');
})