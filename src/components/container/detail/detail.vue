<template>
	<div>
		<div class="film-cover">
			<img :src="film.cover.origin" style="width:100%;">
		</div>
		<div class="film-intro">
			<div class="film-detail">
				影片简介
			</div>
			<div class="film-word">导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：{{film.director}}</div>
			<div class="film-word">主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：<span v-for="(item, index) in actors"><span :class="'I' + index">&nbsp;|&nbsp;</span>{{item.name}}</span></div>
			<div class="film-word">地区语言：{{film.nation}}({{film.language}})</div>
			<div class="film-word">类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：{{film.category}}</div>
			<div class="film-word">上映日期：{{film.premiereAt}}上映</div>
			<div class="film-word-d">{{film.synopsis}}</div>
		</div>
		<div class="operation">
			<button>立即购票</button>
		</div>
	</div>
</template>
<script>
	export default {
		props : ["id"],
		data(){
			return {
				film:{
					cover:{}
				},
				actors : []
			}
		},
		created(){
			this.$http.get("http://localhost:8080/mz/v4/api/film/" + this.id,{
				__t : Date.now()
			}).then((res)=>{
				this.film = res.data.data.film;
				this.$bus.emit("filmname", this.film.name);
				console.log(this.film)
				this.actors = this.film.actors;
				var t = this.film.premiereAt;
					var date = new Date(t),
					M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) ,
					D = date.getDate();
					this.film.premiereAt = M+"月"+D+"日";
			})
		}
	}
</script>
<style lang="scss">
@import "@/style/reset.scss";
@import "@/style/common.scss";
.film-intro{
	.I0{
		display:none;
		}
	width: 100%;
	.film-detail{
		margin: 16px auto;
	    border-left: 16px solid RGB(228, 200, 156);
	    font-size: 16px;
	    padding-left: 4px;
	    text-align: left;
	    color:#333;
		}
		.film-word{
			font-size:12px;
			height: 18px;
		    overflow: hidden;
		    margin-bottom: 10px;
		    padding-left: 20px;
		    text-align: left;
		    color:#333;
		}
		
		.film-word-d{
			text-overflow: ellipsis;
		    margin-bottom: 80px;
		    padding-left: 20px;
		    padding-right: 20px;
		    font-size:12px;
		    text-align: left;
		    color:#333;
		}
	}
	.operation{
	   	position: fixed;
	    left: 0;
	    bottom: 20px;
	    width: 100%;
	    text-align: center;
	    button{
    	    font-size: 14px;
		    min-width: 156px;
		    height: 36px;
		    line-height: 36px;
		    border: none;
		    background-color: #fe8233;
		    padding: 0;
		    margin: 0;
		    border-radius: 18px;
		    color: #fff;
	    }
	}
</style>