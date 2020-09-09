<template>
	<view class="content">
		<view class="top-bar" >
			<view class="search-div">
				<input class="search" type="search" placeholder="搜索用户/群" @input="search" placeholder-style="color:#aaa; font-weight: 400;"/>
				<image class="search-img" src="../../static/images/search/search.png" mode="aspectFill"></image>
			</view>
			<view class="top-bar-right">
				<view class="cancel" @click="backOne">取消</view>
			</view>
		</view>
		
		<view class="main">
			<view class="search-user result">
				<view class="title" v-if="userarr.length > 0">用户</view>
				<view class="list user" v-for="(item, index) in userarr" :key="index">
					<image :src="item.imgurl" mode="aspectFill"></image>
					<view class="names">
						<view class="name" v-html="item.name"></view>
						<view class="email" v-html="item.email"></view>
					</view>
					<view class="right-btn send" v-if="item.tip === 1">发消息</view>
					<view class="right-btn add" v-else>加好友</view>
				</view>
				<!-- <view class="list user">
					<image :src="userarr.imgurl" mode="aspectFill"></image>
					<view class="names">
						<view class="name">大力出奇迹</view>
						<view class="email">1109525329@com</view>
					</view>
					<view class="right-btn add">加好友</view>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	import datas from '../../commons/js/data.js'
	export default {
		data() {
			return {
				userarr: []
			};
		},
		methods: {
			
			//  返回首页
			backOne: function() {
				uni.navigateBack({
					delta: 1
				})
			},
			
			//  获取关键词
			search: function(e) {
				this.userarr = []
				let searchval = e.detail.value
				if(searchval.length > 0) {
					this.searchUser(searchval)
				}
			},
			//  寻找关键词匹配的好友
			searchUser: function(e) {
				let arr = datas.friends()
				let exp = eval("/"+e+"/g")
				for(let i = 0; i < arr.length; i ++) {
					if(arr[i].name.search(e) != -1 || arr[i].email.search(e) != -1) {
						this.isFriend(arr[i])
						arr[i].imgurl = '../../static/images/img/' + arr[i].imgurl
						arr[i].name = arr[i].name.replace(exp, "<span style='color: #4AAAFF;'>" + e + "</span>")
						arr[i].email = arr[i].email.replace(exp, "<span style='color: #4AAAFF;'>" + e + "</span>")
						this.userarr.push(arr[i])
					}
				}
			},
			 
			//  判断是否为好友
			isFriend: function(e) {
				let tip = 0
				let arr = datas.isFriend()
				for(let i = 0; i < arr.length; i ++) {
					if(arr[i].friend == e.id) {
						tip = 1
					}
				}
				e.tip = tip
				console.log(e.tip);
			}
		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/mycss.scss";
	.top-bar {
		background: rgba(255, 255, 255, 0.96);
		border-bottom: 1px solid $uni-border-color;
		.search-div {
			width: 100%;
			z-index: -1;
			box-sizing: border-box;
			padding: 14rpx 44rpx 14rpx $uni-spacing-col-base;
			.search {
				padding: 0 50rpx 0 12rpx;
				height: 60rpx;
				background-color: $uni-bg-color-grey;
				border-radius: 10rpx;
			}
			.search-img {
				position: absolute;
				right: 140rpx;
				top: 22rpx;
				width: 40rpx;
				height: 40rpx;
			}
		}
		.top-bar-right {
			display: flex;
			align-items: center;
			width: 80rpx;
			height: 100%;
			
			.cancel {
				font-weight: 500;
				font-size: $uni-font-size-lg;
			}
		}
	}
	
	.main {
		padding: 88rpx $uni-spacing-col-base;
		&.result {
			padding-top: $uni-spacing-col-base;
		}
		.title {
			font-size: 44rpx;
			font-weight: 600;
			color: $uni-text-color;
			line-height: 60rpx;
		}
		.list {
			display: flex;
			width: 100%;
			height: 80rpx;
			padding: 20rpx 0;
			image {
				width: 80rpx;
				height: 80rpx;
				border-radius: $uni-border-radius-base;
			}
			.names {
				margin-right: auto;
				padding-left: $uni-spacing-col-base;
				.name {
					font-size: 36rpx;
					color: $uni-text-color;
					line-height: 50rpx;
				}
				.email {
					font-size: $uni-font-size-sm;
					color: $uni-text-color;
					line-height: 28rpx;
				}
			}
			.right-btn {
				float: right;
				width: 120rpx;
				height: 48rpx;
				border-radius: 24rpx;
				font-size: $uni-font-size-sm;
				line-height: 48rpx;
				text-align: center;
				margin-top: 16rpx;
				&.send {
					background: $uni-color-primary;
					color: $uni-text-color;
				} 
				&.add {
					background: rgba(74,170,255,0.1);
					color: $uni-color-success;
				}
			}
			
		}
	}	
</style>
