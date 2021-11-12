import React, { useState, useEffect } from 'react';
import { fabric } from "fabric";
import './Canvas.css';
import UploadButton from '../../core/uploadButton/UploadButton';
import Button from '../button/Button';


interface CanvasProps {
	width: number;
	height: number;
	img: HTMLImageElement | null;
	isDrawModeActive: boolean;
	parentCallback: Function;
}

let polygonMode: boolean = false;
let pointArray: any[] = [];
let lineArray: any[] = [];
let activeLine: any;
let activeShape: any;

const Canvas = ({ width, height, img, isDrawModeActive, parentCallback }: CanvasProps) => {

	const [canvas, setCanvas] = useState<any>(false);

	useEffect(() => {
		setCanvas(initCanvas());
	}, []);

	useEffect(() => {
		if (img) loadImage(img);
	}, [img]);

	useEffect(() => {
		if (isDrawModeActive) drawPolygon();
	}, [isDrawModeActive]);

	useEffect(() => {
		if (!canvas) { return; }
		function handleEvent(event: any, type: string) {
			switch (type) {
				case 'down':
					handleMouseDown(event);
					break;
				case 'up':
					break;
			}
		}
		canvas.on('mouse:down', (event: any) => (handleEvent(event, 'down')));
		canvas.on('mouse:up', (event: any) => (handleEvent(event, 'up')));
	}, [canvas]);

	const drawActiveElement = (options: any) => {
		if (activeShape) {
			const pos = canvas.getPointer(options.e);
			const points = activeShape.get("points");
			points.push({
				x: pos.x,
				y: pos.y
			});
			const polygon = new fabric.Polygon(points, {
				stroke: '#333333',
				strokeWidth: 1,
				fill: '#cccccc',
				opacity: 0.3,
				selectable: false,
				hasBorders: false,
				hasControls: false,
				evented: false,
				objectCaching: false
			});
			canvas.remove(activeShape);
			canvas.add(polygon);
			activeShape = polygon;
			canvas.renderAll();
		}
		else {
			const polyPoint = [{ x: (options.e.layerX), y: (options.e.layerY) }];
			const polygon = new fabric.Polygon(polyPoint, {
				stroke: '#333333',
				strokeWidth: 1,
				fill: '#cccccc',
				opacity: 0.3,
				selectable: false,
				hasBorders: false,
				hasControls: false,
				evented: false,
				objectCaching: false
			});
			activeShape = polygon;
			canvas.add(polygon);
		}
	}

	const addPoint = (options: any) => {
		const
			circle = new fabric.Circle({
				radius: 5,
				fill: pointArray.length === 0 ? 'red' : '#ffffff',
				stroke: '#333333',
				strokeWidth: 0.5,
				left: (options.e.layerX),
				top: (options.e.layerY),
				selectable: false,
				hasBorders: false,
				hasControls: false,
				originX: 'center',
				originY: 'center',
				objectCaching: false
			});

		const points = [(options.e.layerX), (options.e.layerY), (options.e.layerX), (options.e.layerY)];

		const line = new fabric.Line(points, {
			strokeWidth: 2,
			fill: '#999999',
			stroke: '#999999',
			originX: 'center',
			originY: 'center',
			selectable: false,
			hasBorders: false,
			hasControls: false,
			evented: false,
			objectCaching: false
		});

		drawActiveElement(options);
		activeLine = line;

		pointArray.push(circle);
		lineArray.push(line);

		canvas.add(line);
		canvas.add(circle);
		canvas.selection = false;
	}

	const generatePolygon = (pointArray: fabric.Circle[]) => {
		const points: any[] = [];
		pointArray.forEach((point: any) => {
			points.push({
				x: point.left,
				y: point.top
			});
			canvas.remove(point);
		});
		lineArray.forEach((line: any) => {
			canvas.remove(line);
		});
		canvas.remove(activeShape).remove(activeLine);
		const polygon = new fabric.Polygon(points, {
			stroke: '#333333',
			strokeWidth: 0.5,
			fill: 'red',
			opacity: 1,
			hasBorders: false,
			hasControls: false,
			selectable: false
		});
		canvas.add(polygon);

		activeLine = null;
		activeShape = null;
		polygonMode = false;
		parentCallback();
	}

	const initCanvas = () => (
		new fabric.Canvas('canvas', {
			backgroundColor: 'white',
			height: height,
			width: width
		})
	)

	const loadImage = (image: HTMLImageElement) => {
		image.onload = function () {
			const img: any = new fabric.Image(image);
			img.set({
				scaleX: canvas.getWidth() / img.width,
				scaleY: canvas.getHeight() / img.height,
			});
			canvas.setBackgroundImage(img).renderAll();
		}
	}

	const drawPolygon = () => {
		polygonMode = true;
		pointArray = [];
		lineArray = [];
		activeLine = true;
	}

	const isCurrentClickOnTheFirstPoint = (coordinates: any, firstPoint: fabric.Circle) => {
		if (!firstPoint.left || !firstPoint.top) return false;

		if ((coordinates.layerX - (firstPoint.left - 5)) * (coordinates.layerX - (firstPoint.left + 5)) < 0
			&&
			(coordinates.layerY - (firstPoint.top - 5)) * (coordinates.layerY - (firstPoint.top + 5)) < 0
		) {
			return true;
		}

		return false;
	}

	const handleMouseDown = (event: any) => {
		if (event.e && pointArray.length && isCurrentClickOnTheFirstPoint(event.e, pointArray[0])) {
			generatePolygon(pointArray);
		}
		if (polygonMode) {
			addPoint(event);
		}
	}

	return (
		<div>
			<canvas id='canvas' className='canvas-border'>
			</canvas>
		</div>
	);
}

Canvas.defaultProps = {
	width: window.innerWidth / 2,
	height: window.innerHeight / 2,
	image: null,
	isDrawModeActive: false
};

export default Canvas;