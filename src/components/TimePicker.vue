<template>
    <picker mode="multiSelector" @change="timeChanged" @columnchange="columnChanged" :value="selectedIndexes"
        :range="optionLabels">
        <view class="picker">
            <text class="line-blue">
                {{ optionLabels[0][selectedIndexes[0]] }}，{{ optionLabels[1][selectedIndexes[1]] }}{{
                    optionLabels[2][selectedIndexes[2]] }}
            </text>
        </view>
    </picker>
</template>
  
<script setup lang="ts">
import type { Ref } from 'vue';
import { ref } from "vue";

type Props = { modelValue?: number };
const props: Props = withDefaults(defineProps<Props>(), { modelValue: -1 });
const emit = defineEmits(['update:modelValue'])

const today = new Date();
const dates: Date[] = [...Array(3).keys()].map(i => new Date(today.getFullYear(), today.getMonth(), today.getDate() + i));
const hours: number[] = [...Array(24).keys()];
const minutes: number[] = [...Array(12).keys()].map(i => i * 5);
const labelDates: string[] = dates.map(d => `${zero(d.getMonth() + 1)}月${zero(d.getDate())}日 ${getHeader(d)}`);
const labelHours: string[] = hours.map(h => `${h}点`);
const labelMinutes: string[] = minutes.map(m => `${m}分`);
const optionLabels: Ref<string[][]> = ref([labelDates, labelHours, labelMinutes]);
const options: [Date[], number[], number[]] = [dates, hours, minutes];

const selectedIndexes: Ref<number[]> = ref([0, 0, 0])
let selectingIndexes: number[] = [0, 0, 0];
let selectedTime = new Date(-1);
if (props.modelValue == -1) {
    columnChanged({ detail: { column: 0, value: 0 } });
    columnChanged({ detail: { column: 1, value: 0 } });
    selectedIndexes.value = [...selectingIndexes];
}
if (props.modelValue! > Date.now() + 15 * 1000 * 60) {
    selectedTime = new Date(props.modelValue!);
    const dateIndex = options[0].findIndex(d => d.getFullYear() == selectedTime.getFullYear() && d.getMonth() == selectedTime.getMonth() && d.getDate() == selectedTime.getDate());
    columnChanged({ detail: { column: 0, value: dateIndex } });
    const hourIndex = options[1].findIndex(h => h >= selectedTime.getHours());
    columnChanged({ detail: { column: 1, value: hourIndex } });
    const minuteIndex = options[2].findIndex(m => m >= selectedTime.getMinutes());
    columnChanged({ detail: { column: 2, value: minuteIndex } });
    selectedIndexes.value = [...selectingIndexes];
}

function timeChanged(e: { detail: { value: number[] } }) {
    selectedIndexes.value = e.detail.value;
    selectingIndexes = e.detail.value;
    if (selectingIndexes[0] == 0 && selectingIndexes[1] == 0) {
        selectedTime = new Date(-1);
    } else {
        selectedTime = new Date(options[0][selectingIndexes[0]]);
        selectedTime.setHours(options[1][selectingIndexes[1]])
        selectedTime.setMinutes(options[2][selectingIndexes[2]])
    };
    console.log(selectedTime);
    emit('update:modelValue', selectedTime.getTime());
}

function columnChanged(e: { detail: { column: number, value: number } }) {
    selectingIndexes[e.detail.column] = e.detail.value;
    updateOptions();
}

function updateOptions() {
    if (selectingIndexes[0] == 0) { // this date
        const now = new Date();
        options[1] = [-1, ...(hours.filter(h => h > now.getHours() || h == now.getHours() && now.getMinutes() < 45))];
        optionLabels.value[1] = options[1].map(h => h == -1 ? '现在' : `${h}点`);
        if (selectingIndexes[1] == 0) { // now
            selectingIndexes[2] = 0;
            options[2] = [];
        } else if (selectingIndexes[1] == 1) { // this hour
            options[2] = minutes.filter(h => h > now.getMinutes() + 15);
        } else {
            options[2] = minutes;
        }
        optionLabels.value[2] = options[2].map(m => `${m}分`);
    } else {
        optionLabels.value[1] = labelHours;
        optionLabels.value[2] = labelMinutes;
        options[1] = hours;
        options[2] = minutes;
    }
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
    return ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][date.getDay()];
}
</script>
  
<style scoped lang="scss"></style>