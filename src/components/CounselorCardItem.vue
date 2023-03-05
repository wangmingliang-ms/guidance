<template>
  <view class="cu-list menu-avatar comment">
    <view class="cu-item resume">
      <view class="cu-avatar round lg">
      </view>
      <view class="content">
        <view class="flex" style="align-items: baseline">
          <text class="text-bold">王明良</text>
          <text class="text-sm margin-left-xs">学生</text>
          <view class='cu-tag text-white sm bg-yellow radius'>双一流</view>
          <view class='cu-tag text-white sm bg-yellow radius'>C9</view>
        </view>
        <view class="text-sm flex">
          <text>复旦大学</text>
          <text class="text-sm margin-left-xs">计算机软件与理论</text>
        </view>
        <view class="text-sm flex">
          <text class="text-xs">接询率</text>
          <text class="text-xs margin-left-xs text-bold text-blue">100%</text>
          <text class="text-xs margin-left-sm">好评率</text>
          <text class="text-xs margin-left-xs text-bold text-blue">100%</text>
          <text class="text-xs margin-left-sm">问询量</text>
          <text class="text-xs margin-left-xs text-bold text-blue">84</text>
        </view>
      </view>
    </view>

    <view class="cu-item">
      <view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
      <view class="content">
        <view class="text-grey">凯尔</view>
        <view class="text-gray text-content text-df">
          妹妹，如果不是为了飞翔，我们要这翅膀有什么用?
        </view>
        <view class="bg-grey padding-sm radius margin-top-sm  text-sm">
          <view class="flex">
            <view>莫甘娜：</view>
            <view class="flex-sub">如果不能立足于大地，要这双脚又有何用?</view>
          </view>
        </view>
        <view class="margin-top-sm flex justify-between">
          <view class="text-gray text-df">2018年12月4日</view>
          <view>
            <text class="cuIcon-appreciate text-gray"></text>
            <text class="cuIcon-messagefill text-gray margin-left-sm"></text>
          </view>
        </view>
      </view>
    </view>
  </view>

  <view class="cu-card dynamic no-card">
    <view class="cu-item shadow">
      <view class="cu-list menu-avatar">
        <view class="cu-item">
          <view class="cu-avatar round lg">
          </view>
          <view class="content">
            <view class="flex" style="align-items: baseline">
              <text class="text-bold">王明良</text>
              <text class="text-sm margin-left-xs">学生</text>
              <view class='cu-tag text-white sm bg-yellow radius'>双一流</view>
              <view class='cu-tag text-white sm bg-yellow radius'>C9</view>
            </view>
            <view class="text-sm flex">
              <text>复旦大学</text>
              <text class="text-sm margin-left-xs">计算机软件与理论</text>
            </view>
            <view class="text-sm flex">
              <text class="text-xs">接询率</text>
              <text class="text-xs margin-left-xs text-bold text-blue">100%</text>
              <text class="text-xs margin-left-sm">好评率</text>
              <text class="text-xs margin-left-xs text-bold text-blue">100%</text>
              <text class="text-xs margin-left-sm">问询量</text>
              <text class="text-xs margin-left-xs text-bold text-blue">84</text>
            </view>
          </view>
        </view>
      </view>
      <view class="text-content text-sm margin-top" style="max-height: initial">
        <view class="flex flex-direction resume">
          <view>
            <text class='cuIcon-radioboxfill text-blue margin-right-xs'></text>
            我现在是
            <view class="cu-item cu-capsule radius">
              <view class="cu-tag bg-blue sm">
                <text class="cuIcon-phone margin-right-xs"></text>
                微软
              </view>
              <view class="cu-tag line-blue sm">高级软件工程师</view>
            </view>
          </view>
          <view>
            <text class='cuIcon-radioboxfill text-blue margin-right-xs'></text>
            我曾经是
            <view class="cu-item cu-capsule radius">
              <view class="cu-tag bg-blue sm">
                <text class="cuIcon-phone margin-right-xs"></text>
                复旦大学
              </view>
              <view class="cu-tag line-blue sm">计算机软件与理论专业</view>
            </view>
            学生
          </view>
          <view>
            <text class='cuIcon-radioboxfill text-blue margin-right-xs'></text>
            我曾经是
            <view class="cu-item cu-capsule radius">
              <view class="cu-tag bg-blue sm">
                <text class="cuIcon-phone margin-right-xs"></text>
                复旦大学
              </view>
              <view class="cu-tag line-blue sm">软件工程专业</view>
            </view>
            学生
          </view>
          <view>
            <text class='cuIcon-radioboxfill text-blue margin-right-xs'></text>
            我曾经是
            <view class="cu-item cu-capsule radius">
              <view class="cu-tag bg-blue sm">
                <text class="cuIcon-phone margin-right-xs"></text>
                湖南攸县一中
              </view>
            </view>
            学生
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import {ref} from "vue";

const isCard = ref(true);
</script>

<style scoped lang="scss">
.resume {
  .cu-tag.sm {
    height: 1.375rem;
  }
}
</style>