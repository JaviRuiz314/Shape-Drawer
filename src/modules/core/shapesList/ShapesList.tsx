import React from "react";
import Input from '../../ui/input/Input';
import { IShapeListProps } from "../../shared/types";
import './ShapesList.css'


const ShapesList = ({ shapeList }: IShapeListProps) => {

	const namePolygon = (event: React.FocusEvent<HTMLInputElement>) => {
		shapeList[parseInt(event.target.id, 10)].name = event.target.value;
	} 

	const renderListOfShapes = (): any => {
		return(
			<ul>
			{shapeList.map((shape) => {
				return(
				<li key={shape.id}> <Input id={shape.id.toString()} type='text' placeholder="Enter a new name..."  onBlur={namePolygon}/></li>)
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