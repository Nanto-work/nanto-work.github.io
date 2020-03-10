<template>
	<ul id="nav" class="nav">
		<li class="nav__item">
			<div
				class="nav__item-wrap"
				@click="changeNavActive"
			>
				<span class="nav__item-icon icon_general"></span>
				<span class="nav__item-title">Общее</span>
			</div>
		</li>
		<li class="nav__item">
			<div
				class="nav__item-wrap"
				@click="changeNavActive"
			>
				<span class="nav__item-icon icon_objects"></span>
				<span class="nav__item-title">Объекты</span>
			</div>
			<ul class="sub-nav">
				<li class="sub-nav__item">
					<div
						class="sub-nav__item-wrap"
						@click="changeNavActive"
					>
						<span class="sub-nav__item-icon icon_connection"></span>
						<span class="sub-nav__item-title">Школа №1</span>
					</div>
					<ul class="subnav-list">
						<li
							class="subnav-list__item"
							@click="changeNavActive"
						>
							<router-link to="/information" class="subnav-list__item-link">Информация</router-link>
						</li>
						<li
							class="subnav-list__item unactive"
							@click="changeNavActive"
						>
							<router-link to="/plan" class="subnav-list__item-link">План здания</router-link>
						</li>
						<li
							class="subnav-list__item"
							@click="changeNavActive"
						>
							<router-link to="/devices" class="subnav-list__item-link">Устройства</router-link>
						</li>
						<li
							class="subnav-list__item"
							@click="changeNavActive"
						>
							<router-link to="/history" class="subnav-list__item-link">История</router-link>
						</li>
					</ul>
				</li>
				<li class="sub-nav__item">
					<div
						class="sub-nav__item-wrap"
						@click="changeNavActive"
					>
						<span class="sub-nav__item-icon icon_connection"></span>
						<span class="sub-nav__item-title">Школа №2</span>
					</div>
					<ul class="subnav-list">
						<li
							class="subnav-list__item"
							@click="changeNavActive"
						>
							<router-link to="/information" class="subnav-list__item-link">Информация</router-link>
						</li>
						<li
							class="subnav-list__item unactive"
							@click="changeNavActive"
						>
							<router-link to="/plan" class="subnav-list__item-link">План здания</router-link>
						</li>
						<li
							class="subnav-list__item"
							@click="changeNavActive"
						>
							<router-link to="/devices" class="subnav-list__item-link">Устройства</router-link>
						</li>
						<li
							class="subnav-list__item"
							@click="changeNavActive"
						>
							<router-link to="/history" class="subnav-list__item-link">История</router-link>
						</li>
					</ul>
				</li>
				<li class="sub-nav__item">
					<div
						class="sub-nav__item-wrap"
						@click="changeNavActive"
					>
						<span class="sub-nav__item-icon icon_connection"></span>
						<span class="sub-nav__item-title">Школа №3</span>
					</div>
					<ul class="subnav-list">
						<li
							class="subnav-list__item"
							@click="changeNavActive"
						>
							<router-link to="/information" class="subnav-list__item-link">Информация</router-link>
						</li>
						<li
							class="subnav-list__item unactive"
							@click="changeNavActive"
						>
							<router-link to="/plan" class="subnav-list__item-link">План здания</router-link>
						</li>
						<li
							class="subnav-list__item"
							@click="changeNavActive"
						>
							<router-link to="/devices" class="subnav-list__item-link">Устройства</router-link>
						</li>
						<li
							class="subnav-list__item"
							@click="changeNavActive"
						>
							<router-link to="/history" class="subnav-list__item-link">История</router-link>
						</li>
					</ul>
				</li>
				<li class="sub-nav__item">
					<div
						class="sub-nav__item-wrap"
						@click="changeNavActive"
					>
						<span class="sub-nav__item-icon icon_connection"></span>
						<span class="sub-nav__item-title">Школа №4</span>
					</div>
					<ul class="subnav-list">
						<li
							class="subnav-list__item"
							@click="changeNavActive"
						>
							<router-link to="/information" class="subnav-list__item-link">Информация</router-link>
						</li>
						<li
							class="subnav-list__item unactive"
							@click="changeNavActive"
						>
							<router-link to="/plan" class="subnav-list__item-link">План здания</router-link>
						</li>
						<li
							class="subnav-list__item"
							@click="changeNavActive"
						>
							<router-link to="/devices" class="subnav-list__item-link">Устройства</router-link>
						</li>
						<li
							class="subnav-list__item"
							@click="changeNavActive"
						>
							<router-link to="/history" class="subnav-list__item-link">История</router-link>
						</li>
					</ul>
				</li>
				<li class="sub-nav__item">
					<div
						class="sub-nav__item-wrap"
						@click="changeNavActive"
					>
						<span class="sub-nav__item-icon icon_connection"></span>
						<span class="sub-nav__item-title">Школа №5</span>
					</div>
					<ul class="subnav-list">
						<li
							class="subnav-list__item"
							@click="changeNavActive"
						>
							<router-link to="/information" class="subnav-list__item-link">Информация</router-link>
						</li>
						<li
							class="subnav-list__item unactive"
							@click="changeNavActive"
						>
							<router-link to="/plan" class="subnav-list__item-link">План здания</router-link>
						</li>
						<li
							class="subnav-list__item"
							@click="changeNavActive"
						>
							<router-link to="/devices" class="subnav-list__item-link">Устройства</router-link>
						</li>
						<li
							class="subnav-list__item"
							@click="changeNavActive"
						>
							<router-link to="/history" class="subnav-list__item-link">История</router-link>
						</li>
					</ul>
				</li>
				<li class="sub-nav__item">
					<div
						class="sub-nav__item-wrap"
						@click="changeNavActive"
					>
						<span class="sub-nav__item-icon icon_connection"></span>
						<span class="sub-nav__item-title">Школа №6</span>
					</div>
					<ul class="subnav-list">
						<li
							class="subnav-list__item"
							@click="changeNavActive"
						>
							<router-link to="/information" class="subnav-list__item-link">Информация</router-link>
						</li>
						<li
							class="subnav-list__item unactive"
							@click="changeNavActive"
						>
							<router-link to="/plan" class="subnav-list__item-link">План здания</router-link>
						</li>
						<li
							class="subnav-list__item"
							@click="changeNavActive"
						>
							<router-link to="/devices" class="subnav-list__item-link">Устройства</router-link>
						</li>
						<li
							class="subnav-list__item"
							@click="changeNavActive"
						>
							<router-link to="/history" class="subnav-list__item-link">История</router-link>
						</li>
					</ul>
				</li>
			</ul>
		</li>
		<li class="nav__item unactive">
			<div
				class="nav__item-wrap"
				@click="changeNavActive"
			>
				<span class="nav__item-icon icon_devices"></span>
				<span class="nav__item-title">Девайсы</span>
			</div>
		</li>
	</ul>
</template>

<script>
	export default{
				
		methods: {
			
			changeNavActive: function(e) {
				let nav = document.getElementById("nav"),
					activeEl = nav.querySelectorAll(".active"),
					el = e.target;
				
				for(let i = 0; i < activeEl.length; i++) {
					activeEl[i].classList.remove("active");
				}
				
				el.closest(".nav__item").classList.add("active");
				if(el.closest(".sub-nav__item") != null){
					el.closest(".sub-nav__item").classList.add("active");	
				}
				if(el.closest(".subnav-list__item") != null){
					el.closest(".subnav-list__item").classList.add("active");	
				}
			}
		}
	}
</script>