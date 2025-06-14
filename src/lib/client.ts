export const isMobileAgent = (agent: string): boolean => {
	return (
		agent.match(
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i,
		) !== null
	);
};