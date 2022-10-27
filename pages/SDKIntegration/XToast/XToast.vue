<template>
	<button @tap="testToastShow">调用XToast弹窗</button>
</template>

<script>
	import { showToast } from '@/uni_modules/uts-toast'
	
	
	export default {
		
		data() {
			return {
			}
		},
		methods:{
			testToastShow(){
				showToast();
			}
		}
		
	}
	
	
</script>

<style>
</style>