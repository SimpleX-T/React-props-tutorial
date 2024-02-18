// import { useState } from "react";

// const messages = [
// 	"Learn React ⚛️",
// 	"Apply for jobs 💼",
// 	"Invest your new income 🤑",
// ];

// export default function App() {
// 	const [step, setStep] = useState(1);

// 	const [isOpen, setIsOpen] = useState(true);

// 	function handlePrevious() {
// 		step > 1 && setStep((s) => s - 1);
// 	}

// 	function handleNext() {
// 		step < 3 && setStep((s) => s + 1);
// 	}

// 	return (
// 		<>
// 			<button
// 				className='close'
// 				onClick={() => {
// 					setIsOpen((is) => !is);
// 				}}>
// 				&times;
// 			</button>
// 			{isOpen && (
// 				<div className='steps'>
// 					<div className='numbers'>
// 						<div className={step >= 1 ? "active" : ""}>1</div>
// 						<div className={step >= 2 ? "active" : ""}>2</div>
// 						<div className={step >= 3 ? "active" : ""}>3</div>
// 					</div>

// 					<p className='message'>
// 						Step {step}: {messages[step - 1]}
// 					</p>

// 					<div className='buttons'>
// 						<button
// 							style={{ background: "#7950f2", color: "#fff" }}
// 							onClick={handlePrevious}>
// 							Previous
// 						</button>
// 						<button
// 							style={{ background: "#7950f2", color: "#fff" }}
// 							onClick={handleNext}>
// 							Next
// 						</button>
// 					</div>
// 				</div>
// 			)}
// 		</>
// 	);
// }

function App() {
	const currDate = new Date();

	// Get the past date (subtracting 30 days from the current date)
	const pastDate = new Date(currDate);
	console.log(pastDate);
	pastDate.setDate(currDate.getDate() - 30);

	// Get the future date (adding 30 days to the current date)
	const futureDate = new Date(currDate);
	futureDate.setDate(currDate.getDate() + 30);

	// console.log("Current Date:", currDate);
	// console.log("Past Date (30 days ago):", pastDate);
	// console.log("Future Date (30 days later):", futureDate);

	return (
		<div>
			<h1>COUNT</h1>;
		</div>
	);
}

export default App;
