import { Card } from "../../components/Card";
import "./styles.css";

const handleClick = (id: string) => {
  console.log(id);
};

function App() {
  return (
    <div>
      <Card back="🥷🏽" id="1" flipped handleClick={handleClick} />
      <Card back="🥷🏽" id="2" handleClick={handleClick} />
      <Card back="🥷🏽" id="3" handleClick={handleClick} />
    </div>
  );
}

export default App;
