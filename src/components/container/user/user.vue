<template>
	<div>用户头像等级<button @click="quit">quit</button></div>
</template>
<script>
	export default {
		methods : {
			quit(){
				sessionStorage.clear();
				this.$router.push({path : '/login'});
			}
		},
		created(){
			this.$bus.emit("title", "我的");
		}
	}
</script>
<style></style>