<template>
  <view class="content">
    <view class="nav-bar">
      <image @click="navBack" class="img" mode="scaleToFill" src="../../static/arrow-left.png"></image>
    </view>
    <view class="video-wrapper" @click="playHandle">
      <video ref="myVideo" class="video" src="https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4"
        controls=false loop=true objectFit="fill" autoplay=true
        show-center-play-btn=false
        show-play-btn=false
        show-fullscreen-btn=false
        >
        </video>
      <image v-if="isPaused" class="img" mode="scaleToFill" src="../../static/play-white.png"></image>
    </view>
    <view class="user-handle">
      <view class="thumbs" @click="lovePlay">
        <image class="img" mode="scaleToFill" :src="isLove"></image>
        <text>212</text>
      </view>
      <view class="play">
        <image class="img" mode="scaleToFill" src="../../static/zhuanfa.png"></image>
        <text>212</text>
      </view>
    </view>
    <view class="play-title">过年了小心你身边会乐器的朋友过年了小心你身边会乐器的朋友过年了小心你身边会乐器的朋友过年了小心你身边会乐器的朋友过年了小心你身边会乐器的朋友</view>
  </view>
</template>

<script>
  import json from '@/videojson.js'
  import loveImg from '@/static/thumbs-up.png'
  import lovedImg from '@/static/thumbs-up-active.png'
  export default {
    data() {
      return {
        list: [],
        loadMoreStatus: 0,
        isPaused: false,
        isLove: loveImg,
      }
    },
    onLoad() {

    },

    onReachBottom() {

    },
    methods: {
      lovePlay() {
        this.isLove = lovedImg;
      },
      navBack() {
        uni.navigateBack({
          delta: 1,
          animationType: 'pop-out',
          animationDuration: 200
        });
      },
      playHandle() {
        let myVideo = this.$refs.myVideo;
        debugger
        if (this.isPaused) {
          myVideo.play();
          this.isPaused = false;
        } else {
          myVideo.pause();
          this.isPaused = true;
        }
      }
    }
  }
</script>

<style lang="scss">
  .uni-video-bar{
    display: none;
  }
  page,
  .content {
    background-color: #000;
  }

  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 750upx;
    .img {
      width: 40upx;
      height: 40upx;
      margin: 30upx 20upx;
    }
  }

  .video-wrapper {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1;

    .video {
      width: 750upx;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    .img {
      width: 120upx;
      height: 120upx;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 999;
    }
  }

  .user-handle{
    position: fixed;
    right: 20upx;
    bottom: 250upx;
    z-index: 9999;
    .img{
      margin-top: 30upx;
      display: block;
      width: 60upx;
      height: 60upx;
    }
    text{
      color: #fff;
      font-size: 26upx;
    }
  }
  .play-title{
    position: fixed;
    left: 0;
    bottom: 40upx;
    z-index: 99;
    margin: 30upx;
    font-size: 30upx;
    color: #fff;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
</style>
