function SignInPage ({ params }: { params: { 'sign-in': string[] } }) {
	return (
		<div>SignInPage: {params['sign-in'][0]}</div>
	)
}

export default SignInPage