import React, { useEffect, useState } from 'react';
import PostsService from '../../services/postsService';
import { useDispatch, useSelector } from 'react-redux';
import { storeAllPosts } from '../../store/postsSlice';
import Card from '../../components/Card/Card';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../../components/Pagination/Pagination';
import LoadingAnim from '../../components/LoadingAnim/LoadingAnim';
import SearchPost from '../../components/SearchPost/SearchPost';
import CreatePost from '../../components/CreatePost/CreatePost';

function Posts() {
	const [isLoading, setIsLoading] = useState(true);

	const [searchParams, setSearchParams] = useSearchParams();

	const dispatch = useDispatch();

	const { posts, removePost, addRemoveLike, createPostNew } =
		useSelector((state) => state.postsStore);

	useEffect(() => {
		let page = searchParams.get('page')
			? searchParams.get('page')
			: 1;
		let limit = searchParams.get('limit')
			? searchParams.get('limit')
			: 9;

		PostsService.getAllPosts(page, limit).then((res) => {
			dispatch(storeAllPosts(res.data));
			setIsLoading(false);
		});
	}, [removePost, addRemoveLike, searchParams, createPostNew]);

	return (
		<div className='container mx-auto px-2 lg:px-0 sm:px-6 md:px-8 w-full max-w-[1370px]'>
			<div className='flex mt-[30px] gap-5 px-4 flex-col-reverse lg:flex-row'>
				<div className='w-full lg:w-[70%]'>
					{isLoading ? (
						<LoadingAnim />
					) : (
						<>
							<div className='grid grid-cols-1 gap-3 md:grd-cols-2 lg:grid-cols-3'>
								{posts.map((post) => {
									return <Card key={post._id} post={post} />;
								})}
							</div>
							<Pagination />
						</>
					)}
				</div>
				<div className='w-full lg:w-[30%]'>
					<SearchPost />
					<CreatePost />
				</div>
			</div>
		</div>
	);
}

export default Posts;
