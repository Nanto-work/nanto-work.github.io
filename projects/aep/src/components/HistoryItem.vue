<template>
	<div
		class="history-item"
		:class="'history-item_' + historyItem.status"
	>
		<div class="history-item__img-wrap">
			<div class="history-item__img"></div>
		</div>
		<div class="history-item__box">
			<div class="history-item__title-wrap">
				<div class="history-item__title">Название Устройства</div>
			</div>
			<div class="history-item__place-wrap">
				<div class="history-item__place">3й этаж</div>
				<div class="history-item__place">Общая комната, правая сторона зала</div>
			</div>
			<div class="history-item__date-wrap">
				<div class="history-item__date">26.11.2019</div>
				<div class="history-item__date">18:22:22</div>
			</div>
			<div class="history-item__result-wrap">
				<div class="history-item__result">{{historyItem.text}}</div>
			</div>
		</div>
		<slot></slot>
	</div>
</template>

<script>
	export default{
		props: ['historyItem']
	}
</script>