const sayHi = function ()  {
    console.log('hello');
};
sayHi();

(function () {
    console.log('Hello');
})();

(async function() {
    await fetch('https://www.google.com');
})();