<template>
	<div>
		<div class="cinama-wrap"></div>
	</div>
</template>
<script>
	export default {
		created(){
			this.$http.get("http://localhoust:8080/mz/v4/api/cinema",{
				params : {
					__t : Date.now()
				}
			}).then((res)=>{
			})
		}
		
	}
</script>
<style></style>