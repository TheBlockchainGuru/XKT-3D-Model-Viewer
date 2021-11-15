import React from 'react';
import XKTModel from './component/XKTModel';
import UploadFiles from './component/UploadFiles';
import Loading from './component/Loading';
import store from './store/store';
import './style.css';

const App = () => {
	const isLoading = store(state => state.isLoading);

	return (
		<div className="app">
			<XKTModel />
			<UploadFiles />
			{
				isLoading ? <Loading /> : null
			}
		</div>
	)
};

export default App;
