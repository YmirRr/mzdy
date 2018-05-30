<template>
	<div class="container">
		<filmItem v-for="(item, index) in films" :key="index" :type="info.type" :film="item"></filmItem>
		<button>更多{{info.title}}电影</button>
	</div>
</template>
<script>
	import filmItem from "@/components/container/index/filmItem"
	export default {
		props : ["info"],
		data(){
			return {
				films:[]
			}
		},
		created(){
			this.$http.get("http://localhost:8080/mz/v4/api/film/"+this.info.url,{
				__t:Date.now(),
				page:1,
				count:this.info.count
			}).then((res)=>{
				this.films = res.data.data.films;
				console.log(this.films)
				for(var i = 0, len = this.films.length;i < len;i++){
					var t = this.films[i].premiereAt;
					var date = new Date(t),
					M = date.getMonth()+1,
					D = date.getDate();
					this.films[i].premiereAt = M+"月"+D+"日";
				}
			})
		},
		components : {
			filmItem
		}
		
	}
</script>
<style lang="scss">
@import "@/style/reset.scss";
@import "@/style/common.scss";
</style>