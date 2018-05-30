<template>	
   <div>
   		<ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
   			<li v-for="(item, index) in films" class="item-in-films" :key="index">
   				<div class="film-item" @click="detail(item.id)">
   					<div class="film-item-img">
   						<img :src="item.poster.origin" >
   					</div>
   					<div class="film-desc">
   						<div class="film-next-arrow">
   							<i class="fa fa-angle-right" aria-hidden="true"></i>
   						</div>
   						<div class="film-name">{{item.name}}</div>
   						<div class="film-intro">{{item.intro}}</div>
   						<div class="film-premiere-date">
   							{{item.premiereDateAt}}{{item.premiereWeeklyAt}}
   						</div>
   					</div>
   				</div>
   			</li>
   		</ul>
   </div>
</template>
<script>
	import { Toast } from 'mint-ui';
    export default {
        data(){
			return {
				films : [],
				loading : false,
				hasMore : true,
				init : true,
				page : 1
			}
		},
	
		created(){
			this.getData();
		},
		methods : {
			detail(id){
		        this.$router.push({"name":"detail", params :{id}})
		    },
			loadMore(){
				this.getData();
			},
			switchTime(){
				
			},
			getData(){
				if(!this.hasMore){
					Toast({
						message: '没有更多记录啦',
						duration : 2000
					});
					return;
				}
				var t = Toast({
				  message: 'loading',
				  iconClass: 'fa fa-spinner fa-spin fa-2x',
				  duration : 200
				});
				this.loading = true;
				this.$http.get("http://localhost:8080/mz/v4/api/film/coming-soon",{
					params : {
						page : this.page,
						count : 7
					}
				}).then((res)=>{
					var arr = res.data.data.films;
					for(var i = 0, len = arr.length;i < len;i++){
					var t = arr[i].premiereAt,
						date = new Date(t),
						M = date.getMonth() + 1,
						D = date.getDate(),
						W = date.getDay();
					arr[i].premiereDateAt = M + "月" + D + "日";
					arr[i].premiereWeeklyAt = "星期" + W;
				};
					this.films = this.films.concat(res.data.data.films);
					this.hasMore = Boolean(!(res.data.data.page.total===res.data.data.page.current))
					this.page += this.hasMore ? 1 : 0; 
					this.loading = false;
				})
			},

		}
    }
</script>
<style lang="scss">
@import "@/style/reset.scss";
@import "@/style/common.scss";
.item-in-films{
	width: 100%;
	height: 125px;
	.film-item{
		width: 100%;
		height: 100%;
    	padding: 20px 0;
    	border-bottom: dashed 1px #c9c9c9;
    	.film-item-img{
    		float:left;
    		width: 60px;
    		height: 100%;
    		img{
    			width: 100%;
    			height: 100%;
    		}
    	}
    	.film-desc{
    		text-align: left;
    		width: 75%;
    		height: 100%;
    		padding-left: 15px;
    		float:left;
    		.film-next-arrow{
    			float:right;
    			height: 29px;
    			line-height: 29px;
    			color: #c6c6c6;
    			i{
    				font-size:16px;
    				margin-left:1px;
    				margin-top:7px;
    			}
    		}
    		.film-name{
    			float:left;
    			width: 75%;
    			font-size: 16px;
			    line-height: 32px;
			    color: #000;
    		}
    		.film-intro{
    			float:left;
    			height: 24px;
			    line-height: 24px;
			    color: #8e8e8e;
			    font-size: 12px;
			    width: 100%;
    		}
    		.film-premiere-date{
    			float:left;
    			line-height: 24px;
			    color: #ffb375;
			    font-size: 12px;
    			width: 100%;
    		}
    	}
	}
}
</style>