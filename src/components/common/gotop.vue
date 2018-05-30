<template>
	<div v-gd="show">
		<button v-if="show.value" class="btn" v-gotop>到顶部</button>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				show : {
					value : false
				}
			}
		}
	}
</script>
<style lang="scss">
	.btn{
		position:fixed;
		right:15px;
		bottom:15px ;
	}
</style>