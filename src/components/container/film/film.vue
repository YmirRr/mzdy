<template>
	<div class="film-wrap-f">
		<goTop></goTop>
		<tab bar-active-color="#fe6e00">
	      	<tab-item selected @on-item-click="onItemClick">
	      		<router-link to="/film/now-playing">正在热映</router-link>
	      	</tab-item>
		    <tab-item @on-item-click="onItemClick">
		    	<router-link to="/film/coming-soon">即将上映</router-link>
		  	</tab-item>
	    </tab>
	    <router-view></router-view>
	</div>
</template>
<script>
	import goTop from "@/components/common/gotop"
	import { Tab, TabItem } from 'vux'
	export default {
		components : {
			Tab, TabItem, goTop
		},
		methods : {
			onItemClick(){
				console.log("onItemClick")
			}
		}

	}
</script>
<style lang="less">
@import '~vux/src/styles/reset.less';
.film-wrap-f{
	padding:0 15px;
	background: #fff;
	
	.vux-tab-item{
		font-size:16px!important;
		.router-link-active{
			color:#fe6e00;
		}
		a{
			display: block;
			width: 100%;
			height: 100%;
			color:#333;
			border-bottom: solid #fe6e00 1px;
		}
	}
	
}
</style>