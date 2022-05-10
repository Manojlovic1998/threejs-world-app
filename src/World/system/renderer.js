import { WebGLRenderer } from "../../../vendor/three/build/three.module.js";

export const createRenderer = (options) => {
  const renderer = new WebGLRenderer();

  // Turn on the physically correct light model
  if (options.phyCorrectLights) {
    renderer.physicallyCorrectLights = options.phyCorrectLights;
  }

  return renderer;
};
