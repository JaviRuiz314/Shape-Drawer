import React from 'react';
import './Button.css';


interface ButtonProps {
	label: string,
	style: string,
	disabled: boolean,
	onClick?:
	| ((event: React.MouseEvent<HTMLButtonElement>) => void)
	| undefined;
}

const Button = ({ label, style, disabled, onClick = () => {} }: ButtonProps) => {

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