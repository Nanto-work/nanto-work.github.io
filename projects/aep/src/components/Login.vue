<template>
	<transition name="modal">
		<div class="login-wrap">
			<div class="login-container">
				<div class="login__title">PlatformName</div>
				<div class="login__name-wrap">
					<input
						v-model="loginValue"
						class="login__input login__name"
						type="text"
						placeholder="Логин"
					/>
				</div>
				<div class="login__password-wrap">
					<input
						v-model="passwordValue"
						class="login__input login__password"
						placeholder="Пароль"
						:type="passwordFieldType"
					/>
					<span
						class="login__password-show icon_eye"
						@click="switchPasswordVisibility"
						:class="classPasswordEye"
					></span>
				</div>
				<div class="login__error-wrap">
					<span class="login__error">{{errorText}}</span>
				</div>
				<button class="login__button" @click="sendAuth">Вход</button>
			</div>
		</div>
	</transition>
</template>

<script>
	export default{
		data() {
			return{
				loginText:null,
				errorText:null,
				loginValue:"",
				passwordValue:"",
				passwordFieldType:"password"
			}
		},
		computed: {
			classPasswordEye: function () {
    			return {
					"icon_eye-open": this.passwordFieldType === 'text'
    			}
  			}
		},
		methods: {
    		switchPasswordVisibility() {
				  this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
			},
			sendAuth() {
				this.$api
					.post('', 
						{
							"jsonrpc": "2.0",
							"method": "login",
							"id": 1,
							"params": {
								"login": this.loginValue,
								"password": this.passwordValue
							}
						}
					)
					.then(response => {
						this.$emit("closeLoginWin", response.data.result.userId, response.data.result.auth);
					})
					.catch(error => (this.errorText = error));
			}
		}
	}
</script>