import React, { useRef } from "react";
import Button from "../../ui/button/Button";
import { IUploadButtonProps } from "../../shared/types"; 
import './UploadButton.css';

const UploadButton = ({onClick = () => {}}: IUploadButtonProps) => {
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