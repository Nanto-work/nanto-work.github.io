<template>
	<div id="app">
		<header class="header">
			<div class="header__logo">PlatformName</div>
			<div class="header__content">
				<div class="header__status">
					<span class="header__status-title">Статус:</span>
					<span class="header__status-type">Оператор</span>
				</div>
				<OperatorPresence
					:presence="isPresence"
					@changePresence="changePresence"
				></OperatorPresence>
				<div class="header__id">
					<span class="header__id-title">ID:</span>
					<span class="header__id-number">{{userId}}</span>
				</div>
				<button
					class="header__logout icon_logout"
					@click="logOut"
				></button>
			</div>
		</header>
		<div class="wrapper">
			<Navigation></Navigation>
			<router-view
				:auth="auth"
			></router-view>
			<div class="alarms">
				<div class="alarms__header">
					<span class="alarms__logo icon_alarms"></span>
					<span class="alarms__title">Алармы</span>
				</div>
				<div class="alarms__wrap">
					<Alarm
						v-for="alarm in alarms"
						:key="alarm.id"
						:alarmStatus="alarm.state"
						:alarmName="alarm.object.name"
						:alarmCreated="alarm.created"
						:alarmClosed="alarm.closed"
						:alarmType="alarm.type"
						:alarmId="alarm.id"
						:auth="auth"
					></Alarm>
				</div>
			</div>
		</div>
		<Login v-if="auth === null" @closeLoginWin="closeLoginWin">
		</Login>
	</div>
</template>

<script>
	import OperatorPresence from "./components/OperatorPresence";
	import Navigation from "./components/Navigation";
	import Alarm from "./components/Alarm";
	import Login from "./components/Login";

	export default{
		components: {
			OperatorPresence,
			Navigation,
			Alarm,
			Login
		},
		data() {
			return{
				isPresence: true,
				alarms:null,
				userId: null,
				auth: null
			}
		},
		methods: {
			changePresence: function() {
				this.isPresence = !this.isPresence;
			},
			closeLoginWin(userId, auth) {
				this.auth = auth;
				this.userId = userId;
				
				this.startTimer();
			},
			getIncidentList() {	
				this.$api
					.post('', 
						{
							"jsonrpc": "2.0",
							"method": "incident.list",
							"id": 1,
							"params": {
								"auth": this.auth
							}
						}
					)
					.then(response => {
						this.alarms = response.data.result;
					})
					.catch(error => {console.log(error)});
			},
			logOut: function() {
				this.$api
					.post('', 
						{
							"jsonrpc": "2.0",
							"method": "logout",
							"id": 1,
							"params": {
								"auth": this.auth
							}
						}
					)
					.then(response => {
						this.stopTimer();
						this.auth = null;
						//this.auth = response.data.result;
						this.userId = null;
						this.showLoginWin = true;
					})
					.catch(error => {console.log(error)});
			},
			stopTimer () {
				if(this.interval) {
					window.clearInterval(this.interval)
				}
			},
			startTimer () {
				this.stopTimer();
				this.interval = window.setInterval(() => {
					this.getIncidentList()
				}, 3000)
			}
		},
		beforeDestroy () {
			this.stopTimer()
		}
	}
</script>