export interface IShape {
	id: number,
	name: string
}

export interface IUploadButtonProps {
	onClick?:
	| ((event: React.MouseEvent<HTMLButtonElement>) => void)
	| undefined;
}

export interface IShapeListProps {
	shapeList: IShape[]
}

export interface ICanvasProps {
	width: number;
	height: number;
	img: HTMLImageElement | null;
	isDrawModeActive: boolean;
	parentCallback: Function;
}

export interface IPolygonWithId extends fabric.IPolylineOptions {
	id: number;
}

export interface IButtonProps {
	label: string,
	style: string,
	disabled: boolean,
	icon?: JSX.Element,
	onClick?:
	| ((event: React.MouseEvent<HTMLButtonElement>) => void)
	| undefined;
}

export interface IInputProps {
	id: string,
	placeholder: string,
	initValue: string,
	customClass: string,
	type: string,
	disabled: boolean,
	onBlur?:
	| ((event: React.FocusEvent<HTMLInputElement>) => void)
	| undefined;
}