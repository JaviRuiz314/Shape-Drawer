import React from 'react';
import Canvas from '../../ui/canvas/Canvas';
import './Main.css';

const Main = () => {
	return (
		<div className='main'>
			<div className='image-placeholder'>
				<Canvas height={750} width={800}/>
			</div>

		</div>
	)
}

export default Main;