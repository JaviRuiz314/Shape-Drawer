import React, { useState, useEffect } from 'react';
import Canvas from '../../ui/canvas/Canvas';
import UploadButton from '../uploadButton/UploadButton';
import Button from '../../ui/button/Button';
import './Main.css';

const Main = () => {
	const [image, setImage] = useState<HTMLImageElement | null>(null);
	const [isDrawNotAllowed, setisDrawAllowed] = useState<any>(true);
	const [isDrawModeActive, setisDrawModeActive] = useState<any>(false);

	const readFile = (event: any) => {
		const reader = new FileReader();
		reader.onload = function (event: any) {
			const img = new Image();
			img.src = event.target.result;
			setImage(img);
		}
		setisDrawAllowed(false);
		reader.readAsDataURL(event.target.files[0]);
	}

	const enableDrawMode = () => {
		setisDrawModeActive(true);
	}

	const receivePolygon = () => {
		setisDrawModeActive(false);
	}

	return (
		<div className='main'>
			<div className='button-menu'>
				<UploadButton onClick={readFile} />
				<Button label='Draw' onClick={enableDrawMode} disabled={isDrawNotAllowed} />
			</div>
			<div className='image-placeholder'>
				<Canvas height={750} width={800} img={image} isDrawModeActive={isDrawModeActive} parentCallback={receivePolygon}/>
			</div>

		</div>
	)
}

export default Main;