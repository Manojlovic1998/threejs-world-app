import World from "./World/World.js";

const main = () => {
  // Scene wrapper container
  const container = document.getElementById("scene-container");

  // 1. Create an instance of the World app
  const world = new World(container);

  // 2. Renderer the scene
  world.resize(container);
  world.render("cube");
};

main();
