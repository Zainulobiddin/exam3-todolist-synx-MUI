import Container from "./components/container/container";
import Todolist from "./components/todolist/todolist";
import ThemeProvider from "./context/theme-context";

export default function App() {
  return (
    <div>
      <ThemeProvider>
        <Container>
          <Todolist />
        </Container>
      </ThemeProvider>
    </div>
  );
}
