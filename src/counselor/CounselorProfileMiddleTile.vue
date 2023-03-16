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
      <view class="text-sm tags-row">
        <view class="cu-tag bg-blue round tight margin-bottom-xs" v-for="topic in counselor.topics">{{ topic.name }}</view>
      </view>
      <view class="text-sm flex justify-between">
        <view>
          <text class="bi-telephone text-blue margin-right-xs"></text>
          50元
          <text class="bi-chat-dots text-green margin-left-sm margin-right-xs"></text>
          20元
        </view>
        <view class="text-xs">
          <text class="text-gray">好评率：</text>
          <text class="text-grey">{{ counselor.goodRating }}%</text>
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

<style lang="scss">

</style>