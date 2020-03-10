<template>
	<div class="information-item">
		<slot></slot>
		<div class="information__body">
			<div class="information__desc">Полное название учреждения</div>
			<div class="information__data">{{ alarmObject.name }}</div>
			<div class="information__desc">Адрес</div>
			<div class="information__data">{{ alarmObject.address }}</div>
			<div class="information__desc">Местоположение устройства</div>
			<div class="information__btnwrap">
				<a href="#" :location="alarmObject.location" class="small-btn information__btn" >На карте</a>
			</div>
			<div class="information__desc">Контакты</div>
			<div class="information__contacts">
				<div
				v-for="contact in alarmObject.contacts"
				class="information__contacts-row">
					<div class="information__contacts-col">
						<div class="information__data">{{contact.name + ", " + contact.title}}</div>
					</div>
					<div class="information__contacts-col">
						<div class="information__data">{{contact.contact}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	
	export default{
		props: {
			alarmObject: Object
		}
	}
</script>