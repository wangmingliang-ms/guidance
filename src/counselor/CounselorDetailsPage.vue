<template>
  <view class="cu-list menu-avatar comment right sm-border" v-if="status==='loaded'">
    <counselor-details-profile-head-right :counselor="counselor"></counselor-details-profile-head-right>
    <scroll-view scroll-y class="indexes" :scroll-with-animation="true" :enable-back-to-top="true">
      <counselor-achievement-timeline :achievements="achievements"></counselor-achievement-timeline>
    </scroll-view>
    <view class="cu-bar bg-white tabbar border shop">
      <view class="action" open-type="contact">
        <view class="cuIcon-service text-green">
          <view class="cu-tag badge"></view>
        </view>
        客服
      </view>
      <view class="action text-orange">
        <view class="cuIcon-favorfill"></view>
        已收藏
      </view>
      <view class="action">
        <view class="cuIcon-cart">
          <view class="cu-tag badge">99</view>
        </view>
        购物车
      </view>
      <view class="bg-red submit">立即订购</view>
    </view>
  </view>
  <view v-else-if="status==='loading'">
    加载中...
  </view>
  <view v-else>
    加载失败！
  </view>
</template>

<script setup lang="ts">
import {onLoad} from "@dcloudio/uni-app";
import CounselorService from "@/counselor/CounselorService";
import type {Counselor} from "@/counselor/model";
import type {Ref} from 'vue';
import {computed, reactive, ref} from "vue";
import CounselorDetailsProfileHeadRight from "@/counselor/CounselorDetailsProfileHeadRight.vue";
import CounselorAchievementTimeline from "@/counselor/achievement/CounselorAchievementTimeline.vue";

type Status = 'inited' | 'loading' | 'loaded' | 'failed';
let status: Ref<Status> = ref<Status>('inited');
let counselor: Counselor;
onLoad(async (query?: AnyObject | undefined) => {
  const {counselorId, counselorName} = query as { counselorName: string, counselorId: string };
  await uni.setNavigationBarTitle({
    title: counselorName
  });
  status.value = 'loading'
  try {
    const data: Counselor = (await CounselorService.getCounselor(counselorId));
    status.value = 'loaded'
    counselor = reactive(data);
  } catch (error) {
    status.value = 'failed';
  }
});

const achievements = computed(() => {
  return counselor ? [...counselor.educations ?? [], ...counselor.jobs ?? [], ...counselor.qualifications ?? []] : [];
});
</script>

<style scoped lang="scss">
</style>