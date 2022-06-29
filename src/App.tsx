import { FirstInput } from './components/FirstInput/FirstInput';
import { SecondInput } from './components/SecondInput/SecondInput';
import { ThirdInput } from './components/ThirdInput/ThirdInput';
import { FourthInput } from './components/FourthInput/FourthInput';
import { FifthInput } from './components/FifthInput/FifthInput';
import { Buttons } from './components/Buttons/Buttons';
import { OutputAllFields } from './components/Outputs/OutputAllFields/OutputAllFields';
import { DataBaseRecording } from './components/Outputs/DataBaseRecording/DataBaseRecording';
import { ReadData } from './components/Outputs/ReadData/ReadData';

function App() {
	return (
		<div className="App">
			<FirstInput />
			<SecondInput />
			<ThirdInput />
			<FourthInput />
			<FifthInput />
			<Buttons />
			<OutputAllFields />
			<DataBaseRecording />
			<ReadData />
		</div>
	);
}

export default App;
