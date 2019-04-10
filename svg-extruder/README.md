# AFrame + SVG-Extruder

![hsm 3d-logo screenshot](hsm-3d.jpg)

1. Create SVG using your favourite Vector-Program (or Text-Editor)
2. Clean up the SVG (see limitations)
3. Create 3D Logo in A-Frame

## Components

[A-Frame SVG-Extruder](https://github.com/luiguild/aframe-svg-extruder) extrudes SVG to a 3D-Shape

### Limitations

Very limited in terms of SVGs it can handle

- Can't handle `use` and `symbol` tags
- Does not relative coordinates in paths correctly (offset)
- Color information is not used
- Nice results with prepared SVGs (see example)

### Embedding

	<script src="https://unpkg.com/aframe-svg-extruder@1.0.0/dist/index.min.js"></script>


### Parameters

| Parameter | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| **src** | String | null | true | Pass the `path` of your SVG file |
| **proportional-scale** | Number | 1 | false | Proportionally how many times you want that your file grow |
| **extrude** | Number | 0.1 | false | The depth of the extrusion |
| **z-factor** | Number | 0.005 | false | This will help you control the z-fighting on complex SVG layouts |
| **override-color** | String | null | false | Set an `hex (eg: #000000)` color if you want override the original colors of file |

