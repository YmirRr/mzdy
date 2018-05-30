<template>
	<div class="nav_">
		<transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
			<ul class="navlist" v-if="flag">
				<li v-for="item in menu" @click="toggle"><router-link :to="item.path" :key="item.id">{{item.title}}</router-link></li>
			</ul>
		</transition>
		<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
			<div class="mask" v-if="flag" @click="toggle"></div>
		</transition>
	</div>
</template>
<script>
export default {
	props:["flag", "toggle"],
	data(){
		return {
			menu : [
				{
					id : 1,
					title : "首页",
					path:"/index"
				}, {
					id : 2,
					title : "影片",
					path:"/film"
				}, {
					id : 3,
					title : "影院",
					path:"/district"
				}, {
					id : 4,
					title : "我的",
					path:"/user"
				}
			]
		}
	}
}
</script>
<style lang="scss">
@import "@/style/reset.scss";
@import "@/style/common.scss";
.navlist{
	z-index:25;
	border-top: 1px solid #222;
    box-shadow: 0 1px 1px #363636 inset;
    background: #282828;
    position: absolute;
    display: block;
    top: 50/$sc+rem;
    right: 110/$sc+rem;
    bottom: 0;
    left: 0;
    line-height: 50/$sc+rem;
    a{
    	color:#9a9a9a;
    }
}
.mask{
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.8);
	position: absolute;
	top:0;
	left:0;
	z-index:20;
}
</style>