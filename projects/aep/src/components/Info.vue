<template>
	<div class="info">
		<slot></slot>
		<div class="info-header">
			<span class="info__title">Информация об аварии</span>
		</div>
		<div class="info-body">
			<div class="info-body__row">
				<span class="info-body__desc">Дата аварии</span>
				<span class="info-body__data">{{ alarmFullDate }}</span>
			</div>
			<div class="info-body__row">
				<span class="info-body__desc">Время аварии</span>
				<span class="info-body__data">{{ alarmFullTime }}</span>
			</div>
			<div class="info-body__row">
				<span class="info-body__desc">Тип аварии</span>
				<span class="info-body__data">{{ alarmSetType }}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props: {
			alarmCreated: Number,
			alarmType: String
		},
		data() {
			return{
				alarmFullCreated: null
			}
		},
		computed: {
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