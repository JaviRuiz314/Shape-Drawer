import React from 'react';
import './Button.css';


interface ButtonProps {
	label: string,
	style: string,
	disabled: boolean
}

const Button = ({ label, style, disabled }: ButtonProps) => {
	return (
		<button
			className={style}
			disabled={disabled}
		>
			<div className='label-container'>
				{label}
			</div>
		</button>
	);
}

Button.defaultProps = {
	label: '',
	style: 'default-button',
	disabled: false
};

export default Button;