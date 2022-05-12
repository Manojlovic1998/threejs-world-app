import World from "./World/World.js";

const main = () => {
  // Scene wrapper container
  const container = document.getElementById("scene-container");

  // World configuration
  let worldConfig = {
    phyCorrectLights: true,
    material: "standard",
    cube: {
      transformation: {
        rotation: { x: -0.5, y: -0.1, z: 0.8 },
      },
    },
  };
  // 1. Create an instance of the World app
  const world = new World(container, worldConfig);

  // 2. Renderer the scene
  world.resize(container);
  world.render("cube");
};

main();
