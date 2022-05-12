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
    import { WebGLRenderer } from "three";

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

### Lighting in Three.js

Objects receive the light in two ways:

1. _Directional lighting_: light rays that come directly from the light source and hit an object.
2. _Indirect lighting_: light rays that have bounced off the walls and other objects in the room before hitting an object, changing color, and losing intensity with each bounce.

The light classes in the three.js are split into two types:

1. _Direct lights_, which simulate direct lighting.
2. _Ambient lights_, which are cheep and somewhat believable way of faking indirect light.

Note: Indirect light is hard to simulate because device needs to calculate an infinite number of light rays bouncing forever from all the surfaces in the scene. No computer is powerful enough to do that today, even if we limit the number of rays to few thousand with each making just couple of bounces (aka. raytracing), it will still take too long to calculate it all in the real-time. Therefore, we need a way to fake indirect light.

There are several ways for faking indirect light in three.js such as: ambient light, image-based lighting (IBL) and light probes.

### Direct Lighting

There are total of four direct light types available in the three.js core, each of which simulates a common real-world source of light:

- `DirectionalLight` => Sunlight
- `PointLight` => Light Bulbs
- `RectAreaLight` => Strip lighting or bright windows
- `SpotLight` => Spotlight

Directional light was designed to mimic a distance source of light such as the sun. Light rays from a directional light don't fade with distance.

The light rays of directional light are parallel and shine from a position and towards a target.

### Shadows

Even when using PBR, objects don't block light, by default in three.js. Every object in path will receive illumination, even if there is a wall in the way.

Shadows have to be manually enabled, object by object, and light by light. Important to note is that shadows are expensive, so you usually only enable shadows for one light or two lights, especially if your scene needs to work on mobile devices.

Note: _Only direct light types can cast shadows, ambient lights cannot._

### Three.js Directional Light

Three.js's `DirectionalLight` was designed to mimic a distance source of light, such as sun. Light rays from a `DirectionalLight` don't fade with distance.

**All objects in the scene will be illuminated equally brightly no matter where they are placed. (even behind the light)**

**The light rays of a `DirectionalLight` are parallel and shine _from_ position and _towards_ the target.**

The `DirectionalLight` constructor takes two parameters, _color_ and _intensity_

```JavaScript
import {DirectionalLight} from "three";

const light = DirectionalLight("red", 8);
```

The `DirectionalLight` shines from `light.position`,to `light.target.position`.

```JavaScript
light.position.set(10, 10, 10);
```

_Now it is shining from (10, 10, 10) towards position (0, 0, 0)_

### Materials

All three.js materials, inherit from the `Material` base class. Therefore, a lot of the same settings can be found across different materials.

You can't use `Material` directly. Instead, you must always use one of the derived classes like `MeshStandardMaterial` or `MeshBasicMaterial`.

`MeshStandardMaterial` accepts an object as parameter to which you can pass spec. of the material you are instantiating.

```JavaScript
import {MeshStandardMaterial} from "three";

const spec = {
    color: 'purple',
}

const material = new MeshStandardMaterial(spec)
```

### Transformation

The technical term for moving objects around is _transformation_.

_Translation_, _rotation_, and _scaling_ (_TRS_) are the three fundamental transformations for positioning objects in the 3D space.

Adjusting the rotation of an object works the same as setting position.

```JavaScript
cube.rotation.set(-0.5, -0.1, 0.8);
```
