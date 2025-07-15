import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { BrowserRouter } from 'react-router-dom'
import { persistor } from './app/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'




createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme='colored'
          transition={Bounce}
        />
      </PersistGate>
    </Provider>
  </BrowserRouter>

)
