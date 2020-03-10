<template>
	<div class="fullhistory">
		<div class="fullhistory__header">
			<span class="fullhistory__title">История</span>
		</div>
		<div class="fullhistory__body">
			<HistoryItem
				:historyItem="historyItem"
			>
				<router-link
					class="fullhistory-item__link icon_cross"
					to="/history"
				></router-link>
			</HistoryItem>
			<div class="fullhistory-box">
				<div class="fullhistory-box-colleft">
					<Info></Info>
					<Calls></Calls>
				</div>
				<Actions></Actions>
			</div>
		</div>
	</div>
</template>

<script>
	import HistoryItem from "../components/HistoryItem";
	import Info from "../components/Info";
	import Calls from "../components/Calls";
	import Actions from "../components/Actions";
	
	export default{
		components: {
			HistoryItem,
			Info,
			Calls,
			Actions
		},
		data() {
			return{
				historyItem:{
					status: "check",
					text: "Проверка cвязи",
				}
			}
		}
	}
</script>