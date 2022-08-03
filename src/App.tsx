import { Login } from "./pages";
import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/context";

export const App = () => {
  return (
    <AppThemeProvider>
      <Login>
        <AppRoutes/>
      </Login>
    </AppThemeProvider>
  );
}