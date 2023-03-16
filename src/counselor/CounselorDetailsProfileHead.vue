<template>
  <view class="cu-item resume">
    <view class="cu-avatar round lg resume-counselor-avatar">
    </view>
    <view class="content resume-counselor-info margin-top-xs">
      <text class="text-bold text-xl margin-bottom-sm">{{ counselor.name }}</text>
      <view class="text-sm flex align-center">
        <text class="">{{ counselor.position }}</text>
        <text class="margin-left-xs">{{ counselor.department.name }}</text>
        <view class='cu-tag text-orange sm line-orange radius' v-for="tag in counselor.department.tags">{{ tag.label }}</view>
      </view>
      <view class="flex align-center margin-bottom-xs">
        <text>{{ counselor.unit.name }}</text>
        <view class='cu-tag text-white sm bg-yellow radius' v-for="tag in counselor.unit.tags">{{ tag.label }}</view>
        <text class="margin-left-sm cuIcon-right text-gray"></text>
      </view>
      <view class="text-sm tags-row">
        <view class="cu-tag line-blue round sm margin-bottom-xs" v-for="topic in counselor.topics">{{ topic.name }}</view>
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