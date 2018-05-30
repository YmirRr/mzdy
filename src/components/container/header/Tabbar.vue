<template>
	<div class="tabbar">
		<div class="left">
			<i class="fa fa-bars bar" @click="toggle"></i>
			<div class="tabbar-title">{{title}}</div>
		</div>
	</div>
</template>
<script>
	export default {
		props : ["flag", "toggle"],
		data(){
			return {
				title : "卖座电影"
			}
		},
		mounted(){
			//根据当前路由显示标题
			switch(this.$route.name){
				case 'Index':this.title="卖座电影";break;
				case 'detail':this.title="影片详情";break;
			}
			this.$router.beforeEach((to, from, next)=>{
				switch(to.name){
					case 'Index':this.title="卖座电影";break;
					case 'detail':this.title="影片详情";break;
				}
				next();
			})
			this.$bus.on("filmname",(title)=>{
				this.title = title;
			})
			this.$bus.on("title",(title)=>{
				this.title = title;
			})
		}
	}
</script>
<style lang="scss">
@import "@/style/reset.scss";
@import "@/style/common.scss";
.tabbar{
	z-index:30;
	position: fixed;
	top: 0;
	width: 100%;
	height: 50/$sc+rem;
	background:#282828;
	.left{
		width: 70%;
		height: 50/$sc+rem;
		float:left;
		color:#fff;
	}
	.bar{
		float:left;
		display: inline-block;
		width:48/$sc+rem;
		text-align: center;
		height:50/$sc+rem;
		line-height: 50/$sc+rem;
		border-right: 1px solid #222;
	    box-shadow: 1px 0 1px #363636;
	    color: #999;
	}
	.tabbar-title{
		float:left;		
		color:#efefef;
		font-weight: normal;
		height:50/$sc+rem;
		line-height: 50/$sc+rem;
		padding:0 14/$sc+rem;
	}
	h3{
		color:white
	}
}
</style>