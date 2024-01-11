<script lang="ts" setup>
import {
  Viewer,
  Math,
  Matrix3,
  Matrix4,
  Cartesian3,
  Transforms,
  Cesium3DTileset,
} from "cesium";

const config = useRuntimeConfig();
const tilesetUrl = config.public.TILES_MODEL_URL;

function update3dtilesMaxtrix(tileset: Cesium3DTileset) {
  const centerLongitude = longitudeTmp.value + formState.value.longitude;
  const centerLatitude = latitudeTmp.value + formState.value.latitude;
  const { rotationXAngle, rotationYAngle, rotationZAngle, height, size } =
    formState.value;
  const params = {
    tx: centerLongitude, // 模型中心X轴坐标（经度，单位：十进制度）
    ty: centerLatitude, // 模型中心Y轴坐标（纬度，单位：十进制度）
    tz: height, // 模型中心Z轴坐标（高程，单位：米）
    rx: rotationXAngle, // X轴（经度）方向旋转角度（单位：度）
    ry: rotationYAngle, // Y轴（纬度）方向旋转角度（单位：度）
    rz: rotationZAngle, // Z轴（高程）方向旋转角度（单位：度）
    scale: size, //缩放比例
  };
  // 旋转
  const mx = Matrix3.fromRotationX(Math.toRadians(params.rx));
  const my = Matrix3.fromRotationY(Math.toRadians(params.ry));
  const mz = Matrix3.fromRotationZ(Math.toRadians(params.rz));
  // 旋转矩阵Matrix3
  const rotationX = Matrix4.fromRotationTranslation(mx);
  const rotationY = Matrix4.fromRotationTranslation(my);
  const rotationZ = Matrix4.fromRotationTranslation(mz);
  // 平移旋转矩阵Matrix4
  const position = Cartesian3.fromDegrees(params.tx, params.ty, params.tz);
  const m = Transforms.eastNorthUpToFixedFrame(position);
  // 缩放
  const scale = Matrix4.fromUniformScale(params.scale);
  Matrix4.multiply(m, scale, m);
  // 旋转、平移矩阵相乘
  Matrix4.multiply(m, rotationX, m);
  Matrix4.multiply(m, rotationY, m);
  Matrix4.multiply(m, rotationZ, m);
  // 赋值给tileset
  tileset.root.transform = m;
}

async function handleReady(viewer: Viewer) {
  const tileset = await Cesium3DTileset.fromUrl(tilesetUrl);

  update3dtilesMaxtrix(tileset);
  viewer.scene.primitives.add(tileset);
  viewer.zoomTo(tileset);
}
</script>

<template>
  <cesium-container @ready="handleReady" />
</template>
