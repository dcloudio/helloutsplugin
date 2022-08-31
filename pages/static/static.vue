<template>
    <view>
        <view></view>
    </view>
    <image :src="logo"></image>
</template>
<script lang="ts" setup>
import { getLogoPath } from '../../uni_modules/uts-advance'
const logo = getLogoPath()
</script>