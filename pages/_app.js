import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
// import { store } from '../state/store'
// import { Provider } from 'react-redux'
import RouterIdicator from '../state/context/RouterIdicator'
import UserProvider from '../state/context/userContext'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
    {/* <Provider store={store}> */}
        <RouterIdicator />
        <ThemeProvider theme={darkTheme}>
            <Component {...pageProps} />
        </ThemeProvider>
    {/* </Provider > */}
    </UserProvider>
  )
}

export default MyApp