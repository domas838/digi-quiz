<script setup>
import { store } from '../store'
import {onMounted, reactive} from "vue";
import {event} from "vue-gtag";
import {changeUrlPath} from "@/helpers";

const props = defineProps(['q', 'title', 'days', 'timeRanges', 'storeVariableName'])

let localState = reactive({
    isAllSelected: false
})

const selectPreferredTime = (day, from, to, dayPeriod) => {
    const clone = store[props.storeVariableName].map((x) => x);
    const index = getSelectedValueIndex(day, from, to, dayPeriod);

    if (index === -1) {
        clone.push({
            day: day,
            from: from,
            to: to,
            dayPeriod: dayPeriod
        });
    } else {
        clone.splice(index, 1);
    }

    store[props.storeVariableName] = clone;
}

const selectAll = () => {
    if (
        store[props.storeVariableName].length ===
        props.timeRanges.length * props.days.length
    ) {
        store[props.storeVariableName] = [];
        localState.isAllSelected = false;
    } else {
        const allValues = [];
        for (let i = 0; i < props.days.length; i++) {
            for (let x = 0; x < props.timeRanges.length; x++) {
                allValues.push({
                    day: props.days[i],
                    from: props.timeRanges[x].from,
                    to: props.timeRanges[x].to,
                    dayPeriod: props.timeRanges[x].dayPeriod,
                });
            }
        }
        store[props.storeVariableName] = allValues;
        localState.isAllSelected = true;
    }

}

onMounted(() => {
    selectAll()
})

const confirm = () => {
    event('quiz_question_answered', {
      question_number: store.step,
      question_name: props.title,
      // question_answer: input
    })

    store.step += 1;

    changeUrlPath('/' + store.respondent + '/' + store.step)

    store.quizAnswers[props.q.id] = store[props.storeVariableName]
}

const getSelectedValueIndex = (day, from, to, dayPeriod) => {
    return (store[props.storeVariableName] || []).findIndex(
        (selectedValue) =>
            selectedValue.day === day &&
            selectedValue.from === from &&
            selectedValue.to === to &&
            selectedValue.dayPeriod === dayPeriod
    );
};
</script>

<template>
    <h1>{{ title }}</h1>
    <div class="w-fit m-auto bg-white rounded-xl px-5 py-2.5 shadow-lg">
        <table>
            <thead>
                <tr>
                    <th class="mb-4 p-1 sm:p-4 pr-7"></th>
                    <th class="mb-4 p-1 sm:p-4 font-normal" v-for="day in props.days" :key="day">{{ day }}</th>
                </tr>
            </thead>
            <tbody>
                <tr class="" v-for="timeRange in props.timeRanges" :key="`${timeRange.from}-${timeRange.to}`">
                    <td class="text-center p-1 sm:p-4 pr-7">{{ `${timeRange.from} - ${timeRange.to} ${timeRange.dayPeriod}` }}</td>
                    <td class="text-center p-1 sm:p-4 border-solid border-t-2 border-gray-700" v-for="day in days" :key="day">
                        <button @click="selectPreferredTime(day, timeRange.from, timeRange.to, timeRange.dayPeriod)">
                            <span>
                                <input type="checkbox" name="subjects" :checked="getSelectedValueIndex(day, timeRange.from, timeRange.to, timeRange.dayPeriod) > - 1" />
                                <img
                                    src="../assets/images/checkbox.svg"
                                    alt=""
                                    class="custom-checkbox"
                                    width="30"
                                />
                                <img
                                    src="../assets/images/checkbox-checked.svg"
                                    alt=""
                                    class="custom-checkbox-checked"
                                    width="30"
                                    style="height: 24px;"
                                />
                            </span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="flex my-2">
            <button @click="selectAll()">
            <div class="mr-1">
                <input type="checkbox" name="subjects" :checked="localState.isAllSelected" />
                <img
                    src="../assets/images/checkbox.svg"
                    alt=""
                    class="custom-checkbox"
                    width="30"
                />
                <img
                    src="../assets/images/checkbox-checked.svg"
                    alt=""
                    class="custom-checkbox-checked"
                    width="30"
                />
            </div>
            </button>
            {{ $t('SelectAll') }}
        </div>
    </div>

    <div class="mt-10">
        <button @click="confirm()" class="benefit-btn">
            {{ $t('Continue') }}
            <img src="../assets/images/arrow-right.svg" alt="Next" />
        </button>
    </div>
</template>

