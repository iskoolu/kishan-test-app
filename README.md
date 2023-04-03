# kishan-test-app
This is a sample Next.js app that demonstrates how to build a basic web application using Next.js. The app includes the following features:

Routing with Next.js
Server-side rendering with Next.js
CSS styling with Tailwind CSS

Getting Started
To get started, first clone this repository:

git clone https://github.com/iskoolu/alkimi-test-app.git
cd alkimi-test-app
Then install the dependencies and start the development server:

npm install
npm run dev
The app should now be running on http://localhost:3000. You can make changes to the code and the app will automatically reload.

Available Scripts
In the project directory, you can run:
npm run dev
Runs the app in development mode. The app will automatically reload if you make changes to the code.
npm run build
Builds the app for production. The output files will be stored in the out directory.
npm run start
Starts the app in production mode. You must first run npm run build to build the app.
npm run lint
Lints the code using ESLint.

Folder Structure
The project has the following folder structure:

├── public/
│   └── bchain.png

├── pages/
│   ├── EnvStatement.tsx
│   ├── Faq.tsx
│   ├── index.tsx
│   ├── Menu.tsx
│   ├── Nft.tsx
│   ├── Projects.tsx
│   └── ├── components/
│       ├── Footer.tsx
│       ├── Header.tsx
│       ├── Layout.tsx
│       ├── SectionBox.tsx
│       └── Services.tsx
├── styles/
│   ├── globals.css
│   └── Home.module.css
├── styled-components/
│   ├── Accordion.css
│   ├── BurgerMenu.css
│   └── DropDownLink.css
├── staticdata/
│   └── appContents.tsx
├── public/
│   ├── favicon.ico
│   ├── image.png
│   └── ...
├── next.config.js
├── package.json
└── ...
components/ contains all the React components used in the app.
pages/ contains all the Next.js pages used in the app.
styles/ contains all the CSS styles used in the app.
public/ contains all the public assets used in the app, such as images and favicon.
styled-components/ contains all the styled components like dropdown, etc.
staticdata/ contains all the labels and contents used in the app.
customhooks/ contains the custom hooks which created with react and typescript used in the app.
Styled Components
In this app, did not use any third party styled components packages like mui, etc. Instead of that we created our own styled components with Tailwind CSS. Available styled components below,

BurgerMenu.js is the Menu Icon placed in NavBar. When it's clicked it will change to close symbol(X).
DropDownLink.js is combine with dropdown menu and NextJs link components. Pass pathname and dropdown label as props.
Accordion.js is have pass title and content as props. It will return collapse style component.
Custom Hooks
It was created to reuse in many components, this can be imported in the component to leverage the feature,

useOutsideClick.js is used for detect the click event outside of the element. Add ref with useRef hook to which element is wants to detect and pass the function which is what action to be perform if event is detected.
Deploying the App
To deploy the app, you can use a service like Vercel, which supports Next.js out of the box. Simply connect your GitHub repository to Vercel and the app will be automatically deployed when you push changes to the repository.
