import React, { useState } from 'react';
import UploadButton from '../uploadButton/UploadButton';
import ShapesList from '../shapesList/ShapesList';
import Button from '../../ui/button/Button';
import Canvas from '../../ui/canvas/Canvas';
import { FaDrawPolygon } from 'react-icons/fa';
import { IShape } from '../../shared/types';
import './Main.css';

const Main = () => {
	const [image, setImage] = useState<HTMLImageElement | null>(null);
	const [isDrawNotAllowed, setisNotDrawAllowed] = useState<boolean>(true);
	const [isDrawModeActive, setisDrawModeActive] = useState<boolean>(false);
	const [shapeList, setShapeList] = useState<IShape[]>([]);

	const readFile = (event: any) => {
		const reader = new FileReader();
		reader.onload = function (event: any) {
			const img = new Image();
			img.src = event.target.result;
			setImage(img);
		}
		// Conditions to restart the canvas
		setShapeList([]);
		setisNotDrawAllowed(false);
		reader.readAsDataURL(event.target.files[0]);
	}

	const enableDrawMode = () => {
		setisDrawModeActive(true);
	}

	const receivePolygon = (shapeId: number) => {
		shapeList.push({id: shapeId, name: ''});
		setShapeList(shapeList);
		setisDrawModeActive(false);
	}

	return (
		<div className='main'>
			<div className='image-placeholder'>
				<Canvas height={750} width={800} img={image} isDrawModeActive={isDrawModeActive} parentCallback={receivePolygon} />
			</div>
			<div className='menu'>
				<div className='button-menu'>
					<UploadButton onClick={readFile} />
					<Button label='Draw' onClick={enableDrawMode} disabled={isDrawNotAllowed} icon={<FaDrawPolygon size={30}/>} />
				</div>
				<ShapesList shapeList={shapeList}/>
			</div>
		</div>
	);
}

export default Main;