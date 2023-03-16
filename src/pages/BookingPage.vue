<template>
  <view class="al-page">
    <view class="al-page-body al-card bg-gray">
      <view class="al-card-head al-card-title">
        <text class="icon bi-calendar2-plus margin-right-xs"></text>预约咨询
      </view>
      <view class="cu-list bg-gray booking-counselor" v-if="status === 'loaded'">
        <counselor-profile-small-tile :counselor="counselor"></counselor-profile-small-tile>
      </view>
      <form class="al-card-body al-form">
        <view class="al-form-item booking-time margin-bottom-none">
          <text class="al-form-item-icon bi-clock margin-right"></text>
          <time-picker v-model="time"></time-picker>
          <text class="al-form-item-tail-icon bi-chevron-right"></text>
        </view>
        <view class="al-form-item booking-duration">
          <text class="al-form-item-icon bi-hourglass-top margin-right-sm"></text>
          <view class="text-sm tags-row">
            <view class="cu-tag round" :class="selectedLength === 10 ? 'bg-blue' : ''" @tap="selectLength(10)">10分钟
            </view>
            <view class="cu-tag round" :class="selectedLength === 15 ? 'bg-blue' : ''" @tap="selectLength(15)">15分钟
            </view>
            <view class="cu-tag round" :class="selectedLength === 20 ? 'bg-blue' : ''" @tap="selectLength(20)">20分钟
            </view>
            <view class="cu-tag round" :class="selectedLength === 30 ? 'bg-blue' : ''" @tap="selectLength(30)">30分钟
            </view>
            <view class="cu-tag round" :class="selectedLength === 45 ? 'bg-blue' : ''" @tap="selectLength(45)">45分钟
            </view>
          </view>
        </view>
        <view class="al-form-item booking-topic-tags" v-if="status === 'loaded'">
          <text class="al-form-item-icon bi-bookmark-star margin-right-sm"></text>
          <view class="text-sm tags-row">
            <view class="cu-tag round margin-bottom-xs dashed" v-for="topic in counselor.topics"
              :class="selectedTags.includes(topic.name) ? 'bg-blue none' : ''" @tap="toggleTag(topic.name)">
              {{ topic.name }}
            </view>
          </view>
        </view>
        <view class="al-form-item booking-topic-question">
          <text class="al-form-item-icon bi-question-circle margin-right-sm"></text>
          <textarea maxlength="5" @input="textareaAInput" placeholder="输入你的具体问题..."></textarea>
        </view>
      </form>
    </view>
  </view>
</template>

<script setup lang="ts">
import TimePicker from "@/components/TimePicker.vue";
import CounselorProfileSmallTile from "@/counselor/CounselorProfileSmallTile.vue";
import CounselorService from "@/counselor/CounselorService";
import type { Counselor } from "@/counselor/model";
import { onReady } from "@dcloudio/uni-app";
import { reactive, type Ref } from "vue";
import { ref } from "vue";

const props = defineProps<{ counselorName: string, counselorId: string }>();

type Status = 'inited' | 'loading' | 'loaded' | 'failed';
const status: Ref<Status> = ref<Status>('inited');
const selectedTags: Ref<string[]> = ref<string[]>([]);
const selectedLength: Ref<number> = ref<number>(15);
let counselor: Counselor;

const time: Ref<number> = ref(-1);
const content: Ref<string> = ref('');

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

function toggleTag(tag: string) {
  const index = selectedTags.value.indexOf(tag);
  if (index > -1) {
    selectedTags.value.splice(index, 1);
  } else {
    selectedTags.value.push(tag);
  }
}

function selectLength(length: number = 15) {
  selectedLength.value = length;
}

function textareaAInput(e: Event) {
  console.log(e);
}

</script>

<style scoped lang="scss">
.booking {
  padding-top: 16rpx;
}

.booking-topic-question,
.booking-topic-tags {
  &.al-form-item {
    align-items: flex-start;
  }
}

textarea {
  border: 1rpx solid;
  border-radius: 8rpx;
}
</style>