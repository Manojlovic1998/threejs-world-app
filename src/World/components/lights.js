import { DirectionalLight } from "../../../vendor/three/build/three.module.js";

export const createLight = (
  options = {
    light: { type: "sun", position: { x: 10, y: 10, z: 10 }, intensity: 8 },
  }
) => {
  let light;

  // Self Note: Better logic has to be implemented here
  // Directional light :obj can be created even without intensity passed in as non default arg.
  // a prevention of such action should be implemented in near future for easier debugging.
  // three.js lib does not throw errors.
  switch (options.light.type) {
    case "sun":
      light = new DirectionalLight(
        options.light.color,
        options.light.intensity
      );
  }

  if ("position" in options.light) {
    let { x, y, z } = options["light"].position;
    light.position.set(x, y, z);
  }

  return light;
};
