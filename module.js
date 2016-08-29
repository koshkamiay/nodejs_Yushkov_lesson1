var a = 0;
function first() {
	a = 1;
	selection();
}
function second() {
	a = 2;
	selection();
}
function third() {
	a = 3;
	selection();
}
function selection() {
	if (a != 0) console.log("Вы выбрали "+a+" функцию");
	else console.log("Вы ничего не выбрали"); 
}
module.exports.first = first;
module.exports.second = second;
module.exports.third = third;