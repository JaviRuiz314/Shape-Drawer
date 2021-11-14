import React from 'react';
import { IButtonProps } from '../../shared/types';
import './Button.css';

const Button = ({ label, style, disabled, icon, onClick = () => { } }: IButtonProps) => {

	const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		onClick(e);
	};

	return (
			<button
				className={`default-button ${style}`}
				disabled={disabled}
				onClick={handleOnClick}
			>
				{icon}
				<div className='label-container'>
					{label}
				</div>
			</button>
	);
}

Button.defaultProps = {
	label: '',
	style: '',
	disabled: false
};

export default Button;