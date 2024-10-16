import mapImg from '@/assets/images/maps.jpg';
import Image from 'next/image';

function TourPage ({ params }: { params: { id: string } }) {

	const remoteUrl = 'https://www.course-api.com/images/tours/tour-1.jpeg';

	return (
		<div>
			<h1>Tour: {params.id}</h1>
			<section className='flex gap-x-4 mt-4'>
				<div>
					<Image 
						src={mapImg} 
						alt='map' 
						className='w-48 h-48 object-cover rounded'
						priority
						width={192}
						height={192}
						placeholder='blur'
						blurDataURL={mapImg.src}
					/>
					<h2>local image</h2>
				</div>
				<div>
					<Image 
						src={remoteUrl} 
						alt='remote' 
						width={192} 
						height={192} 
						priority
						className='w-48 h-48 object-cover rounded'
					/>
					<h2>remote image</h2>
				</div>
			</section>
			
		</div>
	)
}

export default TourPage 