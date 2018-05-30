<template>
	<div>
		<Tabbar :flag="flag" :toggle="toggle"></Tabbar>
		<Nav1 :flag="flag" :toggle="toggle"></Nav1>
	</div>
</template>
<script>
	import Tabbar from "@/components/container/header/Tabbar"
	import Nav1 from "@/components/container/header/Nav"
	export default {
		data(){
			return {
				flag: false
			}
		},
		methods:{
			toggle(){
				this.flag = !this.flag;
			}
		},
		components : {
			Tabbar, Nav1
		}
	}
</script>
<style></style>