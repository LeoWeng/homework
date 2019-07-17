var today = new Date();
var hourNow = today.getHours();
var offering;

if (hourNow >= 18) {
	offering = 'Get 5% Off Now!';
}
else if (hourNow >= 12) {
	offering = 'Get 10% Off Now!';
}
else if (hourNow >= 0) {
        offering = 'Get 15% Off Now!';
}

document.write(offering);
