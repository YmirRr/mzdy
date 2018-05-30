<template>
	<div class="form-wrap">
		<form @submit.prevent="login" class="login-form">
			<div class="form-group">
				<input type="text" v-model="username" placeholder="输入手机号">
				<div class="input-bg"></div>
			</div>
			<div class="form-group">
				<input type="password" v-model="password" placeholder="输入密码">
				<div class="input-bg"></div>
			</div>
			<div class="wrong-msg"></div>
			<input type="submit" value="登录" class="submit">
		</form>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				"username" : '',
				"password" : ''
			}
		},
		methods : {
			login(){
				if(this.username==="abc" && this.password==="123"){
					sessionStorage.setItem("username", this.username);
					this.$router.push({path:'/user'})
				}
			}
		},
		created(){
			this.$bus.emit("title", "登录");

		}
	}
</script>
<style lang="scss">
@import "@/style/reset.scss";
@import "@/style/common.scss";
.form-wrap{
	width: 100%;
	height: 100%;
	background: #f6f6f6;
	.login-form{
		overflow: hidden;
		padding: 0 31px;
		.form-group{
			width: 100%;
			margin-top: 30px;
			position: relative;
			input{
				display: block;
				width: 100%;
				height: 34px;
				outline:none;
				border:none;
				background:#f6f6f6;
				padding: 6px 12px;
				color:#555;
				font-size:14px;
			}
			.input-bg{
				position: absolute;
			    top: 20px;
			    height: 12px;
			    width: 100%;
			    border: solid #c4c4c4;
			    border-width: 0 1px 1px 1px;
			}
		}
		.wrong-msg{
				display: block;
			    height: 16px;
			    color: #fe8233;
			    padding-left: 8px;
			}
			.submit{
				display: block;
				margin-left: auto;
				margin-right: auto;
				margin-top: 45px;
				padding: 8px 12px;
				outline: none;
				border:none;
				width: 163px;
				height: 38px;
				background: #fe8233;
				color:#fff;
				font-size:15px;
				border-radius: 38px;
			}
	}
}
	
</style>