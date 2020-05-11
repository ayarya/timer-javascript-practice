const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let currentOffset = 0;
const timer = new Timer(durationInput, startButton, pauseButton, {
	onStart() {
		console.log('aa');
	},
	onTick() {
		console.log(currentOffset);
		circle.setAttribute('stroke-dashoffset', currentOffset);
		currentOffset = currentOffset - 50;
		console.log(currentOffset);
	},
	onComplete() {
		console.log('asa');
	}
});
