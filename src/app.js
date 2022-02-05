(async() => {
const { hello } = await import("./lib.js");

hello();

console.log('in app!');
})();
