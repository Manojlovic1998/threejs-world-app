import {
  BoxBufferGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshBasicMaterial,
} from "../../../../vendor/three/build/three.module";

export const createCube = () => {
  // create a geometry
  const geometry = new BoxBufferGeometry(2, 2, 2);

  // create basic material
  const material = new MeshBasicMaterial();

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  return cube;
};