import React from 'react';
import ReactDOM from 'react-dom/client';
import './fonts/botanika/Botanika.otf';
import './fonts/aviano/AvianoFlareRegular.otf';
import './fonts/montserrat/Montserrat-VariableFont_wght.ttf';


import './index.scss';
import App from './App';
import { ScrollProvider } from './context/ScrollContext';
import { NavProvider } from './context/NavContext';
import { BrowserRouter } from 'react-router-dom';
import { TransitionProvider } from './context/TransitionContext';
import ViewProvider from './context/ViewContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <ViewProvider>
      <ScrollProvider>
        <NavProvider>
          <TransitionProvider>
            <BrowserRouter>
              <App />

            </BrowserRouter>
          </TransitionProvider>

        </NavProvider>

      </ScrollProvider>
    </ViewProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

