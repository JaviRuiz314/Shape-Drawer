import React, { useState } from 'react';
import { IInputProps } from '../../shared/types';
import './Input.css';

const Input = ({ placeholder, initValue, customClass, type }: IInputProps) => {
	const [value, setValue] = useState<string>(initValue);

	const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		setValue(newValue);
	}

	return (
		<div className={customClass}>
			<input type={type} placeholder={placeholder} value={value} onChange={handleInputValue}></input>
		</div>

	)
}

Input.defaultProps = {
	placeholder: '',
	initValue: '',
	customClass: '',
	type: 'text'
};
export default Input