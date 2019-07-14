<template>
	<view class="content">
		<!-- 
			* 下拉刷新和加载更多组件使用示例
			* 下拉刷新组件仅支持h5和小程序端，app端受限制目前没想到好的实现。
		-->
		<!--
			* 下拉刷新组件
			* @property {Number} top 距离顶部的距离
			* @event {Function} onPulldownReresh 刷新时调用的方法
			* @event {Function} setEnableScroll 设置组件内scroll-view是否允许滚动
		-->
		<mix-pulldown-refresh 
			ref="mixPulldownRefresh" 
			:top="0" 
			@refresh="onPulldownReresh"
		>
			
			<view class="scroll-wrapper">
        <view class="list-wrap">
          <view class="list-item" v-for="(item, i) in list" :key="i" @click="navToDetail(item.id)">
            <image class="img" mode="scaleToFill" :src="item.images"></image>
          	<view class="list-con">
              <view class="play-title">{{item.title}}</view>
              <view class="play-handle">
                <view class="play">
                  <image class="img" mode="scaleToFill" src="../../static/play-white.png"></image>
                  <text>212</text>
                </view>
                <view class="thumbs">
                  <image class="img" mode="scaleToFill" src="../../static/thumbs-up.png"></image>
                  <text>212</text>
                </view>
              </view>
            </view>
          </view>
        </view>
				<!--
					* 上滑加载更多组件
					* @property {Number} status = [0|1|2] 0加载前，1加载中，2没有更多了
				-->
				<mix-load-more :status="loadMoreStatus"></mix-load-more>
					
			</view>
			
		</mix-pulldown-refresh>
	</view>
</template>

<script>
	import mixPulldownRefresh from '@/components/mix-pulldown-refresh/mix-pulldown-refresh';
	import mixLoadMore from '@/components/mix-load-more/mix-load-more';
  import json from '@/videojson.js'
	export default {
		components: {
			mixPulldownRefresh,
			mixLoadMore
		},
		data() {
			return {
				list: [],
				loadMoreStatus: 0,
			}
		},
		onLoad() {
			this.loadData('add');
		},
		
		onReachBottom(){
			//上滑加载
			this.loadData('add');
		},
		methods: {
      navToDetail(id) {
        uni.navigateTo({
        	url: `/pages/video/details?id=${id}`
        })
      },
			loadData(type){
				if(type === 'add'){
					this.loadMoreStatus = 1;
				}
				setTimeout(()=>{
					if(type === 'refresh'){
						this.list = [];
					}
					
					this.list = json.videoList;
					
					if(type === 'add'){
						this.loadMoreStatus = 0;
					}
					if(type === 'refresh'){
						this.$refs.mixPulldownRefresh && this.$refs.mixPulldownRefresh.endPulldownRefresh();
					}
				}, 1000)
				
			},
			
			
			//下拉刷新
			onPulldownReresh(){
				this.loadData('refresh');
			},
		}
	}
</script>

<style lang="scss">
	page, .content{
		background-color: #f8f8f8;
	}
  .list-wrap{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .list-item{
      position: relative;
    	margin-bottom: 8upx;
      width: 371upx;
    	height: 400upx;
    	font-size: 28upx;
    	color: #555;
    	background: #fff;
      .img{
        width: 371upx;
        height: 400upx;
      }
      .list-con{
        position: absolute;
        bottom: 0;
        z-index: 999;
        padding: 15upx;
        width: 340upx;
        .play-title{
          margin-bottom: 8upx;
          color: #fff;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .play-handle{
          display: flex;
          justify-content: space-between;
          .img{
            width: 30upx;
            height: 30upx;
            vertical-align: middle;
          }
          text{
            margin-left: 10upx;
            vertical-align: middle;
            color: #fff;
            font-size: 26upx;
          }
        }
      }
    }
  }
	
</style>