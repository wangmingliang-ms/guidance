<template>
  <view class="cu-item lg-avatar with-avatar">
    <view class="cu-avatar round lg">
    </view>
    <view class="content margin-top-xs">
      <view>
        <text class="text-bold text-lg margin-right-xs">{{ counselor.name }}</text>
        <view class='cu-tag xs radius text-blue bg-gray' v-for="tag in counselor.unit.tags">{{ tag.label }}</view>
      </view>
      <view class="text-df flex align-center formal">
        <text class="text-black">{{ counselor.unit.name }}</text>
        <text class="margin-left-xs">{{ counselor.department.name }}</text>
        <text class="margin-left-xs">{{ counselor.position }}</text>
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

<style lang="scss">

</style>