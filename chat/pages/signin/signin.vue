<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-right" @click="toSingnUp">
				<view class="text">注册</view>
			</view>
		</view>
		<view class="logo">
			<image src="../../static/images/signin/logo.png" mode="aspectFill"></image>
		</view>
		<view class="main">
			<view class="title">登录</view>
			<view class="slogan">您好，欢迎来到 yike！ </view>
			<view class="inputs">
				<input type="text" placeholder="用户名/邮箱" class="user" v-model="user" placeholder-style="color:#aaa; font-weight: 400;"/>
				<input type="password" placeholder="密码"  class="psw" v-model="psw" placeholder-style="color:#aaa; font-weight: 400;"/>
			</view>
			<view class="tips">输入用户名或密码错误！</view>
		</view>
		<view class="submit" @click="login">登录</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: '',
				psw: ''
			};
		},
		methods: {
			//  跳转到注册页面
			toSingnUp() {
				uni.navigateTo({
					url: '../signup/signup'
				})
			},
			
			//  登录提交
			login() {
				// if(this.user && this.psw) {
				// 	console.log("登陆成功");
				// } 
				uni.request({
					url: 'http://192.168.101.23:3000/test',
					data: '',
					method: 'GET',
					success: (res) => {
						console.log(res);
					},
					fail: (err) => {
						console.log(err);
					}
				})
			}
			
		}
	}
</script>

<style lang="scss">
	@import  '../../commons/css/mycss.scss';
	
	.top-bar {
		display: flex;
		justify-content: flex-end;
	}
	
	
	.logo {
		padding-top: 128rpx;
		width: 194rpx;
		height: 92rpx;
		margin: 0 auto;
		text-align: center;
		image {
			width: 100%;
			height: 100%;
		}
	}
	
	.main {
		padding: 54rpx $uni-spacing-row-lg 120rpx;
		// width: 100%;
		// box-sizing: border-box;
		.title {
			font-size: 44rpx;
			font-weight: 600;
			color: $uni-text-color;
			line-height: 80rpx;
		}
		.slogan {
			font-size: 32rpx;
			color: $uni-text-color-grey;
			line-height: 56rpx;
		}
		.inputs {
			padding-top: 8rpx;
			input {
				padding-top: 40rpx;
				height: 88rpx;
				font-size: $uni-font-size-lg;
				font-weight: 500;
				color: $uni-text-color;
				line-height: 88rpx;
				border-bottom: 1px solid $uni-border-color;
			}
		}
		.tips {
			float: left;
			font-size: $uni-font-size-lg;
			color: $uni-color-warning;
			line-height: 56rpx;
		}
	}
	
	.submit {
		margin: 0 auto;
		width: 520rpx;
		height: 96rpx;
		background-color: $uni-color-primary;
		box-shadow: 0px 50rpx 32rpx -36rpx rgba(255, 228, 49, 0.4);
		border-radius: 48rpx;
		font-size: $uni-font-size-lg;
		font-weight: 600;
		color: $uni-text-color;
		line-height: 96rpx;
		text-align: center;
	}

</style>
