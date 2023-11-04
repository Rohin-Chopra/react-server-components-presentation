import { WeatherPage } from "./pages/WeatherPage";
import { AppProvider } from "./providers/AppProvider";

function App() {
  return (
    <>
      <AppProvider>
        <WeatherPage />
      </AppProvider>
    </>
  );
}

export default App;
