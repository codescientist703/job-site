import { useEffect, useRef } from 'react';

const useEffectUpdate = (func, deps) => {
	const didMount = useRef(false);

	useEffect(() => {
		if (didMount.current) func();
		else didMount.current = true;
	}, deps);
};

export default useEffectUpdate;
