<script lang="ts" setup>
import { Ion, Viewer } from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

const config = useRuntimeConfig();
const emit = defineEmits(["ready"]);
const props = defineProps({ options: Object });

window.CESIUM_BASE_URL = "/Cesium/";
Ion.defaultAccessToken = config.public.CESIUM_TOKEN;

async function initCesium() {
  try {
    const options = {};
    const viewer = new Viewer("cesium-container", props.options || options);

    emit("ready", viewer);
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  initCesium();
});
</script>

<template>
  <div id="cesium-container"></div>
</template>

<style scoped>
#cesium-container {
  height: 100vh;
}
</style>
