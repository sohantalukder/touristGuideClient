import React, { useState } from 'react';
import { MdLocationOn, MdOutlineClose, MdOutlineDone } from 'react-icons/md';
import { Link } from 'react-router-dom';
const EventItem = ({ event }) => {
	const {
		id,
		placeName,
		goneEventDate,
		backEventDate,
		description,
		location,
		payment,
	} = event;
	const [isReadMore, setIsReadMore] = useState(true);
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};
	return (
		<div className="bg-white p-3 flex flex-col shadow-event">
			<div className="!float-right mb-2">
				{payment === true ? (
					<MdOutlineDone className="w-[30px] h-[30px]  px-1 bg-green text-white text-lg rounded-full !float-right" />
				) : (
					<MdOutlineClose className="w-[30px] h-[30px]  px-1 bg-red text-white text-lg rounded-full !float-right" />
				)}
			</div>

			<div className="px-4 py-3 bg-green text-white">
				<Link to={`/eventView/${id}`}>
					<h1 className="text-xl font-semibold mb-1">{placeName}</h1>
				</Link>
				<p className="mb-1">
					<span>{goneEventDate}</span> - <span>{backEventDate}</span>
				</p>
				<p className="text-sm">
					{isReadMore ? description.slice(0, 70) : description}
					{description.length > 70 && (
						<span
							className="text-blue-600 cursor-pointer ml-2"
							onClick={toggleReadMore}>
							Read More
						</span>
					)}
				</p>
				<p className="border border-white rounded px-2 py-1.5 mt-2 flex items-center">
					<span className="mr-2 text-xl p-1 bg-greenLight rounded-full">
						<MdLocationOn />
					</span>{' '}
					{location}
				</p>
			</div>
		</div>
	);
};

export default EventItem;
