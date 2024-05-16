import "./App.css";
import { Card, Text } from "@mantine/core";

import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({});

function App() {
  return (
    <>
      <MantineProvider theme={theme}>
        <Card>
          <Text fs={"italic"}>Hello World!</Text>
        </Card>
      </MantineProvider>
    </>
  );
}

export default App;
