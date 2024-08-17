import { Route, Routes } from "react-router-dom"
import ProfileComponent from "./Profile/Pages/Profile/ProfileComponents"
import ChangeNameComponent from "./Profile/Pages/ChangeName/ChangeNameComponent"
import ChangePasswordComponent from "./Profile/Pages/ChangePassword/ChangePasswordComponent"
import ChangeUserNameComponent from "./Profile/Pages/ChangeUserName/ChangeUserNameComponent"
import { UserStore } from "./Profile/UserStore"
import { useEffect } from "react"
import { Box, Button } from "@mui/joy"


function App() {
  const getPrincipalUser = UserStore(state => state.getPrincipalUser);
  const user = UserStore(state => state.user);

  useEffect(() => {
    getPrincipalUser();
  }, []);

  return (
    <>
      {
        user ?
          <Routes>
            <Route path="/" element={<ProfileComponent></ProfileComponent>} />
            <Route path="/name" element={<ChangeNameComponent></ChangeNameComponent>} />
            <Route path="/password" element={<ChangePasswordComponent></ChangePasswordComponent>} />
            <Route path="/username" element={<ChangeUserNameComponent></ChangeUserNameComponent>} />
          </Routes>
          :
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh', // Esto hace que el contenedor ocupe toda la altura de la pantalla
            }}
          >
            <Button
              loading
              variant="plain"
              sx={{
                width: '80%', // Aumentamos el ancho al 80%
                height: '60px', // Hacemos el botón más alto
                fontSize: '1.2rem', // Aumentamos el tamaño de la fuente
              }}
            >
              Cargando...
            </Button>
          </Box>
      }
    </>
  )
}

export default App
