<template>
  <view class="cu-item">
    <view class="content margin-top-xs">
      <view class="flex justify-start align-center">
        <view class="cu-avatar inline margin-right-xs">
        </view>
        <text class="text-bold">{{ achievement.name }}</text>
        <text class="margin-left-sm cuIcon-right text-gray"></text>
      </view>
      <view class="text-sm flex align-center justify-end">
        <view class='cu-tag text-white sm bg-yellow radius' v-for="tag in tags">{{ tag.label }}</view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import type {Qualification} from "@/common/model";
import {computed} from "vue";

const props = defineProps<{
  achievement: Qualification
}>();
const tags = computed(() => props.achievement.tags);
</script>

<style scoped>

</style>