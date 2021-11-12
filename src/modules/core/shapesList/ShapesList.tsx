import React from "react";
import Input from '../../ui/input/Input';
import { IShapeListProps } from "../../shared/types";
import './ShapesList.css'


const ShapesList = ({ shapeList }: IShapeListProps) => {

	const renderListOfShapes = (): any => {
		return(
			<ul>
			{shapeList.map((shape) => {
				return(
				<li key={shape.id}> <Input type='text' placeholder="Enter a new name..."  /></li>)
			})}
		</ul>
		);
	}

	return (
		<div className="shape-list">
			{ renderListOfShapes() }
		</div>
	);
}

export default ShapesList;