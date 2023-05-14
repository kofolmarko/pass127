# Pass127

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Development 

The application we've developed can be described as a "password generator" with a unique approach. Instead of relying on a single text input field, it utilizes multiple input sources to generate passwords. The generated passwords are a combination of the coordinates of text input fields and a user-drawn pattern. The primary goal of the application is to create complex and secure passwords that are resistant to brute force attacks, while still being easy for users to remember.

Our application takes the form of a Chrome extension and does not store any user-specific information, such as salts or passwords. This allows users to install the extension on any device and access their preferred profiles without concerns about data security.

In the final version of the application, we plan to introduce additional options to further enhance password generation. For example, users will be able to incorporate the URL of the website they want to log in to, as well as the last song they listened to on Spotify, into the password generation process. Users will have the flexibility to choose any combination of these inputs based on their preferences.

It's worth noting that we developed the password generation algorithms from scratch instead of relying on existing libraries. We focused on ensuring that the original inputs cannot be easily inferred from the resulting passwords. This was achieved by encoding each character in the password using the previous character and an index/permutation.

For the encoding process of the "grid inputs" section of the password, we employed a more complex algorithm. It generates a unique permutation of all the allowed characters for password generation based on the positions of non-empty text fields. To increase the complexity of the password, we replace empty fields with the word "empty" in different languages. Then, for each character in the grid, we shift it one position to the right in the generated permutation. By referencing the original text, we determine the value of the new character based on its position in the permuted string. This process is repeated for all characters in the grid. To avoid repeating passwords that contain consecutively entered words in different fields, we incorporate the length of the currently processed input field into the shifting index.

## Run the extention

The extension was developed using the Anguar framework.

Run the extension:

Install requiremenst for running Angular https://angular.io/start
Run npm -i
To run like a web app run ng serve
To run as a Chrome extension run: ng build
Go to Google Chrome and type: chrome://extensions
Enable developer mode
Click load unpacked
Navigate to built Angular project (dist -> pass127) and upload
Extension should be installed
