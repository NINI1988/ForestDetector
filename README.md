# ForestDetector
Calculate a score from the Forest Shuffle (german Mischwald) board game with computer vision.

See https://nini1988.github.io/ForestDetector/

# Examples
### Home
<img src="images/Home.png" width="300">

### AnnotationEditor
![AnnotationEditor](images/AnnotationEditor.jpg)

# Third party modules
- This project uses https://github.com/glaures/forestshuffle for score calculation, translations and symbols.
  - The project is licensed under Apache License, Version 2.0. The original license can be found in [src/third_party/glaures_forestshuffle/LICENSE.txt](src/third_party/glaures_forestshuffle/LICENSE.txt).

- This project uses https://github.com/ultralytics/ultralytics for the training of the yolo model for card detection.
  -  The project is licensed under AGPL-3.0 license. The original license can be found in https://github.com/ultralytics/ultralytics/blob/main/LICENSE.

# Angular description
<details>
  <summary>Details</summary>
  
## Development server

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.2.

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

</details>
