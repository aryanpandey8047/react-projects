import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import MultiStepForm from './components/MultiStepForm';

function App() {
  return (
    <Provider store={store}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          background: '#f5f5f5',
        }}
      >
        <MultiStepForm />
      </div>
    </Provider>
  );
}

export default App;