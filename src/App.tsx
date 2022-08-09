import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/context";

export const App = () => {
  return (
    <AppThemeProvider>
        <AppRoutes/>
    </AppThemeProvider>
  );
}