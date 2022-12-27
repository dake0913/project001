import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';

const scene = new THREE.Scene();
// 2、创建相机
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

// 设置相机位置y
camera.position.set(0, 0, 10);
scene.add(camera);

const cubeGeometry = new THREE.BoxGeometry(1, 2, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xee0000 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);
// scene.FogBase(cube);
//更改物体位置
cube.position.x = 3;
// cube.rotation.x= -Math.PI/2;
// cube.rotation.set( Math.PI/4,0,0,'XZY');
gsap.to(".pink", cube.position, { x:200, rotation:360,duration:2,ease:'bounce.out' });


/* we need to add a light so we can see our cube - its almost
as if we're turning on a lightbulb within the room */
var light = new THREE.PointLight(0xFFFF00);
/* position the light so it shines on the cube (x, y, z) */
light.position.set(10, 0, 25);
scene.add(light);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// renderer.render(scene, camera);
const controls = new OrbitControls(camera, renderer.domElement);
function render(time) {
    // cube.position.x += 0.01;
    //每一帧旋转0.01度
    cube.rotation.x += 0.01;
    // if (cube.position.x > 5) {
    //     cube.position.x = 0;
    // }
    let t= (time/1000)%5;
    cube.position.x=t*1;
    
    renderer.render(scene, camera)
    requestAnimationFrame(render);
}
render();

const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );



