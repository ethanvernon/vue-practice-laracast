Vue.component('practice-component', {

	template: '<li><slot></slot></li>',

	data() {
		return {
			message: 'in a component data has to be function that returns an object'
		}
	}

});

Vue.component('practice-wrapper', {

	template: `
		<div>
			<practice-component v-for="task in tasks">{{task.description}}</practice-component>
		</div>
	`,
	data() {
		return {
			tasks: [
				{description: 'get air mattress', completed: 'yes'},
				{description: 'get food', completed: 'yes'},
				{description: 'clean apartment', completed: 'no'},
				{description: 'get furniture', completed: 'no'},				
			]
		}
	}

})


new Vue({
	el: '#component'
})