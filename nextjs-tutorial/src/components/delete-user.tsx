import { removeUser } from '@/actions/actions'; 

function DeleteUser ({id}: {id: string}) {
	const removeUserWithId = removeUser.bind(null, id);
	return (
		// <form action={deleteUser}>
		<form action={removeUserWithId}>
				<input type='hidden' name='id' value={id} />
			<button 
				type='submit'
				className='bg-red-500 text-white text-xs rounded p-2'
			>
				Delete
			</button>
		</form>
	)
}

export default DeleteUser