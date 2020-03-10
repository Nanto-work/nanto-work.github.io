<template>
	<div class="history">
		<div class="history__header">
			<span class="history__title">История</span>
			<div class="history__nav">
				<div
					@click="showList = 'all'"
					class="history__nav-item history__nav-item_all"
					:class="{active:showList === 'all'}"
				>Все</div>
				<div
					@click="showList = 'incident'"
					class="history__nav-item history__nav-item_incident"
					:class="{active:showList === 'incident'}"
				>Аварии</div>
				<div
					@click="showList = 'check'"
					class="history__nav-item history__nav-item_check"
					:class="{active:showList === 'check'}"
				>Проверки</div>
			</div>
		</div>
		<div class="history__body">
			<div class="history__desc">
				<div class="history__desc-title history__desc-text">Название</div>
				<div class="history__desc-place history__desc-text">Местонахождение</div>
				<div class="history__desc-date history__desc-text">Дата</div>
				<div class="history__desc-result history__desc-text">Итог</div>
			</div>
			<HistoryItem
				v-for="item in historyList"
				:historyItem="item"
			>
				<router-link
					class="history-item__link icon_arrow-big-right"
					to="/full-history"
				></router-link>
			</HistoryItem>
		</div>
	</div>
</template>

<script>
	import HistoryItem from "../components/HistoryItem";
	
	export default{
		components: {
			HistoryItem
		},
		data() {
			return{
				historyList: [
					{
						status: "check",
						text: "Проверка cвязи",
					},
					{
						status: "check",
						text: "Проверка cвязи",
					},
					{
						status: "incident",
						text: "Авария",
					},
					{
						status: "check",
						text: "Проверка cвязи",
					},
					{
						status: "incident",
						text: "Авария",
					},
					{
						status: "incident",
						text: "Авария",
					},
					{
						status: "incident",
						text: "Авария",
					},
					{
						status: "check",
						text: "Проверка cвязи",
					},
					{
						status: "check",
						text: "Проверка cвязи",
					},
					{
						status: "check",
						text: "Проверка cвязи",
					},
					{
						status: "check",
						text: "Проверка cвязи",
					}
				],
				showList: "all"
			}
		}
	}
</script>