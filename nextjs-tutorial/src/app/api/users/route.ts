import { saveUser } from '@/actions/actions';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
	// const { searchParams } = new URL(request.url);
	// const id = searchParams.get('id');

	console.log(request.url);
	console.log(request.nextUrl.searchParams.get('id'));

	return NextResponse.redirect(new URL('/', request.url));
	// const users = await fetchUsers();
	// return NextResponse.json(users);
}

export const POST = async (request: NextRequest) => {
	const user = await request.json();

	const newUser = { ...user, id: Date.now().toString() };
	await saveUser(newUser);

	return NextResponse.json({ msg: 'User created successfully' });
} 