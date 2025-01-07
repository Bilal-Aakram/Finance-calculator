import reactImg from "../assets/investment-calculator-logo.png";
export default function Header() {
  return (
    <header id="header">
      <img id="img" src={reactImg} alt="Logo of a money bag" />;
      <h1>React Investment Calculator</h1>
    </header>
  );
}
