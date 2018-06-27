<!-- 自编写轮播图组件 -->
<template>
	<div class="slide-show">
		<div class="slide-img">
			<a href="">
				<!-- 新图片 vue过渡&动画组件transition -->
				<transition>
					<img v-if="isShow" :src="">
				</transition>
				<!-- 老图片 -->
				<transition>
					<img v-if="" :src="">
				</transition>
			</a>
		</div>
	</div>
</template>
<script></script>
<style scoped></style>