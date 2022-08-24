<template>
    <view>当前电量：{{ capacity }}</view>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { getBatteryCapacity } from '../../uni_modules/test-uts-battery'
const capacity = ref(getBatteryCapacity())
</script>