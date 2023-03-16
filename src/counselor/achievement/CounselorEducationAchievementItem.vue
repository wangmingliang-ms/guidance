<template>
  <view class="cu-item">
    <view class="content margin-top-xs">
      <view class="flex justify-start align-center">
        <view class="cu-avatar inline margin-right-xs">
        </view>
        <text class="text-bold">{{ achievement.school.name }}</text>
        <text class="margin-left-sm cuIcon-right text-gray"></text>
      </view>
      <view class="text-sm flex align-center margin-left-lg align-end justify-between">
        <text class="" v-if="achievement.department&&achievement.major">{{ achievement.department.name }} {{ achievement.major.name }}</text>
        <text class="" v-else></text>
        <view class="text-sm flex align-center">
          <view class='cu-tag text-white sm bg-yellow radius' v-for="tag in tags">{{ tag.label }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import type {Education} from "@/common/model";
import {computed} from "vue";

const props = defineProps<{
  achievement: Education
}>();

const tags = computed(() => props.achievement.school.tags);
</script>

<style scoped>

</style>