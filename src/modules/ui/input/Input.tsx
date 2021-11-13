import React, { useState } from 'react';
import { IInputProps } from '../../shared/types';
import './Input.css';

const Input = ({ id, placeholder, initValue, customClass, type, disabled, onBlur = () => { } }: IInputProps) => {
	const [value, setValue] = useState<string>(initValue);

	const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		setValue(newValue);
	}

	const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
		if (event.target.value) onBlur(event);
	}

	return (
		<div className={customClass}>
			<input id={id} type={type} placeholder={placeholder} value={value} disabled={disabled} onChange={handleInputValue} onBlur={handleBlur}></input>
		</div>

	)
}

Input.defaultProps = {
	placeholder: '',
	initValue: '',
	customClass: '',
	type: 'text',
	disabled: false
};
export default Input