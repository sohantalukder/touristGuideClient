import React from 'react';
import EventItem from './EventItem';
const events = [
	{
		id: 1,
		placeName: 'Nil Pukur',
		goneEventDate: '10 June 2015',
		backEventDate: '15 July 2015',
		description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga recusandae laudantium maiores voluptas corrupti aliquam animi. Perspiciatis hic officiis sit dolor nemo libero amet tenetur illo accusantium, veritatis dignissimos.`,
		location: 'Mitha Pukur, Rangpur',
		payment: true,
	},
	{
		id: 2,
		placeName: 'Nil Pukur',
		goneEventDate: '10 June 2015',
		backEventDate: '15 July 2015',
		description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga recusandae laudantium maiores voluptas corrupti aliquam animi. Perspiciatis hic officiis sit dolor nemo libero amet tenetur illo accusantium, veritatis dignissimos.`,
		location: 'Mitha Pukur, Rangpur',
		payment: false,
	},
	{
		id: 3,
		placeName: 'Nil Pukur',
		goneEventDate: '10 June 2015',
		backEventDate: '15 July 2015',
		description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga recusandae laudantium maiores voluptas corrupti aliquam animi. Perspiciatis hic officiis sit dolor nemo libero amet tenetur illo accusantium, veritatis dignissimos.`,
		location: 'Mitha Pukur, Rangpur',
		payment: true,
	},
	{
		id: 4,
		placeName: 'Nil Pukur',
		goneEventDate: '10 June 2015',
		backEventDate: '15 July 2015',
		description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga recusandae laudantium maiores voluptas corrupti aliquam animi. Perspiciatis hic officiis sit dolor nemo libero amet tenetur illo accusantium, veritatis dignissimos.`,
		location: 'Mitha Pukur, Rangpur',
		payment: true,
	},
	{
		id: 5,
		placeName: 'Nil Pukur',
		goneEventDate: '10 June 2015',
		backEventDate: '15 July 2015',
		description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga recusandae laudantium maiores voluptas corrupti aliquam animi. Perspiciatis hic officiis sit dolor nemo libero amet tenetur illo accusantium, veritatis dignissimos.`,
		location: 'Mitha Pukur, Rangpur',
		payment: false,
	},
	{
		id: 6,
		placeName: 'Nil Pukur',
		goneEventDate: '10 June 2015',
		backEventDate: '15 July 2015',
		description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga recusandae laudantium maiores voluptas corrupti aliquam animi. Perspiciatis hic officiis sit dolor nemo libero amet tenetur illo accusantium, veritatis dignissimos.`,
		location: 'Mitha Pukur, Rangpur',
		payment: false,
	},
];
const UserEvent = () => {
	return (
		<div>
			{/* Events */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8 px-0 md:px-12 w-full">
				{events.map((event) => (
					<EventItem key={event.id} event={event} />
				))}
			</div>
		</div>
	);
};

export default UserEvent;
