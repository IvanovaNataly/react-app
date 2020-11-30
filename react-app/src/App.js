import './App.css';
import {School} from "./School";

const studentsGrades = [
	{ name: "Naama", grades: 90, id: 0 },
	{ name: "Naam", grades: 91, id: 1 },
	{ name: "Na", grades: 90, id: 2 }
]

function App() {
  return (
    <div className="App">
		<School studentsGrades={studentsGrades}/>
    </div>
  );
}

export default App;
