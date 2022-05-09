import { Scene, Color } from "../../../vendor/three/build/three.module.js";

export const createScene = (color = "#000000") => {
  const scene = new Scene();
  // Set scene background color
  scene.background = new Color(color);

  return scene;
};
