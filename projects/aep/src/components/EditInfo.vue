<template>
	<transition name="modal">
		<div class="editinfo-wrap">
			<div class="editinfo-container">
				<div class="editinfo-header">
					<div class="editinfo-header__img icon_edit-info"></div>
					<div class="editinfo-header__title">Информация об аварии</div>
				</div>
				<div class="editinfo-body">
					<div class="editinfo-row">
						<div class="editinfo-inputwrap">
							<div class="editinfo-inputwrap__desc">Время аварии</div>
							<span class="editinfo-text">{{ alarmFullDate }}</span>
						</div>
						<div class="editinfo-inputwrap">
							<div class="editinfo-inputwrap__desc">Дата аварии</div>
							<span class="editinfo-text">{{ alarmFullTime }}</span>
						</div>
					</div>
					<div class="editinfo-inputwrap">
						<div class="editinfo-inputwrap__desc">Тип аварии</div>
						<input
							v-model="setAlarmType"
							v-on:keyup.enter="changeType"
							class="editinfo-input"
							type="text"
							placeholder="Написать ..."
						/>
					</div>
					<div class="editinfo-body-brtnwrap">
						<button @click="changeType"	class="btn_blue">Подтвердить</button>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	export default{
		props: {
			alarmCreated: Number,
			alarmType: String
		},
		data() {
			return{
				alarmFullCreated: null,
				setAlarmType: undefined
			}
		},
		created() {
        	let that = this;

			document.addEventListener('keyup', function (evt) {
				if (evt.keyCode === 27) {
					that.closeEditInfoWithoutChanges();
				}
			});
    	},
		computed: {
			alarmFullDate: function() {
				this.alarmFullCreated = new Date(this.alarmCreated * 1000);
				return ('0' + this.alarmFullCreated.getDate()).slice(-2) + '.' + ('0' + (this.alarmFullCreated.getMonth() + 1)).slice(-2) + '.' + this.alarmFullCreated.getFullYear();
			},
			alarmFullTime: function() {
				return (this.alarmFullCreated.getHours() + ':' + this.alarmFullCreated.getMinutes() + ':' + this.alarmFullCreated.getSeconds());
			},
			alarmSetType: function() {
				if(this.alarmType === undefined) {
					return "Неизвестно"
				} else {
					return this.alarmType					
				}
			}
		},
		methods: {
			changeType() {
				this.$emit('closeEditInfo', this.setAlarmType);
			},
			closeEditInfoWithoutChanges() {
				this.$emit('closeEditInfoWithoutChanges');
			}
		}
	}
</script>