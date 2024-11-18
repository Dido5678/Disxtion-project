import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);










// import React from 'react';
// import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Experience from './components/Experience';

// const AppRoutes = () => {
//   const routes = [
//     { path: '/', element: <Home /> },
//     { path: '/about', element: <About /> },
//     { path: '/experience', element: <Experience /> },
//   ];

//   const element = useRoutes(routes);
//   return element;
// };

// const App: React.FC = () => {
//   return (
//     <Router>
//       <AppRoutes />
//     </Router>
//   );
// };

// export default App;












// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// // Get the root element, and throw an error if it doesn't exist.
// const rootElement = document.getElementById('root');
// if (!rootElement) {
//   throw new Error('Root element not found');
// }

// // Now TypeScript knows that rootElement is non-null
// const root = ReactDOM.createRoot(rootElement);

// // Render the React application
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


