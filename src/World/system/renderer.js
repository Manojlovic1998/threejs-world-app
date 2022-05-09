import { WebGLRenderer } from "../../../vendor/three/build/three.module";

export const createRenderer = () => {
  const renderer = new WebGLRenderer();

  return renderer;
};
