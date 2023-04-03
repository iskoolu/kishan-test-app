# kishan-test-app
This is a Next.js app that demonstrates how to build a web application using Next.js. The app includes the following features:

-Routing with Next.js
-Server-side rendering with Next.js
-CSS styling with Tailwind CSS

#Getting Started
To get started, first clone this repository:

git clone (https://github.com/iskoolu/kishan-test-app.git)
cd kishan-test-app
Then install the dependencies and start the development server:

#dependencies
install TAilwind for nextjs using this command lines:
-npm install -D tailwindcss postcss autoprefixer
-npx tailwindcss init -p
-Configure your template paths
-Add the Tailwind directives to your CSS

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

project
├── public
│   ├── bchain.png
│   └── ...
├── src
│   ├── Components
│   │   ├── Chapter.js
│   │   ├── Footer.js
│   │   ├── Layout.js
│   │   ├── Navbar.js
│   │   └── Services.js
│   ├── customhook
│   │   └── useOutsideClick.js
│   ├── pages
│   │   ├── api
│   │   │   └── hello.js
│   │   ├── app.js
│   │   ├── document.js
│   │   ├── Environment.js
│   │   ├── Faq.js
│   │   ├── index.js
│   │   └── Menu.js
│   ├── styles
│   │   ├── global.css
│   │   └── home.module.css
│   ├── staticdata
│   │   └── appContents.js
│   └── styled-components
│       ├── Accordian.js
│       ├── Burgermenu.js
│       └── DropDownlink.js
└── README.md


These are the Components and Style that have been used to create the Modal App using Next.js 

In this app, did not use any third party styled components packages like mui, etc. Instead of that we created our own styled components with Tailwind CSS. Available styled components below,

The Styled Component in the Cna be Reused as manu=y times 

useOutsideClick.js is used for detect the click event outside of the element. Add ref with useRef hook to which element is wants to detect and pass the function which is what action to be perform if event is detected.
Deploying the App
To deploy the app, you can use a service like Vercel, which supports Next.js out of the box. Simply connect your GitHub repository to Vercel and the app will be automatically deployed when you push changes to the repository.
