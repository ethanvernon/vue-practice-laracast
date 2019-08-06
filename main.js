Vue.component('custom-modal', {
	template: `
		<div class="modal is-active">
			<div class="modal-background"></div>
				<div class="modal-content">
					<div class='box'>
						<slot></slot>
					</div>
				</div>
			<button @click="$emit('close')" class="modal-close"></button>
		</div>
	`
});


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
				{ description: 'get air mattress', completed: 'yes' },
				{ description: 'get food', completed: 'yes' },
				{ description: 'clean apartment', completed: 'no' },
				{ description: 'get furniture', completed: 'no' },
			]
		}
	}

});

Vue.component('message', {

	props: ['title', 'body'],

	data() {
		return {
			isVisible: true
		}
	},

	template: `

		<article class="message" v-show='isVisible'>
		  <div class="message-header">
		    {{ title }}
		    <button class='close' @click='hideModal'>x</button>
		  </div>
		  <div class="message-body">
		  	{{ body }}
		  </div>
		</article>

	`,

	methods: {

		hideModal() {
			this.isVisible = false;
		}
	}

});


new Vue({
	el: '#component',

	data: {
		showModal: true
	}
});