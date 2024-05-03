import style from "./Header.module.css";

export function Header() {
  return (
    <div className={style.header}>
      <img id="clipboard" src="public/clipboardLogo.svg" />
    </div>
  );
}
