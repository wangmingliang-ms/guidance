<template>
    <view class="calendar">
        <view class="date-item" :class="{ selected: day.getDate() == selected.getDate() }" @tap='selected = day'
            v-for='(day, index) in next7Days' :key="index">
            <view class='today' v-if="day.getDate() == today.getDate()"></view>
            <view class="date-item-week">{{ getHeader(day) }}</view>
            <view class="date-item-date">{{ zero(day.getMonth() + 1) }}-{{ zero(day.getDate()) }}</view>
        </view>
    </view>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';

const WEEK_TEXT = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
const next7Days: Date[] = [];
const today: Date = new Date();
const selected: Ref<Date> = ref(today);

for (let i = 0; i < 7; i++) {
    let date: Date = new Date(today);
    date.setDate(today.getDate() + i);
    next7Days.push(date);
}

function zero(i: number): string {
    return i >= 10 ? i + '' : '0' + i;
}

function getHeader(date: Date): string {
    if (date.getDate() == today.getDate()) {
        return "今天";
    } else if (date.getDate() == today.getDate() + 1) {
        return "明天";
    }
    return WEEK_TEXT[date.getDay()];
}

</script>
<style lang="scss">
.calendar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    white-space: nowrap;
    padding: 8rpx 16rpx;

    .date-item {
        width: 84rpx;
        text-align: center;
        background: #f5f5f5;
        border-radius: 10rpx;
        font-size: 20rpx;
        display: flex;
        position: relative;
        flex-direction: column;
        padding: 6rpx;

        &-week {
            font-size: 14rpx;
            margin-bottom: 12rpx;
        }

        &-date {
            font-size: 24rpx;
        }

        &.gray {
            color: #ccc;
        }

        .today {
            position: absolute;
            top: 0rpx;
            right: 0rpx;
            width: 15rpx;
            height: 15rpx;
            border-radius: 50%;
            background: rgb(49, 120, 228);
            border: 3rpx solid #fff;
        }

        &.selected {
            background: rgb(49, 120, 228);
            border-radius: 10rpx;
            color: #fff;
        }
    }
}
</style>
  