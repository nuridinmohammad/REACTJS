import "@mantine/core/styles.css";
import "./App.css";
import { Card, Text } from "@mantine/core";
import { createTheme, MantineProvider } from "@mantine/core";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";

const theme = createTheme({});

function App() {
  return (
    <>
      <MantineProvider theme={theme} stylesTransform={emotionTransform}>
        <MantineEmotionProvider>
          <Card>
            <Text fs={"italic"}>Hello World!</Text>
          </Card>
        </MantineEmotionProvider>
      </MantineProvider>
    </>
  );
}

export default App;
