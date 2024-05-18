import { MantineProvider, createTheme } from "@mantine/core";
// import ProtectedRoutes from "../components/ProtectedRoutes";
import Sidebar from "../components/Sidebar";
import MainLayout from "../layouts/MainLayout";

const theme = createTheme({});

const Home = () => {
  return (
    <MantineProvider theme={theme}>
      <MainLayout>
        {/* <ProtectedRoutes> */}
        <>
          <Sidebar />
          <p>HOME</p>
        </>
        {/* </ProtectedRoutes> */}
      </MainLayout>
    </MantineProvider>
  );
};

export default Home;
