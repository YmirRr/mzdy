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
   						<div class="film-grade">{{item.grade}}</div>
   						<div class="film-name">{{item.name}}</div>
   						<div class="film-intro">{{item.intro}}</div>
   						<div class="film-count">
   							<span class="count-color1">{{item.cinemaCount}}</span>
   							<span class="count-color2">
   								家影院上映&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   							</span>
   							<span class="count-color1">{{item.watchCount}}</span>
   							<span class="count-color2">购票</span>
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
				  iconClass: 'fa fa-spinner fa-spin',
				  duration: -1
				});
				this.loading = true;
				this.$http.get("http://localhost:8080/mz/v4/api/film/now-playing",{
					params : {
						page : this.page,
						count : 7
					}
				}).then((res)=>{
					this.films = this.films.concat(res.data.data.films);
					this.hasMore = Boolean(!(res.data.data.page.total===res.data.data.page.current))
					this.page += this.hasMore ? 1 : 0; 
					this.loading = false;
					t.close();
				})
			}
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
    		.film-grade{
			    float: right;
			    font-size: 16px;
			    line-height: 32px;
			    color: #fc7103;
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
    		.film-count{
    			float:left;
    			line-height: 24px;
			    color: #8e8e8e;
			    font-size: 12px;
			    span{
			    	float:left;
			    }
			    .count-color1{
			    	color:#8aa2bf;
			    }
			    .count-color2{
			    	color:#8e8e8e;
			    }
    		}
    	}
	}
}
</style>