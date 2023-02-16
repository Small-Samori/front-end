export const AppRoutes = {
  home: {
    path: '/',
    title: `DengueML: A Random Forest Model for Predicting Inhibitors of Dengue Virus`,
  },
  predict: {
    path: '/predicts',
    title: 'Random Forest Model for screening anti-dengue virus compounds',
  },
  contact: {
    path: '/contact',
    title: 'Contact',
  },
  tutorial: {
    path: '/tutorial',
    title: 'Tutorial: Getting Started with DengueML',
  },
  faq: {
    path: '/faq',
    title: 'Frequently Asked Questions',
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
};
