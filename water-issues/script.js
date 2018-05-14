timeInt = 60;
money = 50;
water = 100;
setInterval(function(){ 
	if(timeInt == 0) {
		timeInt = 60;
		money -= 25;
	};
	if(water < 0) {
		water = 0;
	};
	timeInt -= 1;
	water -= 20;
	document.getElementById("day").innerHTML = "Day End: " + timeInt.toString();
	document.getElementById("water").innerHTML = "Water: " + water.toString() + "L/100L";
	document.getElementById("money").innerHTML = "Money: " + money.toString() + "/50";
}, 1000);
function payTime () {
	money += 1;
};
function waterGet () {
	water = 110;
};