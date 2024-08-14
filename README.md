# LandingPage

A basic landing page made with TailWindCSS and basic HTML. So far it is a simple draft which I will improve in another repository.

## Features

* A basic search bar.
* A basic hero section, content section, project portfolio section and footer.

### Features to add in the future

* Design which can adapt to devices of varying screen sizes.
* A more comprehensive, compelling and complete outlook of myself and my projects.
* A hero section, content section, project portfolio section and footer.
* Dark mode 🌃
* A navigation bar and search bar which follows the user as they scroll.
* A working contact form.

## How to work with my landing page.

First, you must download [git](https://git-scm.com/downloads) and npm (if you are on Linux, [nvm](https://github.com/nvm-sh/nvm) is recommended, on Windows, [fnm](https://github.com/Schniz/fnm)).

Next, clone this repository and access the directory:

### If you only want the latest commit (recommended if you just want to try it out)

```bash
git clone --depth=1 https://github.com/PabloLuisMolinaBlanes/LandingPageI.git
cd LandingPageI
```
### If you want to develop upon it (recommended if you want to develop upon this repository)

```bash
git clone https://github.com/PabloLuisMolinaBlanes/LandingPageI.git
cd LandingPageI
```
Now, you only need to access src/index.html, and open it with your browser. You are done!



## Modifying the index.html style file. 

Head to the directory LandingPageI and run

```bash
npm install
```

Wait until it is completed; and then open up TailWindCSS

```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

And then access the index.html file and modify the classes; the changes should be reflected in the src/output.css file (and you don't need to modify the CSS yourself!)
