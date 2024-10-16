'use server';
import { readFile, writeFile } from 'fs/promises';
import { revalidatePath } from 'next/cache';

type User = {
	id: string;
	firstName: string;
	lastName: string;
}

export const createUser = async (_: { message: string } | null, formData: FormData) => {

	await new Promise((resolve) => setTimeout(resolve, 1000));
	const firstName = formData.get('firstName') as string;
	const lastName = formData.get('lastName') as string;
	const newUser: User = { firstName, lastName, id: Date.now().toString() };

	try {
		await saveUser(newUser);
		revalidatePath('/actions');
		// redirect('/actions');
		return { message: 'User created successfully' };
	} catch (error) {
		console.log(error);
		return { message: 'Failed to create user' };
	}
}

export const fetchUsers = async (): Promise<User[]> => {
	const data = await readFile('users.json', 'utf-8');
	const users = data ? JSON.parse(data) : [];
	return users;
}

export const saveUser = async (user: User) => {
	const users = await fetchUsers();
	users.push(user);
	await writeFile('users.json', JSON.stringify(users, null, 2));
}

export const deleteUser = async (formData: FormData) => {
	const id = formData.get('id') as string;
	const users = await fetchUsers();
	const updatedUsers = users.filter((user) => user.id !== id);
	await writeFile('users.json', JSON.stringify(updatedUsers, null, 2));
	revalidatePath('/actions');
}

export const removeUser = async (id: string) => {
	const users = await fetchUsers();
	const updatedUsers = users.filter((user) => user.id !== id);
	await writeFile('users.json', JSON.stringify(updatedUsers, null, 2));
	revalidatePath('/actions');
}