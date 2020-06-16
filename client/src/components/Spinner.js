import React, { Fragment } from 'react';
import spinner from '../components/spinner.gif';

export default () => (
	<Fragment>
		<img src={spinner} style={{ width: '100px', margin: 'auto', display: 'block' }} />
	</Fragment>
);
