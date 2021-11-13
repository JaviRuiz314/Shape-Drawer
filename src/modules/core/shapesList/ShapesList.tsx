import React from "react";
import Input from '../../ui/input/Input';
import { IShapeListProps } from "../../shared/types";
import './ShapesList.css'


const ShapesList = ({ shapeList }: IShapeListProps) => {

	const namePolygon = (event: React.FocusEvent<HTMLInputElement>) => {
		// If the name of the shape can't never be edited we can simply access the last shape of the
		// array but I am implementing a forEach method in case we would want to add an edit name feature
		// in the future.
		shapeList.forEach(shape => (
			shape.name = shape.id === parseInt(event.target.id, 10) ?
				event.target.value : shape.name
		));

		const input: any = document.getElementById(event.target.id);
		input.disabled = true;
	}

	const renderListOfShapes = (): any => {
		return (
			<ul>
				{shapeList.map((shape) => {
					return (
						<li key={shape.id}> <Input id={shape.id.toString()} type='text' placeholder="Enter a new name..." onBlur={namePolygon} /></li>)
				})}
			</ul>
		);
	}

	return (
		<div className="shape-list">
			{renderListOfShapes()}
		</div>
	);
}

export default ShapesList;