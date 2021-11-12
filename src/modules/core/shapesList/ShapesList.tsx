import React from "react";
import { IShapeListProps } from "../../shared/types";
import './ShapesList.css'


const ShapesList = ({ shapeList }: IShapeListProps) => {

	const renderListOfShapes = (): any => {
		return(
			<ul>
			{shapeList.map((shape) => {
				return(
				<li key={shape.id}> <h1>{`Test id: ${shape.id}`}</h1></li>)
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