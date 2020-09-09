<template>
	<view class="content">
		<view class="top-bar" >
			<view class="top-bar-left">
				<image src="../../static/images/img/one.jpg" mode="aspectFill"></image>
			</view>
			<view class="top-bar-center">
				<image src="../../static/images/index/logo.png" mode="aspectFill"></image>
			</view>
			<view class="top-bar-right">
				<view class="search" @click="toSearch">
					<image src="../../static/images/index/search.png" mode="aspectFill"></image>
				</view>
				<view class="add">
					<image src="../../static/images/index/add.png" mode="aspectFill"></image>
				</view>
			</view>
		</view>
		<view class="main">
			<view class="friend-list">
				<view class="friend-list">
					<view class="friend-list-l">
						<text class="tip">1</text>
						<image src="../../static/images/index/apply.png" mode="aspectFill"></image>
					</view>
					<view class="friend-list-r">
						<view class="top">
							<view class="name">好友申请</view>
							<view class="time">13:00</view>
						</view>
						<view class="news">茫茫人海，相聚便是缘分</view>
					</view>
				</view>
			</view>
			<view class="friend-list" v-for="item in friends" :key="item.id">
				<view class="friend-list">
					<view class="friend-list-l">
						<text class="tip" v-if="item.tip > 0">{{item.tip}}</text>
						<image :src="item.imgurl" mode="aspectFill"></image>
					</view>
					<view class="friend-list-r">
						<view class="top">
							<view class="name">{{item.name}}</view>
							<view class="time">{{changeTime(item.time)}}</view>
						</view>
						<view class="news">{{item.news}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import datas from '../../commons/js/data.js'
	import myfun from '../../commons/js/myfun.js'
	export default {
		data() {
			return {
				friends: [],
				// statusBarHeight:　20,
				// navBarHeight: 45,
				// windowWidth: 375,
			}
		},
		onLoad() {
			this.getFriends()
		},
		methods: {
			changeTime: function(data) {
				return myfun.dataTime(data)
			},
			
			//  跳转到搜索页面
			toSearch() {
				uni.navigateTo({
					url: '../search/search'
				})
			},
			getFriends: function() {
				this.friends = datas.friends()
				for(let i = 0; i < this.friends.length; i++) {
					this.friends[i].imgurl = '../../static/images/img/' + this.friends[i].imgurl
				}
				console.log(this.friends)
			}
		}
	}
</script>

<style lang="scss">
	@import  '../../commons/css/mycss.scss';

	.top-bar {
		background: rgba(255, 255, 255, 0.96);
		border-bottom: 1px solid $uni-border-color;
	}
	
	.main {
		padding-top: 104rpx;
		width: 100%;
		box-sizing: border-box;
		padding-bottom: $uni-spacing-col-base;
		.friend-list {
			display: flex;
			height: 96rpx;
			padding: 16rpx;
			align-items: center;
			&:active {
				background-color: $uni-bg-color-grey;
			}
			.friend-list-l {
				position: relative;
				width: 96rpx;
				height: 96rpx;
				image {
					width: 100%;
					height: 100%;
					border-radius: $uni-border-radius-base;
					background-color: $uni-color-primary;
				}
				.tip {
					position: absolute;
					z-index: 10;
					top: -8rpx;
					left: 68rpx;
					min-width: 20rpx;
					height: 36rpx;
					padding: 0 8px;
					background: $uni-color-warning;
					border-radius: 18rpx;
					font-size: $uni-font-size-sm;
					color: $uni-text-color-inverse;
					line-height: 36rpx;
					text-align: center;
				}
			}
		
			.friend-list-r {
				padding-left: $uni-spacing-col-base; 
				width: 590rpx;
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				.top {
					display: flex;
					justify-content: space-between;
					height: 58rpx;
					.name {
						font-size: 36rpx;
						font-weight: 400;
						color: $uni-text-color;
						line-height: 50rpx;
					}
					.time {
						font-size: $uni-font-size-sm;
						color: $uni-text-color-disable;
					}
				}
				
				.news {
					font-size: $uni-font-size-base;
					color: $uni-text-color-grey;
					line-height: 40rpx;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
					overflow: hidden;
				}
			}
		}
	}
</style>
