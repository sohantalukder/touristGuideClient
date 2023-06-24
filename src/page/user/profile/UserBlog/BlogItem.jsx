import React from 'react';
import { FcLike } from 'react-icons/fc';
import { MdLocationPin } from 'react-icons/md';
const BlogItem = ({ blog }) => {
	const { shareImage, userImage, name, message } = blog;
	return (
		<div>
			<div className="border border-mediumGray rounded-md ">
				<img
					src={shareImage}
					className="w-full h-[150px] bg-cover bg-center"
					alt=""
				/>
				<div className="p-4">
					<div className="flex justify-between">
						<div className="flex space-x-2 justify-center">
							<img src={userImage} className="w-10" alt="" />
							<div>
								<p className="font-semibold text-sm">{name}</p>
								<div className="flex space-x-1 text-xs">
									<MdLocationPin />

									<a href="/">Location</a>
								</div>
							</div>
						</div>
						<div className="flex space-x-1 ">
							<FcLike />
							<p>10K</p>
						</div>
					</div>
					<p className="pt-4 text-xs">{message}</p>
				</div>
			</div>
		</div>
	);
};

export default BlogItem;
