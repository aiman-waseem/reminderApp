// // AppContext.js

// import { createContext, useContext, useState } from 'react';

// const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//   const [locationData, setLocationData] = useState(null);


//   const setLocation = (data) => {
//     setLocationData(data);
//   };



//   return (
//     <AppContext.Provider value={{ locationData, setLocation, medicinalFormData, setMedicinalForm }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useAppContext = () => {
//   return useContext(AppContext);
// };

// AppContext.js

import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [locationData, setLocationData] = useState([]);
  const [medicinalFormData, setMedicinalFormData] = useState([]);

  const setLocation = (data) => {
    setLocationData(data);
  };
  const setMedicinalForm = (data) => {
    setMedicinalFormData(data);
  };

  return (
    <AppContext.Provider value={{ locationData, setLocation, medicinalFormData, setMedicinalForm }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }

  return context;
};
