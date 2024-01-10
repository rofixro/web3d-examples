<script lang="ts" setup>
import { Viewer, Cesium3DTileset } from "cesium";

const config = useRuntimeConfig();
const tilesetUrl = config.public.TILES_MODEL_URL;

async function handleReady(viewer: Viewer) {
  const tileset = await Cesium3DTileset.fromUrl(tilesetUrl);

  viewer.scene.primitives.add(tileset);
  viewer.zoomTo(tileset);
}
</script>

<template>
  <cesium-container @ready="handleReady"></cesium-container>
</template>
