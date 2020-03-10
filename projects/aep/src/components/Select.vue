<template>
	<label
		for="custom-select"
		class="select-wrap"
	>
    	<input
			type="radio"
			name="list"
			value="all"
			class="select__bg"
			id="select__bg"
			@change="changeFloor"
			checked
		/>
    	<input
			type="radio"
			name="list"
			value="not_changed"
			class="select"
			id="custom-select"
		>
		<span class="select__arrow icon_arrow"></span>
    	<label
			class="bg"
			for="select__bg"
		></label>
    	<div class="items">
			<template
				v-for="item in devices"
			>
      			<input
				  type="radio"
				  name="list"
				  :value="item.id"
				  :id="'list' + item.id"
				  @change="changeFloor"
				>
      			<label
				  :for="'list' + item.id"
				>{{item.floor}}</label>
			</template>
      		<span class="select__text">Этаж</span>
    	</div>
	</label>
</template>

<script>

	export default{
		props: ['devices'],
		methods: {
			changeFloor: function(e) {
				var item = e.target.closest("input").value;
				this.$emit('changeFloor', item);
			},
			selectedItem: function(item) {
				if(item === 0) return true;
  			}
		}
	}
</script>