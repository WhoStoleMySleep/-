import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './assets/font/font.scss'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/index';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Catalog from './pages/catalog/catalog';
import Configurator from './pages/configurator/configurator';
import AboutСonfectionery from './pages/aboutСonfectionery/aboutСonfectionery';
import DeliveryAndPayment from './pages/deliveryAndPayment/deliveryAndPayment';
import PrivacyPolicy from './pages/privacyPolicy/privacyPolicy';
import Contacts from './pages/contacts/contacts';
import UndefinedPage from './pages/undefinedPage/undefinedPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='/catalog' element={<Catalog />}></Route>
        <Route path='/configurator' element={<Configurator />}></Route>
        <Route path='/about-confectionery' element={<AboutСonfectionery />}></Route>
        <Route path='/delivery-and-payment' element={<DeliveryAndPayment />}></Route>
        <Route path='/privacy-policy' element={<PrivacyPolicy />}></Route>
        <Route path='/contacts' element={<Contacts />}></Route>
        <Route path='*' element={<UndefinedPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
