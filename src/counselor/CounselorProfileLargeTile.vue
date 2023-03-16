<template>
  <view class="profile-lg cu-item bg-white flex flex-direction align-center padding">
    <view class="profile-lg-verified cu-tag radius line-green sm text-green">
      <text class="bi-shield-fill-check line-green margin-right-xs"></text>
      实名认证
    </view>
    <view class="margin-lr flex flex-direction align-center">
      <view class="profile-lg-avatar cu-avatar radius shadow-blur xxl margin-bottom-sm"
        style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
      <view class="text-xl text-bold formal margin-bottom-sm">
        {{ counselor.name }}<view class="margin-left-xs cu-tag uni-btn-icon xs radius">
          <text class="bi-gender-male line-blue"></text>
        </view>
      </view>
      <text class="text-light text-gray margin-bottom-xs">
        {{ counselor.unit.name }}
        <text class="text-bold">·</text>
        {{ counselor.department.name }}
        <text class="bi-patch-check-fill line-green"></text>
      </text>
      <view class="text-gray text-light margin-bottom-xs">
        <text class="bi-quote"></text>
        <text class="text-sm">
          好好学习，天天向上
        </text>
      </view>
      <view class="profile-lg-topics flex flex-wrap align-center justify-center">
        <view class="cu-tag round bg-blue margin-right-xs margin-bottom-xs" v-for="t in counselor.topics">{{ t.name }}
        </view>
      </view>
    </view>
    <view class="profile-lg-stars flex">
      <text class="bi-star-fill line-yellow margin-right-xs"></text>
      <text class="bi-star-fill line-yellow margin-right-xs"></text>
      <text class="bi-star-fill line-yellow margin-right-xs"></text>
      <text class="bi-star-fill line-yellow margin-right-xs"></text>
      <text class="bi-star-half line-yellow margin-right-xs"></text>
    </view>
    <view class="profile-lg-buttons flex">
      <view class="button button-text flex flex-direction align-center justify-center" @tap="selected = 'text'"
        :class="{ selected: selected == 'text' }">
        <text class="text-xxs text-green">
          <text class="button-icon bi-image text-xxl margin-right-xs"></text>图文
        </text>
        <text class="text-xs formal text-gray">
          <text class="text-bold text-df text-orange">¥25</text>/次
        </text>
        <view class="button-checkbox">
          <view class="check"><text class="bi-check2"></text></view>
        </view>
      </view>
      <view class="button button-call flex flex-direction align-center justify-center" @tap="selected = 'call'"
        :class="{ selected: selected == 'call' }">
        <text class="text-xxs text-blue">
          <text class="button-icon bi-telephone text-xxl margin-right-xs"></text>语音
        </text>
        <text class="text-xs formal text-gray">
          <text class="text-bold text-df text-orange">¥50</text>/15分钟
        </text>
        <view class="button-checkbox">
          <view class="check"><text class="bi-check2"></text></view>
        </view>
      </view>
      <view class="button button-other flex flex-direction align-center justify-center" @tap="selected = 'other'"
        :class="{ selected: selected == 'other' }">
        <text class="button-icon bi-three-dots text-xxl"></text>
        <text class="text-xs formal text-gray">其它</text>
        <view class="button-checkbox">
          <view class="check"><text class="bi-check2"></text></view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { Counselor } from "@/counselor/model";
import { ref } from "vue";

defineProps<{
  counselor: Counselor
}>();

const selected = ref("text");

</script>

<style lang="scss">
$card-bg-color: white;
$page-bg-color: #eaeaea;

.profile-lg {
  padding: 0;

  &-verified {
    position: absolute;
    top: 24rpx;
    right: 16rpx;
  }

  &-avatar {
    margin-top: 100rpx;
  }

  &-topics {
    margin: 20rpx 60rpx;
  }

  &-buttons {
    height: 160rpx;
    width: 100%;
    align-items: center;
    margin-top: 20rpx;
    border-top: 1rpx solid $page-bg-color;

    .button {
      flex: 1;
      height: 100%;
      text-align: center;
      border: 1rpx solid $page-bg-color;
      border-bottom-color: $card-bg-color;
      position: relative;
      overflow: hidden;

      .button-checkbox {
        background: #99b8f8;
        position: absolute;
        transform: rotate(-45deg);
        color: #f5f9fc;
        width: 90rpx;
        height: 48rpx;
        bottom: -10rpx;
        right: -30rpx;
        display: none;

        .check {
          transform: rotate(44deg);
        }
      }

      &.selected {
        border-color: #99b8f8;
        background-color: #f5f9fc;

        .button-checkbox {
          display: block;
        }
      }
    }

    .button-text {
      border-left-color: $card-bg-color;
      border-bottom-left-radius: 10rpx;
    }

    .button-other {
      border-right-color: $card-bg-color;
      border-bottom-right-radius: 10rpx;
    }

    .button-icon {}
  }
}
</style>