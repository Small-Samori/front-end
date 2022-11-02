export const AppRoutes = {
  home: {
    path: '/',
    title: `DengueML: A Random Forest model for dengue drug discovery`,
  },
  predict: {
    path: '/predicts',
    title: 'Random Forest Model for screening anti-dengue compounds',
  },
  about: {
    path: '/about',
    title: 'About',
  },
};

export const getTitle = route => {
  if (route?.toLowerCase() === AppRoutes.home.path?.toLowerCase()) {
    return AppRoutes.home.title;
  }
  if (route?.toLowerCase() === AppRoutes.predict.path?.toLowerCase()) {
    return AppRoutes.predict.title;
  }
  return 'Home';
};
export const isSelectedRoute = (original, route) => {
  if (original?.toLowerCase() === route?.toLowerCase()) return true;
  return false;
  // if(route?.toLowerCase() === AppRoutes.home.path?.toLowerCase()) {return true;}
  // if(route?.toLowerCase() === AppRoutes.predict.path?.toLowerCase()) {return true;}
  // return false;
};
