import { Scene } from "../../../vendor/three/build/three.module";

export const createScene = (color = "#000000") => {
  const scene = new Scene();
  scene.background.set(color);
  return scene;
};
