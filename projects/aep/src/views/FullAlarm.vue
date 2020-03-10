<template>
	<div
		v-if="alarm !== null"
		class="fullalarm"
		:class="{ fullalarm_close: showClosedBorder}"
	>
		<InformationItem
			:alarmObject="alarm.object"
		>
			<div class="information__header information__header_fullalarm">Устройство  № {{alarm.deviceId}}</div>
		</InformationItem>
		<div class="fullalarm-box">
			<div class="fullalarm-box-colleft">
				<Info
					:alarmCreated="alarm.created"
					:alarmType="alarm.type"
				>
					<span
						v-if="alarm.state === 'open'"
						class="fullalarm-info__edit icon_edit"
						@click="editInfoShow = true"
					></span>
				</Info>
				<Calls></Calls>
			</div>
			<Actions
				:alarmComments="alarm.comments"
			>
				<button
					v-if="alarm.state === 'new'"
					class="btn btn_take-incident"
					@click="takeAlarm"
				>Взять аварию</button>
			</Actions>
		</div>
		<div
			class="my-actions"
			v-if="alarm.state === 'open'"
		>
			<div class="my-actions-header">
				<span class="my-actions__title">Мои действия</span>
			</div>
			<div class="my-actions-body">
				<div class="my-actions-btnwrap">
					<button
						@click="addTechComment('Уточняю')"
						class="btn"
					>Уточняю</button>
					<span
						class="my-actions-btn-separator"
					></span>
					<button
						@click="addTechComment('Вызвал полицию')"
						class="btn"
					>Вызвал полицию</button>
					<button
						@click="addTechComment('Вызвал МЧС')"
						class="btn"
					>Вызвал МЧС</button>
					<button
						@click="addTechComment('Вызвал скорую')"
						class="btn"
					>Вызвал скорую</button>
				</div>
				<div class="my-actions-commentwrap">
					<textarea-autosize
						class="my-actions-comment"
						placeholder="Комментарии"
						ref="myTextarea"
						v-model="comment"
						:min-height="36"
						:max-height="416"
						rows="1"
						@blur.native="onBlurTextarea"
					/>
					<button
						class="my-actions-comment-btn btn_blue"
						:class="checkMinCommentLength"
						@click="addComment"
					>Подтвердить</button>
				</div>
			</div>
		</div>
		<div
			class="fullalarm-closewrap"
			v-if="alarm.state === 'open'"
		>
			<button
				class="fullalarm-close-btn btn"
				@click="shutIncidentShow = true"

			>Закрыть аварию</button>
		</div>
		<ShutIncident
			v-if="shutIncidentShow"
			@closeShutIncident="shutIncidentShow = false"
			@closeIncident="closeIncident"
		>
		</ShutIncident>
		<EditInfo
			v-if="editInfoShow"
			@closeEditInfo="closeEditInfo"
			@closeEditInfoWithoutChanges="editInfoShow = false;"
			:alarmCreated="alarm.created"
			:alarmType="alarm.type"
		>
		</EditInfo>
	</div>
</template>

<script>
	import InformationItem from "../components/InformationItem";
	import Info from "../components/Info";
	import Calls from "../components/Calls";
	import Actions from "../components/Actions";
	import ShutIncident from "../components/ShutIncident";
	import EditInfo from "../components/EditInfo";
	
	export default{
		components: {
			InformationItem,
			Info,
			Calls,
			Actions,
			ShutIncident,
			EditInfo
		},
		props: [
			'alarmId',
			'auth'
		],
		data() {
			return{
				shutIncidentShow: false,
				editInfoShow: false,
				alarm: null,
				comment: ''
			}
		},
		computed: {
			fullAlarmId: function() {
				return Number(this.alarmId);
			},
			showClosedBorder: function() {
				return (this.alarm.state === 'closed');
			},
			checkMinCommentLength: function() {
				if(this.comment.trim().length >= 3) {
					return "active"
				}
			}
		},
		created() {
			this.getIncident();
		},
		watch: {
			alarmId: function(){
				this.getIncident();
			}
		},
		methods: {
			getIncident() {
				this.$api
					.post('', 
						{
							"jsonrpc": "2.0",
							"method": "incident.get",
							"id": 1,
							"params": {
								"auth": this.auth,
								"id": this.fullAlarmId
							}
						}
					)
					.then(response => {
						this.alarm = response.data.result;
					})
					.catch(error => {console.log(error)});
			},
			takeAlarm: function() {
				if(this.alarm.state === 'new'){
					this.$api
						.post('', 
							{
								"jsonrpc": "2.0",
								"id": 1,
								"method": "incident.open",
								"params": {
									"auth": this.auth,
									"id": this.alarmId
								}
							}
						)
						.then(response => {
							this.alarm = response.data.result;
						})
						.catch(error => {console.log(error)});
				} else {
					return false;
				}
			},
			closeEditInfo(setAlarmType) {
				this.editInfoShow = false;
				this.alarm.type = setAlarmType;

				this.$api
					.post('', 
						{
							"jsonrpc": "2.0",
							"id": 1,
							"method": "incident.set_type",
							"params": {
								"auth": this.auth,
								"id": this.fullAlarmId,
								"type": this.alarm.type  
							}
						}
					)
					.then(response => {
						this.alarm = response.data.result;
					})
					.catch(error => {console.log(error)});
			},
			addTechComment(str) {
				this.sendComment(str);
			},
			addComment() {
				this.sendComment(this.comment);
			},
			sendComment(str) {
				if(this.alarm.state === 'open') {
					this.$api
						.post('', 
							{
								"jsonrpc": "2.0",
								"id": 1,
								"method": "incident.comment",
								"params": {
									"auth": this.auth,
									"id": this.fullAlarmId,
									"comment": str  
								}
							}
						)
						.then(response => {
							this.alarm = response.data.result;
						})
						.catch(error => {console.log(error)});
				} else {
					return false;
				}
			},
			closeIncident(lastComment) {

				this.$api
						.post('', 
							{
								"jsonrpc": "2.0",
								"id": 1,
								"method": "incident.close",
								"params": {
									"auth": this.auth,
									"id": this.fullAlarmId,
									"comment": lastComment  
								}
							}
						)
						.then(response => {
							this.alarm = response.data.result;
						})
						.catch(error => {console.log(error)});

				this.shutIncidentShow = false;
			}
		}
	}
</script>