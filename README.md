# HW09B

## Concept
This exercise creates dynamic, interactive art by transforming pixel arrays into kaleidoscopic patterns, driven entirely by user input. The lack of a camera is addressed by simulating dynamic input through noise functions and user-adjustable parameters.

## Design Process

1. Creative Approach:
   Explored kaleidoscopic symmetry to produce mesmerizing visuals.
   Simulated motion and input with noise and sliders for a fully interactive experience.

2. Core Features:

   Kaleidoscopic Effect: Symmetrical patterns are dynamically generated using p5.js's rotate() and translate() functions.
   User Interaction:
      Symmetry Adjustment: A slider enables users to control the number of symmetrical sections.
      Dynamic Patterns: Shapes and colors evolve over time based on noise functions.

3. Technical Implementation:

   Symmetry achieved by iterating through angular divisions using TWO_PI / symmetry.
   Noise-driven randomness creates smooth transitions in colors and shapes.
   DOM elements (createSlider()) allow real-time adjustment of parameters.
