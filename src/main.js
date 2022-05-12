import World from "./World/World.js";

const main = () => {
  // Scene wrapper container
  const container = document.getElementById("scene-container");

  // World configuration
  let worldConfig = {
    phyCorrectLights: true,
    material: "standard",
  };
  // 1. Create an instance of the World app
  const world = new World(container, worldConfig);

  // 2. Renderer the scene
  world.resize(container);
  world.render("cube");
};

main();
