<template>
  <view class="cu-list menu-avatar comment sm-border">
    <CounselorProfileCardItem v-for="counselor in counselors" :counselor="counselor" @click="openDetail(counselor)"></CounselorProfileCardItem>
  </view>
</template>

<script setup lang="ts">
import CounselorProfileCardItem from "@/counselor/CounselorProfileCardItem.vue";
import type {Counselor} from "@/counselor/model";
import Pages from "@/pages/Pages";

defineProps<{
  counselors: Counselor[]
}>();

const openDetail = (counselor: Counselor) => {
  uni.navigateTo({
    url: `${Pages.CounselorDetails}?counselorId=${counselor.id}&counselorName=${counselor.name}`,
    animationType: "slide-in-right"
  })
};
</script>
<style lang="scss">
</style>
