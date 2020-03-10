<template>
	<transition name="modal">
		<div class="shutincident-wrap">
			<div class="shutincident-container">
				<span @click="$emit('closeShutIncident')" class="shutincident_close icon_cross"></span>
				<div class="shutincident-header">
					<div class="shutincident-header__img icon_shut-incident"></div>
					<div class="shutincident-header__title">Закрыть аварию</div>
				</div>
				<div class="shutincident-body">
					<div class="shutincident-body__desc">Заключительный комментарий</div>
					<textarea
						class="shutincident-textarea"
						placeholder="Написать..."
						v-model="lastComment"
					></textarea>
					<div class="shutincident-body-btnwrap">
						<button @click="$emit('closeShutIncident')"	class="small-btn">Отменить</button>
						<button
							class="shutincident-body-btn btn_blue"
							:class="checkMinCommentLength"
							@click="$emit('closeIncident', lastComment)"
						>Подтвердить</button>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	export default{
		data() {
			return{
				lastComment:''
			}
		},
		created() {
        	let that = this;

			document.addEventListener('keyup', function (evt) {
				if (evt.keyCode === 27) {
					that.closeShutIncidentWithoutChanges();
				}
			});
		},
		computed: {
			checkMinCommentLength: function() {
				if(this.lastComment.trim().length >= 3) {
					return "active"
				}
			}
		},
		methods: {
			closeShutIncidentWithoutChanges() {
				this.$emit('closeShutIncident');
			}
		}
	}
</script>