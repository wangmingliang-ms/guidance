<template>
  <view class="cu-timeline">
    <template v-for="pair in pairs">
      <view class="cu-time text-sm">{{ pair[0] }}</view>
      <component v-for="achievement in pair[1]" :is="getAchievementType(achievement)"
                 v-bind="{achievement:achievement}"></component>
    </template>
  </view>
</template>

<script setup lang="ts">
import CounselorJobAchievementItem from "@/counselor/achievement/CounselorJobAchievementItem.vue";
import CounselorEducationAchievementItem from "@/counselor/achievement/CounselorEducationAchievementItem.vue";
import CounselorQualificationAchievementItem from "@/counselor/achievement/CounselorQualificationAchievementItem.vue";
import type {Achievement} from "@/common/model";
import {computed} from "vue";

const props = defineProps<{
  achievements: Achievement[]
}>();

const pairs = computed<Array<[string, Achievement[]]>>(() => {
  const grouped = props.achievements.reduce((acc, achievement) => {
    const year = achievement.startYear;
    if (acc[year]) {
      acc[year].push(achievement);
    } else {
      acc[year] = [achievement];
    }
    return acc;
  }, {} as Record<string, Achievement[]>);
  return Object.entries(grouped).sort((a, b) => Number(b[0]) - Number(a[0]));
});

function getAchievementType(achievement: Achievement) {
  if (Object.hasOwn(achievement, 'school')) {
    return CounselorEducationAchievementItem;
  } else if (Object.hasOwn(achievement, 'company')) {
    return CounselorJobAchievementItem;
  } else {
    return CounselorQualificationAchievementItem;
  }
}

</script>

<style scoped>

</style>