# ThreeJS Class Implementation

Goal of this project is to create a component that can be dropped into any web app. Files should form a self-contained components that know nothing about the web app on which they will be displayed.

## Workflow

**Non-model approach (aka. implementation details)**

1. Initial Setup
2. Create the scene
3. Create a camera
4. Create the cube and add it to the scene
5. Create the renderer
6. Render the scene

**Using World Class (interface)**

1. Create an instance of the World app
2. Render the scene

## Physically Based Rendering and Lighting

PBR has become the industry-standard method of rendering both real-time and cinematic 3D scenes.

PBR uses a real-world physics to calculate the way surfaces react to light.

Three.js allows us to use the same physically correct rendering techniques. Furthermore, Three.js also allows us to run these in browser and on low-power devices such as smartphones.

The most important three.js PBR material s the `MeshStandardMaterial`.
