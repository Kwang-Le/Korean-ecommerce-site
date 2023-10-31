<script>
export default {
	data() {
		return {
			self: this,
			minutes: 5,
			seconds: 60,
			miliseconds: 99,
		}
	},
	mounted() {
		self = this.$data
		console.log(this.seconds)
		var timer = 60 * 5;
		setInterval(() => {
			self.minutes = parseInt(self.minutes, 10)
			self.seconds = parseInt(self.seconds, 10)
			self.miliseconds = parseInt(self.miliseconds, 10)

			self.miliseconds -= 10
			if (self.miliseconds <= 0){
				self.miliseconds = 99
				self.seconds -= 1
			}

			if (self.seconds <= 0) {
				self.seconds = 60
				self.minutes -= 1
			}

			self.minutes = self.minutes < 10 ? "0" + self.minutes : self.minutes;
			self.seconds = self.seconds < 10 ? "0" + self.seconds : self.seconds;
			self.miliseconds = self.miliseconds < 10 ? "0" + self.miliseconds : self.miliseconds;

			console.log(self.seconds)
		}, 100);
		// this.startTimer()
	},
}
</script>
<template>
	<div class="checkout-time px-2 btn-theme d-flex justify-content-between">
		<span><i class="bi bi-alarm-fill"></i>한시 이벤트</span>
		<div class="">
			<span>상품은 </span>
			<span class="timer-span"><i class="timer-i">{{ this.minutes }}</i>:<i class="timer-i">{{ this.seconds
			}}</i>:<i class="timer-i">{{ this.miliseconds }}</i></span>
			<span> 후 원가로 회복!</span>
		</div>
	</div>
</template>

<style scoped>
.checkout-time {
	flex-flow: row wrap;
	padding: 3px 0;
	line-height: normal;
	height: fit-content;
	margin-bottom: 10px;
}

.btn-theme {
	background-color: #ec4f2a;
	color: #fff;
}
.timer-i{
	padding: 0px 5px;
    background-color: white;
    color: #ec4f2a;
    border-radius: 6px;
}
</style>