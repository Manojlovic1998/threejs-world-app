import {
  BoxBufferGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
} from "../../../../vendor/three/build/three.module.js";

export const createCube = (options = { material: "basic" }) => {
  // create a geometry
  const geometry = new BoxBufferGeometry(2, 2, 2);

  let material;
  // create material
  switch (options.material) {
    case "basic":
      material = new MeshBasicMaterial();
      break;
    case "standard":
      material = new MeshStandardMaterial();
      break;
  }

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  if ("rotation" in options.cube.transformation) {
    let { x, y, z } = options.cube.transformation.rotation;
    cube.rotation.set(x, y, z);
  }

  return cube;
};
