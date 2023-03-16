<template>
  <view class="cu-item with-avatar">
    <view class="cu-avatar" style="background-image:url(https://upload.shejihz.com/2019/03/9-1.jpg)">
    </view>
    <view class="cu-item-status bi-patch-check-fill line-green"></view>
    <view class="content margin-top-xs">
      <view class="flex flex-wrap">
        <text class="text-lg formal margin-right-xs">{{ education.school.name }}</text>
        <view class='cu-tag xs radius text-blue bg-gray' v-for="tag in education.school.tags">{{ tag.label }}</view>
      </view>
      <view class="text-df flex align-center formal">
        <text class="text-black margin-right-xs" v-if="education.major?.name">{{ education.major?.name }}</text>
        <text>{{ education.qualification }}</text>
      </view>
      <view class="text-gray text-light">
        <text class="bi-calendar3 text-sm margin-right-xs"></text>
        <text class="text-sm">
          {{ education.period.start }} - {{ education.period.end }}
        </text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { Education } from "@/common/model";

defineProps<{
  education: Education
}>();

</script>

<style lang="scss">
.cu-item {
  &-status {
    position: absolute;
    top: 24rpx;
  }
}
</style>