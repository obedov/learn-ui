import * as React from 'react';

import { sleep } from '../../utils/functions/sleep/sleep';

export class ClassComponent extends React.Component {
	state = { value: 'NOT INITIALISED' };

	componentDidMount() {
		sleep(3000);
		this.setState(() => ({
			value: 'INITIALISED',
		}));
	}

	render() {
		const { value } = this.state;
		return (
			<div>
				<b>Class component:</b> {value}
			</div>
		);
	}
}
