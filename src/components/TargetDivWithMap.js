import Button from './Button';

const TargetDivWithMap = (props) => {
	const buttonTexts = ["save", "click", "send", "delete", "cancel"];

	const bingo = () => {
		console.log("do nothing");
	}

	return <div>{buttonTexts.map((text, i) => <Button label={text} key={i} handleChange={bingo} />)}</div>
}

export default TargetDivWithMap;