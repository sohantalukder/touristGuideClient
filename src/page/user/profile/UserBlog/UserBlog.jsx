import React from 'react';
import shareImage from '../../../../image/desination-full/destination.png';
import userImage from '../../../../image/social-intractions/image-5.png';
import BlogItem from './BlogItem';
const blogs = [
	{
		name: 'Sharmin Jahan',
		location: 'Lalbag',
		shareImage: shareImage,
		userImage: userImage,
		message: `Subahdar Muhammad Azam Shah Lalbagh Fort (also Fort Aurangabad) is an incomplete 17th-century Mughal fort complex that stands before the Buriganga River in the southwestern part of Dhaka, Bangladesh.`,
	},
	{
		name: 'Sharmin Jahan',
		location: 'Lalbag',
		shareImage: shareImage,
		userImage: userImage,
		message: `Subahdar Muhammad Azam Shah Lalbagh Fort (also Fort Aurangabad) is an incomplete 17th-century Mughal fort complex that stands before the Buriganga River in the southwestern part of Dhaka, Bangladesh.`,
	},
	{
		name: 'Sharmin Jahan',
		location: 'Lalbag',
		shareImage: shareImage,
		userImage: userImage,
		message: `Subahdar Muhammad Azam Shah Lalbagh Fort (also Fort Aurangabad) is an incomplete 17th-century Mughal fort complex that stands before the Buriganga River in the southwestern part of Dhaka, Bangladesh.`,
	},
	{
		name: 'Sharmin Jahan',
		location: 'Lalbag',
		shareImage: shareImage,
		userImage: userImage,
		message: `Subahdar Muhammad Azam Shah Lalbagh Fort (also Fort Aurangabad) is an incomplete 17th-century Mughal fort complex that stands before the Buriganga River in the southwestern part of Dhaka, Bangladesh.`,
	},
];
const UserBlog = () => {
	return (
		<div>
			{/* Blogs */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8 px-0 md:px-12 w-full">
				{blogs.map((blog) => (
					<BlogItem key={blog.id} blog={blog} />
				))}
			</div>
		</div>
	);
};

export default UserBlog;
