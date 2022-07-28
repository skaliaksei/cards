import Costs from "./components/Costs";
import costs from "./components/db";

function App() {
    return (
        <div className="App">
            <Costs costs = {costs} />
        </div>
    );
}

export default App;