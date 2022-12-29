import * as TRHEE from './lib/build/three.module.js';

const scene = new TRHEE.Scene();
const axes = new TRHEE.AxesHelper(20);
const loader = new TRHEE.FileLoader();
const light = new TRHEE.AmbientLight(0x404040);
const container = document.getElementById('container');
const renderer = new TRHEE.WebGLRenderer({ antialias: true, alpha: true });
const camera = new TRHEE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);

function main() {
  initAxes();
  initRenderer();
  initCamera();
  initLight();
  loadMap();
  animate();
}

function initAxes() {
  scene.add(axes);
}

function initRenderer() {
  renderer.setClearColor(new TRHEE.Color(0x000000));
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);
}

function initCamera() {
  camera.position.set(0, 0, 0);
  camera.lookAt(0, 0, 0);
}

function initLight() {
  scene.add(light);
}

function loadMap() {
  loader.load('./assets/json/620000.json', (data) => {
    initMap(JSON.parse(data));
  })
}

function initMap(ganSuJson) {
  const { center } = ganSuJson.propertity;
  const projection = d3.geoMercator().center(center).scale(300).translate([0, 0]);

  ganSuJson.features.forEach(city => {
    const { geometry, properties } = city;
    const { coordinates } = geometry;

    coordinates.forEach(positions => {
      positions.forEach(position => {
        // 将经纬度坐标转换为 WebGL 坐标
        console.log(position);
      })
    })
  })
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

main();
