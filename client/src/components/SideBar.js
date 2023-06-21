import React, { useEffect } from 'react';
import Img from '../assets/images/image-avatar.jpg';

function SideBar() {
	useEffect(() => {
		const element = document.getElementById('sidebar');
		if (window.innerWidth >= 992) {
			element.classList.add('rounded-end');
		} else {
			element.classList.remove('rounded-end');
		}
	});

	window.addEventListener('resize', () => {
		const element = document.getElementById('sidebar');
		if (window.innerWidth >= 992) {
			element.classList.add('rounded-end');
		} else {
			element.classList.remove('rounded-end');
		}
	});

	return (
		<nav
			class='col-xs-12 col-lg-1 px-lg-2 px-0 bg-dark d-flex sticky-top'
			id='sidebar'>
			<div class='d-flex flex-lg-column flex-row flex-grow-1 align-items-center align-items-lg-start px-3 pt-2 text-white'>
				<a
					href='/'
					class='d-flex align-items-center pb-lg-3 mb-md-0 me-md-auto text-white text-decoration-none'>
					<span class='fs-5'>
						B<span class='d-none d-lg-inline'>rand</span>
					</span>
				</a>
				<div class='py-lg-4 mt-lg-auto ms-auto ms-lg-0 flex-shrink-1'>
					<div className='d-flex flex-lg-column justify-content-evenly'>
						<div className='col ms-2'>
							<img
								src={Img}
								alt='hugenerd'
								width='35'
								height='35'
								class='rounded-circle'
							/>
						</div>
						<div className='col border border-lg-0 ms-lg-1 my-0 my-lg-3 mx-3 mx-lg-0'></div>
						<div className='col ms-2'>
							<img
								src={Img}
								alt='hugenerd'
								width='35'
								height='35'
								class='rounded-circle'
							/>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default SideBar;
