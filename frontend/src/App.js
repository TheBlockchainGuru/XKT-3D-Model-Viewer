import React from 'react';
import XKTModel from './component/XKTModel';
import UploadFiles from './component/UploadFiles';

import './style.css';

const App = () => {
	return (
		<div className="app">
			<XKTModel />
			<UploadFiles />
		</div>
	)
};

export default App;
