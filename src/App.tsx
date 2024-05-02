import style from "./App.module.css";
import { Header } from "./components/Header.tsx";
import { Home } from "./components/Home.tsx";

export function App() {
  return (
    <div className={style.app}>
      <Header />
      <Home />
    </div>
  );
}
