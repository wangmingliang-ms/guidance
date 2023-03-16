<template>
  <view class="cu-bar bg-white search fixed">
    <view class="search-form round">
      <text class="cuIcon-search"></text>
      <input type="text" placeholder="输入搜索的关键词" confirm-type="search">
    </view>
    <view class="action">
      <button class="cu-btn bg-gradual-green shadow-blur round">搜索</button>
    </view>
  </view>
  <scroll-view scroll-y class="indexes" :scroll-with-animation="true" :enable-back-to-top="true">
    <CounselorProfileCardList :counselors="counselors"></CounselorProfileCardList>
  </scroll-view>
</template>

<script setup lang="ts">
import CounselorProfileCardList from "@/counselor/CounselorProfileCardList.vue";
import CounselorService from "@/counselor/CounselorService";
import {reactive} from "vue";
import type {Counselor} from "@/counselor/model";

// const data: StudentCounselor[] = await CounselorService.getCounselors();
const counselors: Counselor[] = reactive([
  ...CounselorService.counselors,
  ...CounselorService.counselors,
  ...CounselorService.counselors,
  ...CounselorService.counselors,
]);
</script>
<style lang="scss">
</style>
