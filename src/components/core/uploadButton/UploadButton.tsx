import React, { useRef } from "react";
import Button from "../../ui/button/Button";
import { FaImage } from 'react-icons/fa';
import { IUploadButtonProps } from "../../shared/types"; 
import './UploadButton.css';

const UploadButton = ({onClick = () => {}}: IUploadButtonProps) => {
	const inputFileRef = useRef<any>(null);

	const handleClick = () => {
		inputFileRef.current.click();
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
		<Button label='Upload image' icon={<FaImage size={30} />} onClick={handleClick} />
	</div>
	);

}

export default UploadButton;