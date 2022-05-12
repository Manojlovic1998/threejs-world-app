import { createCamera } from "./components/camera.js";
import { createRenderer } from "./system/renderer.js";
import { createScene } from "./components/scene.js";
import { createCube } from "./components/cube/cube.js";
import { createLight } from "./components/lights.js";

class World {
  // 1. Create an instance of the World app
  constructor(container, options) {
    this.sceneContainer = container;
    this.options = options;
    this.scene = createScene();
    this.camera = createCamera(container.clientWidth / container.clientHeight);
    "light" in options
      ? (this.light = createLight(options))
      : (this.light = createLight());
    this.scene.add(this.light);
    "phyCorrectLights" in options
      ? (this.renderer = createRenderer(options))
      : (this.renderer = createRenderer());
    container.append(this.renderer.domElement);
  }
  // 2. Render the scene
  render(object) {
    if ((object = "cube")) {
      const cube = createCube(this.options);
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
