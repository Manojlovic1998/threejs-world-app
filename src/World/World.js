import { createCamera } from "./components/camera.js";
import { createRenderer } from "./system/renderer.js";
import { createScene } from "./components/scene.js";
import { createCube } from "./components/cube/cube.js";

class World {
  // 1. Create an instance of the World app
  constructor(container, options = { phyCorrectLights: false }) {
    this.sceneContainer = container;
    this.scene = createScene();
    this.camera = createCamera(container.clientWidth / container.clientHeight);
    this.renderer = createRenderer(options);
    container.append(this.renderer.domElement);
  }
  // 2. Render the scene
  render(object) {
    if ((object = "cube")) {
      const cube = createCube();
      this.scene.add(cube);
    }
    // draw a single frame
    this.renderer.render(this.scene, this.camera);
  }

  // Resize
  resize(container) {
    // Set the camera's aspect ratio
    this.camera.aspect = container.clientWidth / container.clientHeight;

    // update the camera's frustum
    this.camera.updateProjectionMatrix();

    // update the size of the render AND the canvas
    this.renderer.setSize(container.clientWidth, container.clientHeight);

    // set the pixel ratio (for mobile devices)
    this.renderer.setPixelRatio(window.devicePixelRatio);
  }
}

export default World;
