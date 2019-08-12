Vue.component('coupon', {
	template: '<input placeholder="enter your code" @blur="onCouponApplied">',
	methods: {
		onCouponApplied() {
			this.$emit('applied')
		}
	}

})

new Vue({
	el: '#communication',

	data: {
		couponApplied: false
	},

	methods: {
		onCouponApplied() {
			alert('it was applied')
			this.couponApplied = true;
		}
	}
});