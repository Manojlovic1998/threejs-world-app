import { PerspectiveCamera } from "../../../vendor/three/build/three.module";

export const createCamera = (
  aspect,
  position = { x: 0, y: 0, z: 10 },
  fov = 35,
  near = 0.1,
  far = 100
) => {
  const camera = new PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(position.x, position.y, position.z);

  return camera;
};
