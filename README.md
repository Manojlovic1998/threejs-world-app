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

The most important three.js PBR material is the `MeshStandardMaterial`.

### Lighting & Materials

Lighting and materials are intrinsically linked in computer graphics rendering systems. When working with any type of PBR we will need to also add light to the scene.

Three.js provides us with the `DirectionalLight`, this type of light mimics the rays from a faraway light source, for example like the sun.

Note: The `MeshBasicMaterial` is not PBR and does not require a light.

_Physically Correct Lighting_ is not the same thing as PBR. However, it makes sense to use both together for a complete physically accurate scene.

_Physically Correct Lighting_ means calculating how light fades with distance from a light source using real-world physics equations.

_Physically based rendering_ involves calculating in a physically correct manner, how light reacts with surfaces.

Thankfully we don't have to write these equations as they are already implemented into three.js lib.

```JavaScript
    import { WebGLRenderer() } from "three";

    const renderer = new WebGLRenderer();

    // Turn on the physically correct light model
    renderer.physicallyCorrectLights = true;
```

Note: It is disabled by default to maintain backwards compatibility. Furthermore, there are few more things that need to be configured in order to get the colors and lighting to work in a physically correct manner.

### Importance of Physically Sized Scenes

For physically correct lighting to be accurate you need to build physically sized scenes. This way the light obj will interact with the scene in an accurate manner.

**Units of size in three.js are meters**

- The 2 x 2 x 2 cube is two meters long on each side.
- `camera.far = 100` means that you can see for a distance of one hundred meters.
- _1 unit = 1 meter_

_Using meters is a convention rather than a rule. If you don't follow it, everything except for physically accurate lighting will still work._

Note: There is exception for when you are building a huge-scale space scenes then you might decide to use a unit of measurement that is bigger than 1m.
