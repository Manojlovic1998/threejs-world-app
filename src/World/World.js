import { createCamera } from "./components/camera.js";
import { createScene } from "./components/scene.js";

class World {
  // 1. Create an instance of the World app
  constructor(container) {
    this.sceneContainer = container;
    this.scene = createScene();
    this.camera = createCamera();
  }
  // 2. Render the scene
  render() {}
}

export default World;
