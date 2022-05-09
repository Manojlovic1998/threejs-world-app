import { createCamera } from "./components/camera.js";
import { createRenderer } from "./system/renderer.js";
import { createScene } from "./components/scene.js";

class World {
  // 1. Create an instance of the World app
  constructor(container) {
    this.sceneContainer = container;
    this.scene = createScene();
    this.camera = createCamera(container.clientWidth / container.clientHeight);
    this.renderer = createRenderer();
  }
  // 2. Render the scene
  render() {}
}

export default World;
