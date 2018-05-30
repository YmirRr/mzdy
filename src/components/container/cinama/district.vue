<template>
	<div class="main">
		<div v-for="(item, index) in district" @click="zhankai(index)">
			<div class="title" >
				<router-link :to="'/district/'  + item.pinyin">{{item.name}}</router-link>
			</div>
			<div v-if="current === index" class="content">
				<router-view></router-view>
			</div>
			
		</div>

	</div>
</template>
<script>
	// import dist from "@/components/container/cinama/cinamaItem"
	export default {
		data(){
			return {
				cinemas : [],
				district : [],
				districtName : [""],
				// class1 : "content"
				current : 0
			}
		},
		created(){
			this.$http.get("http://localhost:8080/mz/v4/api/cinema",{
				params : {
					__t : Date.now()
				}
			}).then((res)=>{
				this.cinemas = res.data.data.cinemas;
				for(var i = 0, len1 = this.cinemas.length;i < len1;i++){
					for(var j = 0, len2 = this.districtName.length;j < len2;j++){
						if(!this.districtName.includes(this.cinemas[i].district.name)){
							this.district.push(this.cinemas[i].district);
							this.districtName.push(this.cinemas[i].district.name)
						}
					}
					
				}
				this.district = Array.from(new Set(this.district));
			})
		},
		methods : {
			zhankai(index){
				this.current = index;
				
			}
		}
	}
</script>
<style>
.main{
	background: #fff;
}
.title{
	height: 40px;
    line-height: 40px;
    font-size: 14px;
    padding-left: 16px;
    background: #e1e1e1;
    margin-bottom: 1px;
    color: #636363;
    text-align: left;
}
.content{
	width: 100%;
	height: 400px;
	/*display: none;*/
}
</style>