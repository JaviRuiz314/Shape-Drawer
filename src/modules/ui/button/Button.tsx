import React from 'react';
import { IButtonProps } from '../../shared/types';
import './Button.css';

const Button = ({ label, style, disabled, onClick = () => {} }: IButtonProps) => {

	const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        onClick(e);
    };

	return (
		<button
			className={style}
			disabled={disabled}
			onClick={handleOnClick}
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