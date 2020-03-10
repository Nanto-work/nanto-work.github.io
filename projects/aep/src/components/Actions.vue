<template>
	<div class="actions">
		<div class="actions-header">
			<span class="actions__title">Действия в аварии</span>
		</div>
		<div class="actions-body" v-bar>
			<div>
				<div
					class="action action_operator"
					v-for="comment in alarmComments"
				>
					<div class="action__person"><span class="operator_btn">ID:&nbsp;{{comment.userId}}</span></div>
					<div class="action__data">{{comment.comment}}</div>
					<div class="action__date">{{commentTime(comment.created)}}</div>
				</div>
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props: ['alarmComments'],
		methods: {
			commentTime(commentCreated) {
				var commentFullCreated = new Date(commentCreated * 1000);
				return ('0' + commentFullCreated.getDate()).slice(-2) + '.' + ('0' + (commentFullCreated.getMonth() + 1)).slice(-2) + '.' + commentFullCreated.getFullYear() + ' ' + ('0' + commentFullCreated.getHours()).slice(-2) + ':' + ('0' + commentFullCreated.getMinutes()).slice(-2) + ':' + ('0' + commentFullCreated.getSeconds()).slice(-2);
			}
		}
	}
</script>