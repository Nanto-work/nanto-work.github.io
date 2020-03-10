<template>
	<div
		v-if="presence"
		class="header-presence"
	>
		<span class="presence__title">На месте</span>
		<span
			@click="changePresence"
			class="presence__check"
		></span>
	</div>
	<div
		v-else
		class="header-presence header-presence_no"
	>
		<span class="presence__title">Отошёл</span>
		<span
			@click="changePresence"
			class="presence__check"
		></span>
	</div>
</template>

<script>
	export default{
		props: {
			presence: Boolean
		},
		methods: {
			
			changePresence: function() {
				this.$emit('changePresence');
			}
		}
	}
</script>