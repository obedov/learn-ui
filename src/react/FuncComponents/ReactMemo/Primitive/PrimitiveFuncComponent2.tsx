import * as React from 'react';
import { memo } from 'react';

import { Primitives } from './TestPrimitiveFuncComponentsApp';

let count = 0;

const PrimitiveFuncComponent2: React.FC<Primitives> = ({ string, number, boolean }) => {
	count++;
	console.count('render PrimitiveFuncComponent2');

	return (
		<div>
			<h2>MemoizedFuncComponent (Primitive):</h2>
			<div>string: {string}</div>
			<div>number: {number}</div>
			<div>boolean: {String(boolean)}</div>
			<br />
			<div>
				<b>render impure count:</b> {count}
			</div>
		</div>
	);
};

export default memo(PrimitiveFuncComponent2);
