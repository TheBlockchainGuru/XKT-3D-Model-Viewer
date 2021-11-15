import React from 'react';
import { XKTViewer } from '../utils/Viewers';

import store from '../store/store';

const XKTModel = () => {
	const model = store(state => state.currentModel);

	return (
		<div>
			<XKTViewer
			  canvasID="canvas-xkt"
			  width={window.innerWidth}
			  height={window.innerHeight}
			  models={[model]}
			/>
		</div>
	);
};

export default XKTModel;
