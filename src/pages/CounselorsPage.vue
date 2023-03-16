<template>
  <view class="al-page">
    <view class="al-page-head">
      <view class="cu-bar bg-gray">
        <view class="search-form search round bg-white">
          <text class="bi-search"></text>
          <input type="text" placeholder="输入搜索的关键词" confirm-type="search">
          <view class="action">
            <button class="cu-btn sm bg-blue round">搜索</button>
          </view>
        </view>
      </view>
    </view>
    <view class="al-page-body al-card bg-gray counselor-list">
      <view class="al-card-head al-card-title">
        综合
      </view>
      <view class="al-card-body">
        <scroll-view scroll-y class="indexes bg-gray" :scroll-with-animation="true">
          <view class="cu-list bg-gray comment">
            <counselor-profile-middle-tile v-for="counselor in counselors" :counselor="counselor"
              @tap="openDetail(counselor)"></counselor-profile-middle-tile>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import CounselorService from "@/counselor/CounselorService";
import { reactive } from "vue";
import type { Counselor } from "@/counselor/model";
import CounselorProfileMiddleTile from "@/counselor/CounselorProfileMiddleTile.vue";
import Pages from "@/pages"

// const data: StudentCounselor[] = await CounselorService.getCounselors();
const counselors: Counselor[] = reactive([
  ...CounselorService.counselors,
  ...CounselorService.counselors,
  ...CounselorService.counselors,
  ...CounselorService.counselors,
  ...CounselorService.counselors,
]);
const openDetail = (counselor: Counselor) => {
  uni.navigateTo({
    url: `CounselorProfilePage?counselorId=${counselor.id}&counselorName=${counselor.name}`,
    animationType: "slide-in-right"
  });
};
</script>
<style lang="scss">
.counselor-list {}
</style>
