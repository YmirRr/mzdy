<template>
	<div v-if="type==='hot'" class="film-wrap" @click="detail(film.id)">
		<div class="img">
			<img :src="film.cover.origin">
		</div>
		<div class="hot-desc">
			<div class="hot-desc-left">
				<div class="film-name">{{film.name}}</div>
				<div class="count">
					{{film.cinemaCount}}家影院上映
					{{film.watchCount}}人购票
				</div>
			</div>
			<div class="hot-desc-right">
				<span class="score">
					{{film.grade}}
				</span>
			</div>
		</div>
	</div>

	<div v-else="type='coming'" class="film-wrap">
		<div class="img">
			<img :src="film.cover.origin" >
		</div>
		<div class="coming-desc">
			<div class="coming-desc-left">
				<div class="film-name">{{film.name}}</div>
			</div>
			<div class="coming-desc-right">
				<div class="time">{{film.premiereAt}}上映</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props:["type","film"],
		data(){
			return {
				
			}
		},
		methods : {
			detail(id){
				this.$router.push({"name":"detail", params :{id}})
			}
		}
	}
</script>
<style lang="scss">
@import "@/style/reset.scss";
@import "@/style/common.scss";
	.img{
		width: 100%;
		height:191.93/$sc+rem;
		img{
			width: 100%;
		}
	}
	
	
	.film-wrap{
		margin: 0 17/$sc+rem 17/$sc+rem 17/$sc+rem;
    	background-color: #f9f9f9;
    	.coming-desc{
    		height: 35/$sc+rem;
			.coming-desc-left{
				float:left;
				padding-top:10/$sc+rem;
    			padding-left:28/$sc+rem;
    			width: 58.33333333%;
    			.film-name{
					height: 15/$sc+rem;
					line-height: 15/$sc+rem;
					font-size:12/$sc+rem;
					text-align:left;
	    		}
			}
			.coming-desc-right{
				float:right;
				padding-top:10/$sc+rem;
    			padding-left:28/$sc+rem;
    			width:41.66666667%;
    			.time{
    				height: 15/$sc+rem;
					line-height: 15/$sc+rem;
					font-size: 10/$sc+rem;
    				color: RGB(245, 162, 125);
    				text-align: left;
    			}
			}
	    		
    	}
    	.hot-desc{
    		height: 50/$sc+rem;
    		.hot-desc-left{
    			float:left;
    			padding-top:13/$sc+rem;
    			padding-left:28/$sc+rem;
    			height: 100%;
    			width: 83.33333333%;
    			.film-name{
    				font-size: 12/$sc+rem;
				    line-height: 15/$sc+rem;
				    text-align: left;
    			}
    			.count{
    				font-size: 8/$sc+rem;
				    line-height: 15/$sc+rem;
				    text-align: left;
				    color:#9a9a9a;
    			}
    		}
    		.hot-desc-right{
    			float:right;
    			width:16.66666667%;
    			span{
    				float:right;
    				display: inline-block;
    				height: 50/$sc+rem;
    				line-height: 50/$sc+rem;
    				margin-right: 15/$sc+rem;
    				font-size:18/$sc+rem;
    				color:#f78360;
    			}
    		}
    	}
	}
</style>