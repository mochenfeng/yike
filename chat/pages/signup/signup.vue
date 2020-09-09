<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left" @click="backOne">
				<image src="../../static/images/common/back.png" mode="aspectFill" class="back-img"></image>
			</view>
		</view>
		<view class="logo">
			<image src="../../static/images/signin/logo.png" mode="aspectFill"></image>
		</view>
		<view class="main">
			<view class="title">注册</view>
			<view class="inputs">
				<view class="inputs-div">
					<input type="text" @input="getUser" placeholder="请取个名字" class="user" placeholder-style="color:#aaa; font-weight: 400;"/>
					<view class="employ" v-if="user_employ">已占用</view>
					<image v-if="isuser" src="../../static/images/signin/right.png" mode="aspectFill" class="ok"></image>
				</view>
				<view class="inputs-div">
					<input type="text" @input="isEmail" placeholder="请输入邮箱" class="email" 
						placeholder-style="color:#aaa; font-weight: 400;"/>
					<view class="employ" v-if="email_employ">已占用</view>
					<view class="invalid" v-if="invalid">无效的邮箱</view>
					<image v-if="isemail" src="../../static/images/signin/right.png" mode="aspectFill" class="ok"></image>
				</view>
				<view class="inputs-div">
					<input :type="type" @input="getPsw" placeholder="这里输入密码" class="psw" 
						placeholder-style="color:#aaa; font-weight: 400;"/>
					<image :src="lookurl" mode="aspectFill" class="look" @click="looks"></image>
				</view>
			</view>
		</view>
		<view :class="[{submit:isok},{submit1:!isok}]">登录</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 'password',
				isuser: true,  //  用户名是否可用
				isemail: true, //  邮箱是否可用
				look: false,	//  是否显示密码
				invalid: false, //  邮箱是否符合
				user_employ: false,  //  用户是否被占用
				email_employ: false,  //  邮箱是否被占用
				lookurl: '../../static/images/signin/biyan.png',
				user: '',  //  用户名称
				email: '',  //  邮箱
				psw: '',  //  密码
				isok: false
			};
		},
		methods: {
			//  密码显示隐藏
			looks: function() {
				if(this.look) {
					this.type = 'text'
					this.look = !this.look
					this.lookurl = '../../static/images/signin/look.png'
				} else {
					this.type = 'password'
					this.look = !this.look
					this.lookurl = '../../static/images/signin/biyan.png'
				}
			},
			//  获取名字
			getUser: function(e) {
				this.user = e.detail.value
				this.isOK()
			},
			//  判断是否为邮箱格式
			isEmail: function(e) {
				let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
				this.email = e.detail.value
				if(this.email.length > 0) {
					if(reg.test(this.email)) {
						// console.log("正确");
						this.invalid = false
						this.isemail = true
					} else {
						// console.log("不正确");
						this.invalid = true
					}
				}
				this.isOK()
			},
			//  获取密码
			getPsw: function(e) {
				this.psw = e.detail.value
				this.isOK()
			},
			//  判断是否注册了
			isOK: function() {
				if(this.isuser && this.isemail && this.psw.length > 5) {
					this.isok = true
				} else {
					this.isok = false
				}
			},
			//  返回登录页面
			backOne: function() {
				uni.navigateBack({
					delta: 1
				})
			},
		}
	}
</script>

<style lang="scss">
	@import  '../../commons/css/mycss.scss';
	
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
		.inputs-div {
			position: relative;
		}
		.employ, .invalid {
			position: absolute;
			right: 0;
			top: 40rpx;
			float: right;
			font-size: $uni-font-size-base;
			font-weight: 600;
			color: $uni-color-warning;
			line-height: 88rpx;
		}
		.ok {
			position: absolute;
			right: 0;
			top: 76rpx;
			width: 38rpx;
			height: 30rpx;
		}
		.look {
			position: absolute;
			right: 0;
			top: 76rpx;
			width: 38rpx;
			height: 28rpx;
		}
		.biyan {
			position: absolute;
			right: 0;
			top: 76rpx;
			width: 38rpx;
			height: 28rpx;
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
	
	.submit1 {
		margin: 0 auto;
		width: 520rpx;
		height: 96rpx;
		background-color: rgba(39, 40, 50, 0.2);
		border-radius: 48rpx;
		font-size: $uni-font-size-lg;
		font-weight: 600;
		color: $uni-text-color-inverse;
		line-height: 96rpx;
		text-align: center;
	}

</style>
