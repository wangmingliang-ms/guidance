<template>
  <view class="cu-item with-avatar">
    <view class="certificate-avatar cu-avatar" style="background-image:url(https://upload.shejihz.com/2019/03/9-1.jpg)">
    </view>
    <view class="certificate-verification-status bi-patch-check-fill line-green"></view>
    <view class="certificate-details content margin-top-xs">
      <view class="flex flex-wrap">
        <text class="certificate-details-name text-lg formal margin-right-xs">高级中学教师资格证书</text>
        <view class='certificate-details-pass-rate cu-tag xs radius bg-yellow text-white'>~21%</view>
      </view>
      <view class="certificate-details-time text-gray text-light">
        <text class="bi-calendar3 text-sm"></text>
        <text class="text-sm">
          2005
        </text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { Counselor } from "@/counselor/model";

defineProps<{
  counselor: Counselor
}>();
</script>

<style lang="scss">
.certificate {
  &-verification-status {
    position: absolute;
    top: 24rpx;
  }
}
</style>