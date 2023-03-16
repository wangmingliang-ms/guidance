<template>
  <view class="cu-item resume">
    <view class="cu-avatar round lg resume-counselor-avatar">
    </view>
    <view class="content resume-counselor-info margin-top-xs">
      <view>
        <text class="text-bold">{{ counselor.name }}</text>
        <view class='cu-tag text-white sm bg-yellow radius' v-for="tag in counselor.unit.tags">{{ tag.label }}</view>
      </view>
      <view class="text-sm flex align-center">
        <text>{{ counselor.unit.name }}</text>
        <text class="margin-left-xs">{{ counselor.department.name }}</text>
        <text class="margin-left-xs">{{ counselor.position }}</text>
      </view>
      <view class="text-sm tags-row">
        <view class="cu-tag line-blue round sm margin-bottom-xs" v-for="topic in counselor.topics">{{ topic.name }}</view>
      </view>
      <view class="text-sm flex justify-between">
        <view>
          <text class="cuIcon-phone text-blue"></text>
          50元
          <text class="cuIcon-message text-green margin-left-xs"></text>
          20元
        </view>
        <view class="text-xs">
          <text class="text-gray">好评率：</text>
          <text class="text-blue text-bold">{{ counselor.goodRating }}%</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import type {Counselor} from "@/counselor/model";

defineProps<{
  counselor: Counselor
}>();

</script>

<style scoped lang="scss">

</style>