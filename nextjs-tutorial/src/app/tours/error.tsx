'use client';

function ErrorTours ({ error }: { error: Error }) {
	return (
		<div>ErrorTours {error.message}</div>
	)
}

export default ErrorTours 