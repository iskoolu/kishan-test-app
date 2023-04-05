# kishan-test-app
This is a Next.js app that demonstrates how to build a web application using Next.js. The app includes the following features:

-Routing with Next.js
-Server-side rendering with Next.js
-CSS styling with Tailwind CSS

# Getting Started
To get started, first clone this repository:

git clone (https://github.com/iskoolu/kishan-test-app.git)
cd kishan-test-app
Then install the dependencies and start the development server:

# Dependencies
install Tailwind for nextjs using this command lines:
-npm install -D tailwindcss postcss autoprefixer
-npx tailwindcss init -p
-Configure your template paths
-Add the Tailwind directives to your CSS

npm install
npm run dev
The app should now be running on http://localhost:3000. You can make changes to the code and the app will automatically reload.

# Available Scripts
In the project directory, you can run:
`npm run dev`
Runs the app in development mode. The app will automatically reload if you make changes to the code.
`npm run build`
Builds the app for production. The output files will be stored in the out directory.
`npm run start`
Starts the app in production mode. You must first run npm run build to build the app.
`npm run lint`
Lints the code using ESLint.

# Folder Structure
The project has the following folder structure:
```
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
│   │   └── Services.js   │   
   ├── pages   
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
│      
└── README.md   
```
# Third Party Library
In this project we have used third party libray material ui 
for implementing this run this command
`npm i @mui/material`
`npm i @mui/icons`

From this library we have used Accordion and MenuOpen Icon For this Project and styles are used by Tailwind css

These are the Components and Style that have been used to create the Modal App using Next.js 

# Deploying the App
To deploy the app, you can use a service like Vercel, which supports Next.js out of the box. Simply connect your GitHub repository to Vercel and the app will be automatically deployed when you push changes to the repository.
