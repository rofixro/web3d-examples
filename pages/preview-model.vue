<script lang="ts" setup>
import { View3D } from "@egjs/vue3-view3d";
import "@egjs/vue3-view3d/css/view3d-bundle.css";
</script>

<template>
  <View3D
    class="view3d-wrapper"
    src="https://naver.github.io/egjs-view3d/model/RobotExpressive.glb"
  />
</template>

<style scoped>
.view3d-wrapper {
  width: 100%;
  height: 100vh;
}
</style>
