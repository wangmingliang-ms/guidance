<template>
  <view class="al-page" v-if="status === 'loaded'">
    <view class="al-page-body">
      <view class="al-card bg-gray">
        <view class="al-card-body">
          <view class="cu-list card-menu bg-white">
            <counselor-profile-large-tile :counselor="counselor"></counselor-profile-large-tile>
          </view>
        </view>
      </view>
      <view class="al-card bg-gray">
        <view class="al-card-head al-card-title">
          <text class="icon bi-mortarboard margin-right-xs"></text>教育经历
        </view>
        <view class="al-card-body">
          <view class="cu-list card-menu comment bg-white">
            <counselor-education-tile v-for="e in counselor.educations" :education="e"></counselor-education-tile>
          </view>
        </view>
      </view>
      <view class="al-card bg-gray">
        <view class="al-card-head al-card-title">
          <text class="icon bi-bookmark-check margin-right-xs"></text>资质证书
        </view>
        <view class="al-card-body">
          <view class="cu-list card-menu comment bg-white">
            <counselor-certificate-tile :counselor="counselor"></counselor-certificate-tile>
            <counselor-certificate-tile :counselor="counselor"></counselor-certificate-tile>
          </view>
        </view>
      </view>
      <view class="counselor-profile-bottom-button cu-bar btn-group">
        <button class="cu-btn lg shadow round bg-green" @tap="book()">立即联系</button>
        <button class="cu-btn lg shadow round bg-blue" @tap="book()">和他聊聊</button>
      </view>
    </view>
  </view>
  <view v-else-if="status === 'loading'">
    加载中...
  </view>
  <view v-else>
    加载失败！
  </view>
</template>

<script setup lang="ts">
import CounselorService from "@/counselor/CounselorService";
import type { Counselor } from "@/counselor/model";
import type { Ref } from 'vue';
import { computed, reactive, ref } from "vue";
import CounselorProfileLargeTile from "@/counselor/CounselorProfileLargeTile.vue";
import CounselorEducationTile from "@/counselor/CounselorEducationTile.vue";
import CounselorCertificateTile from "@/counselor/CounselorCertificateTile.vue";
import { onReady } from "@dcloudio/uni-app";
import Pages from "@/pages"

const props = defineProps<{ counselorName: string, counselorId: string }>();

type Status = 'inited' | 'loading' | 'loaded' | 'failed';
const status: Ref<Status> = ref<Status>('inited');
let counselor: Counselor;

onReady(() => {
  uni.setNavigationBarTitle({ title: props.counselorName });
});

(async () => {
  status.value = 'loading';
  try {
    const data: Counselor = await CounselorService.getCounselor(props.counselorId);
    status.value = 'loaded';
    counselor = reactive(data);
  } catch (error) {
    status.value = 'failed';
  }
})();

const achievements = computed(() => {
  return counselor ? [...counselor.educations ?? [], ...counselor.jobs ?? [], ...counselor.qualifications ?? []] : [];
});

const book = () => {
  uni.navigateTo({
    url: `BookingPage?counselorId=${counselor.id}&counselorName=${counselor.name}`,
    animationType: "slide-in-right"
  })
};
</script>

<style scoped lang="scss">
.al-page-body {
  padding-bottom: 120rpx;
}

.counselor-profile-bottom-button {
  position: fixed;
  width: 100%;
  bottom: 16rpx;
}
</style>