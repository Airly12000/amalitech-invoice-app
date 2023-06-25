import React from 'react';

function InvoiceDetails() {
	return (
		<div class='col row overflow-auto mt-lg-4x'>
			<div className='col pt-4 m-3'>
				<a href='/' className='goBack'>
					<svg
						className='gb-i'
						color='hsl(252, 94%, 67%)'
						viewBox='0 0 1024 1024'
						style={{
							display: 'inline-block',
							stroke: 'currentcolor',
							fill: 'currentcolor',
							width: 10 + 'px',
							height: 10 + 'px',
						}}>
						<path d='M730.6 18.4l-505.4 505.2 505.4 505.4 144.8-144.8-360.6-360.6 360.6-360.4z'></path>
					</svg>
					<span className='f-w fs-12 ms-4 col-black'>Go back</span>
				</a>
				<div className='d-flex flex-row card my-4 border border-0 py-4 px-4 f-w fs-12'>
					<div className='d-flex flex-row align-items-center justify-content-start flex-grow-1'>
						<span className='me-auto me-md-3 text-color'>Status</span>
						<span className='d-flex flex-row align-items-center justify-content-center rounded border border-0 pendingButton'>
							<i
								className='bi bi-circle-fill pe-1'
								style={{
									fontSize: 0.5 + 'rem',
								}}></i>
							<span className='fs-12 f-w'>Pending</span>
						</span>
					</div>
					<div className='d-none d-md-block' id='foot'>
						<button
							className='btn btn-secondary border border-0 rounded-pill mx-1'
							id='editButton'>
							<span className='f-w fs-12'>Edit</span>
						</button>
						<button
							className='btn btn-danger border border-0 rounded-pill mx-1'
							id='deleteButton'>
							<span className='f-w fs-12'>Delete</span>
						</button>
						<button
							className='btn btn-primary border border-0 rounded-pill mx-1'
							id='markButton'>
							<span className='f-w fs-12'>Mark as Paid</span>
						</button>
					</div>
				</div>
				<div className='d-flex flex-column card my-4 border border-0 py-3 pt-5 px-5 f-w fs-12'>
					<div className='d-flex flex-column flex-md-row w-100 mb-3'>
						<div className='flex-grow-1 mb-3 mb-md-0'>
							<div className='col col-black'>
								<span className='text-color'>#</span>RJ1234
							</div>
							<div className='col text-color'>Graphic Design</div>
						</div>
						<div className='flex-shrink-1 text-start text-md-end text-color'>
							<div className='col'>Airly</div>
							<div className='col'>Washington</div>
							<div className='col'>Hi there</div>
							<div className='col'>Bye bye</div>
						</div>
					</div>
					<div className='d-flex flex-column flex-md-row w-100'>
						<div className='d-flex flex-row flex-fill mb-3 mb-md-0'>
							<div className='d-flex flex-fill flex-column'>
								<div className='col mb-4'>
									<div className='col text-color'>Invoice Date</div>
									<div className='col col-black'>21 August 2021</div>
								</div>
								<div className='col'>
									<div className='col text-color'>Payment Due</div>
									<div className='col col-black'>21 September 2021</div>
								</div>
							</div>
							<div className='flex-fill text-color'>
								<div className='col'>Bill to</div>
								<div className='col col-black'>Francis Junior</div>
								<div className='col'>Francis Junior</div>
								<div className='col'>Francis Junior</div>
							</div>
						</div>
						<div className='flex-grow-1'>
							<div className='col text-color'>Sent to</div>
							<div className='col col-black'>littlefrancis28@gmail.com</div>
						</div>
					</div>
					<div
						className='d-flex flex-column card my-4 rounded border border-0 pt-4 f-w fs-12'
						id='items'>
						<div className='d-flex flex-column px-3 pb-2 flex-fill col-white'>
							<div className='d-none d-md-flex mb-3 text-color'>
								<div className='col col-md-5'>Item Name</div>
								<div className='col d-none d-md-flex flex-row'>
									<div className='col text-center'>Qty</div>
									<div className='col text-end'>Price</div>
								</div>
								<div className='col col-md-3 text-end'>Total</div>
							</div>
							<div className='d-flex mb-3'>
								<div className='col col-md-5 d-flex flex-column col-black'>
									<span>Mango </span>
									<span className='d-block d-md-none mt-2 text-color'>
										5 x $ 4.00
									</span>
								</div>
								<div className='col d-none d-md-flex flex-row text-color'>
									<div className='col text-center'>5</div>
									<div className='col text-end'>$ 4.00</div>
								</div>
								<div className='col col-md-3 text-end align-self-center col-black'>
									$ 20.00
								</div>
							</div>
						</div>
						<div
							className='d-flex flex-row rounded-bottom py-4 px-5 w-100'
							id='divAmtDue'>
							<div className='flex-grow-1 col-white'>Amount Due</div>
							<div className='flex-fill text-end col-white'>$ 1234.00</div>
						</div>
					</div>
				</div>
			</div>
			<nav className='nav sticky-bottom d-flex d-md-none py-4 px-3 bg-footer'>
				<div className='d-flex fle-row w-100 justify-content-center'>
					<div className='text-center'>
						<button
							className='btn btn-secondary border border-0 rounded-pill mx-1'
							id='editButton'>
							<span className='f-w fs-12'>Edit</span>
						</button>
					</div>
					<div className='text-center'>
						<button
							className='btn btn-danger border border-0 rounded-pill mx-1'
							id='deleteButton'>
							<span className='f-w fs-12'>Delete</span>
						</button>
					</div>
					<div className='text-center'>
						<button
							className='btn btn-primary border border-0 rounded-pill mx-1'
							id='markButton'>
							<span className='f-w fs-12'>Mark as Paid</span>
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default InvoiceDetails;
