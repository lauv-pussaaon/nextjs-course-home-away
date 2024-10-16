import Image from "next/image";
import Link from "next/link";

const url = 'http://www.course-api.com/react-tours-project';

type Tour = {
	id: string;
	name: string;
	info: string;
	image: string;
	price: string;
}

const fetchTours = async () => {
	await new Promise((resolve) => setTimeout(resolve, 3000));
	const response = await fetch(url);
	const data = await response.json();
	return data as Tour[];
}

export default async function ToursPage () {
	const data = await fetchTours();

	return (
		<section>
			<h1 className='text-3xl mb-4'>Tours</h1>
			<div className='grid md:grid-cols-2 gap-8'>
			{data.map((tour) => {
				return (<Link key={tour.id} href={`/tours/${tour.id}`}>
					<div className='relative mb-2 h-48'>
						<Image 
							src={tour.image} 
							alt={tour.name} 
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							fill
							priority
							className='object-cover rounded'
						/>
					</div>
					<h2 key={tour.id}>{tour.name}</h2>
				</Link>);
			})}
			</div>
		</section>
	);
}