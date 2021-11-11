import React, { useRef } from "react";
import Button from "../../ui/button/Button";
import './UploadButton.css';

interface UploadButtonProps {
	onClick?:
	| ((event: React.MouseEvent<HTMLButtonElement>) => void)
	| undefined;
}

const UploadButton = ({onClick = () => {}}: UploadButtonProps) => {
	const inputFileRef = useRef<any>(null);

	const onBtnClick = () => {
		inputFileRef.current.click()
	}

	const handleChangeEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
		onClick(event);
	}

	return(
		<div>
		<input
			type="file"
			ref={inputFileRef}
			onChange={(event: any) => handleChangeEvent(event)}
		/>
		<Button label='Upload image' onClick={onBtnClick} />
	</div>
	);

}

export default UploadButton;