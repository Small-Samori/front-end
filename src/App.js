import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contact, HomePages, Predict, Tutorial } from './Pages';
import { HomeLayout } from './Layouts';
import { AppRoutes } from './Utils';
import Faq from './Pages/Faq';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.home.path} element={<HomeLayout />}>
            <Route path={AppRoutes.home.path} element={<HomePages />} />
            <Route path={AppRoutes.predict.path} element={<Predict />} />
            <Route path={AppRoutes.contact.path} element={<Contact />} />
            <Route path={AppRoutes.tutorial.path} element={<Tutorial />} />
            <Route path={AppRoutes.faq.path} element={<Faq />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
