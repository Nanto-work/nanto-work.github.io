<template>
	<router-link
		:to="{name: 'full-alarm', params: {alarmId: alarmId}}"
		class="alarm"
		:class="alarmStatusClass"
		:style="alarmSorted"
	>
		<div class="alarm__header">
			<span class="alarm__title">{{ alarmName }}</span>
			<span class="alarm__status">{{ alarmStatusText }}</span>
		</div>
		<div class="alarm__body">
			<div class="alarm__row">
				<span class="alarm__row-title">Дата аварии</span>
				<span class="alarm__row-data">{{ alarmFullDate }}</span>
			</div>
			<div class="alarm__row">
				<span class="alarm__row-title">Время аварии </span>
				<span class="alarm__row-data">{{ alarmFullTime }}</span>
			</div>
			<div class="alarm__row">
				<span class="alarm__row-title">Тип аварии</span>
				<span class="alarm__row-data">{{ alarmSetType }}</span>
			</div>
		</div>
	</router-link>
</template>

<script>
	export default{
		props: {
			auth: String,
			alarmStatus: String,
			alarmName: String,
			alarmCreated: Number,
			alarmClosed: Number,
			alarmType: String,
			alarmId: Number
		},
		data() {
			return{
				alarmFullCreated: null
			}
		},
		computed: {
			alarmStatusText: function () {

				switch(this.alarmStatus) {
  					case "new":
						return "Новый";
					case "open":
						return "Открыт";
					case "deferred":
						return "Обработка";
					case "closed":
						return "Закрыт";
				}
			},
			alarmStatusClass: function () {

				switch(this.alarmStatus) {
  					case "new":
						return "alarm_new";
					case "open":
						return "alarm_open";
					case "deferred":
						return "alarm_deferred";
					case "closed":
						return "alarm_closed";
				}
			},
			alarmSorted: function () { // css magic!

				switch(this.alarmStatus) {
					case "open":
						return {order:(-1500000000 - (2147483647 - this.alarmCreated))}
  					case "new":
						return {order:(-750000000 - (2147483647 - this.alarmCreated))}
					case "deferred":
						return {order:(0 - (2147483647 - this.alarmCreated))}
					case "closed":
						return {order:(2147483647 - this.alarmClosed)}
				}
			},
			alarmFullDate: function() {
				this.alarmFullCreated = new Date(this.alarmCreated * 1000);
				return ('0' + this.alarmFullCreated.getDate()).slice(-2) + '.' + ('0' + (this.alarmFullCreated.getMonth() + 1)).slice(-2) + '.' + this.alarmFullCreated.getFullYear();
			},
			alarmFullTime: function() {
				return ('0' + this.alarmFullCreated.getHours()).slice(-2) + ':' + ('0' + this.alarmFullCreated.getMinutes()).slice(-2) + ':' + ('0' + this.alarmFullCreated.getSeconds()).slice(-2);
			},
			alarmSetType: function() {
				if(this.alarmType === undefined) {
					return "Неизвестно"
				} else {
					return this.alarmType					
				}
			}
		}
	}
</script>