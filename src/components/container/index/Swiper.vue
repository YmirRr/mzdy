<template>
	<div>
		<swiper auto :aspect-ratio="211/375">
      		<swiper-item class="swiper-demo-img" v-for="(item, index) in list" :key="index" @click="detail(item.id)">
      			<img :src="item.imageUrl" style="width:100%;height:100%">
      		</swiper-item>
    	</swiper>
	</div>
</template>
<script>
	import { Swiper,SwiperItem } from 'vux'
	export default {
		data(){
			return {
				demo01_index : 0,
				list : []
			}
		},
		components: {
			Swiper,SwiperItem
		},
		created(){
			this.$http.get("http://localhost:8080/mz/v4/api/billboard/home",{
				__t:Date.now(),
			}).then((res)=>{
				this.list = res.data.data.billboards;
			})
		},
		methods : {
			detail(id){
				this.$router.push({"name":"detail", params :{id}})
			}
		}
	}

</script>
<style lang="less">
@import '~vux/src/styles/reset.less';
.vux-indicator{
	display: none;
}
.vux-slider{
	margin-bottom: 14px;
}
</style>