import { WebGLRenderer } from "../../../vendor/three/build/three.module.js";

export const createRenderer = (options = { phyCorrectLights: false }) => {
  const renderer = new WebGLRenderer();

  // Turn on the physically correct light model
  if ("phyCorrectLights" in options) {
    renderer.physicallyCorrectLights = options.phyCorrectLights;
  }

  return renderer;
};
