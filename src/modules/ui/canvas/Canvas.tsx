import React, { useState, useEffect } from 'react';
import { fabric } from "fabric";
import './Canvas.css';


interface CanvasProps {
	width: number;
	height: number;
}

const Canvas = ({ width, height }: CanvasProps) => {
	const [canvas, setCanvas] = useState<any>('');

	useEffect(() => {
		setCanvas(initCanvas());
	}, []);

	const initCanvas = () => (
		new fabric.Canvas('canvas', {
			backgroundColor: 'white',
			height: height,
			width: width,
		})
	);

	const readFile = (event: any) => {
		const reader = new FileReader();
		reader.onload = function (event: any) {
			const image = new Image();
			image.src = event.target.result;
			image.onload = function () {
				const img: any = new fabric.Image(image);
				img.set({
					scaleX: canvas.getWidth() / img.width,
					scaleY: canvas.getHeight() / img.height,
				});
				canvas.setBackgroundImage(img).renderAll();
			}
		}
		reader.readAsDataURL(event.target.files[0]);
	}

	return (
		<div>
			<input type="file" id="file" onChange={(event) => readFile(event)}></input>
			<canvas id='canvas' className='canvas-border'>
			</canvas>
		</div>
	);
}

Canvas.defaultProps = {
	width: window.innerWidth / 2,
	height: window.innerHeight / 2
};

export default Canvas;