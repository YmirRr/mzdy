<template>
	<div class="main">
		<Swiper></Swiper>
		<films v-for="item in list" :key="item.id" :info="item.info"></films>
	</div>
</template>
<script>
	import films from "@/components/container/index/Films"
	import Swiper from "@/components/container/index/Swiper"	
	export default {
		data(){
			return {
				list : [
					{id : 1, info : {url : 'now-playing' ,type : 'hot',title : "热映", count : 5}},
					{id : 2, info : {url : 'coming-soon' ,type : 'comming',title : "即将上映", count : 3}}
				]
			}
		},
		components : {
			films, Swiper
		}
	}
</script>
<style lang="scss">
@import "@/style/reset.scss";
@import "@/style/common.scss";
	.main{
		overflow-y: scroll;
	}
</style>