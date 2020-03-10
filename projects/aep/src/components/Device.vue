<template>
	<div
		class="device"
		:class="{'device_more': showMore}"
	>
		<div class="device-header">
			<div class="device-header__icon icon_device"></div>
			<div class="device-header__content">
				<div class="device-header__content-top">
					<div class="device-header__content-top-name">Устройство  № 25541831</div>
					<div class="device-header__content-top-desc">3й этаж, Общая комната, правая сторона зала </div>
					<span
						class="device-header__fav icon_fav"
						:class="{'icon_fav-on': changeFav}"
						@click="changeFav = !changeFav"
					></span>
				</div>
				<div class="device-header__content-separator"></div>
				<div class="device-header__content-bottom">
					<div class="device-header__statuswrap">
						<span
							class="device-header__status"
							v-for="device in deviceStatus"
							:class="{'device-header__status_on': device}"
						></span>
					</div>
					<div class="device-header__content-bottom-wrap">
						<div class="device-header__content-bottom-box device-header__content-bottom-box_status">
							<span class="device-header__content-bottom-title">Cостояние</span>
							<span class="device-header__content-bottom-data">На связи</span>
						</div>
						<div class="device-header__content-bottom-box device-header__content-bottom-box_last">
							<span class="device-header__content-bottom-title">Последняя авария</span>
							<span class="device-header__content-bottom-data">22.11.2019</span>
						</div>
						<div class="device-header__content-bottom-box device-header__content-bottom-box_update">
							<span class="device-header__content-bottom-title">Обновлено</span>
							<span class="device-header__content-bottom-data">27.11.2019</span>
						</div>
						<span
							class="device__else icon_arrow-big"
							@click="showMore = !showMore"
						></span>
					</div>
				</div>
			</div>
		</div>
		<div class="device-body">
			<div class="device-body__title">Подробная информация</div>
			<div class="device-body__separator"></div>
			<div class="device-body__content">
				<div class="device-body__row">
					<span class="device-body__row-date">27.11.2019</span>
					<span class="device-body__row-time">18:22:22</span>
					<span class="device-body__row-status">Проверка связи </span>
				</div>
				<div class="device-body__row">
					<span class="device-body__row-date">27.11.2019</span>
					<span class="device-body__row-time">18:22:22</span>
					<span class="device-body__row-status">Проверка связи </span>
				</div>
				<div class="device-body__row">
					<span class="device-body__row-date">27.11.2019</span>
					<span class="device-body__row-time">18:22:22</span>
					<span class="device-body__row-status">Проверка связи </span>
				</div>
				<div class="device-body__row">
					<span class="device-body__row-date">27.11.2019</span>
					<span class="device-body__row-time">18:22:22</span>
					<span class="device-body__row-status">Проверка связи </span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props: ['deviceStatus'],
		data() {
			return{
				showMore: false,
				changeFav:false
			}
		}
	}
</script>