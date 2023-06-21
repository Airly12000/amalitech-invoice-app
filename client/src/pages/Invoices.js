import React from 'react';

function Invoices() {
	return (
		<main class='col row overflow-auto mt-lg-4'>
			<div class='col pt-4'>
				<div className='d-flex flex-row m-3'>
					<div className='col'>
						<h2 className='f-w-900'>Invoices</h2>
						<p className='f-w fs-12'>
							<span class='d-none d-lg-inline'>There are</span> 7 total invoices
						</p>
					</div>
					<div className='d-flex align-items-center flex-row-reverse justify-content-evenly'>
						<button className='rounded-pill newB mx-auto d-flex flex-row align-items-center justify-content-center'>
							<span className='plus rounded-circle me-lg-1 d-flex f-w-900 pt-1 align-items-center justify-content-center'>
								+
							</span>
							<span className='text mx-1'>
								New <span class='d-none d-lg-inline'>Invoice</span>
							</span>
						</button>
						<div class='dropdown-center me-4 f-w fs-12'>
							<button
								class='btn dropdown-toggle border border-0'
								data-bs-toggle='dropdown'
								aria-expanded='false'>
								<span className='f-w fs-12'>Filter </span>
								<span class='d-none d-lg-inline f-w fs-12'>by status</span>
							</button>
							<ul class='dropdown-menu dropdown-menu-dark'>
								<li>
									<a class='dropdown-item' href='#'>
										Action
									</a>
								</li>
								<li>
									<a class='dropdown-item' href='#'>
										Another
									</a>
								</li>
								<li>
									<a class='dropdown-item' href='#'>
										Action
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='mt-lg-5 f-w fs-12'>
					<a href='/invoice/1' className='invoice'>
						<div
							class='d-flex align-items-md-center flex-md-row justify-content-center card m-3 card-hover position-relative'
							id='invoiceCard'>
							<div
								className='col-md-2 ms-4 ms-md-0 align-self-start align-self-md-center text-center f-w-900 pId'
								id='pId'>
								#RT1234
							</div>
							<div className='col-md ms-4 ms-md-0 align-self-start align-self-md-center text-center'>
								Due 19th August 2021
							</div>
							<div className='col-md-2 me-4 me-md-0 align-self-end align-self-md-center text-center pName'>
								Jenna Moore
							</div>
							<div className='col-md ms-4 ms-md-0 align-self-start align-self-md-center fs-18 text-center pPrice '>
								$1898.20
							</div>
							<div className='col-md-2 me-4 me-md-0 align-self-end align-self-md-center d-flex flex-row align-items-center text-center pStatus'>
								<span className='d-flex flex-row align-items-center justify-content-center rounded border border-0 pendingButton'>
									<i
										className='bi bi-circle-fill pe-1'
										style={{
											fontSize: 0.5 + 'rem',
										}}></i>
									<span className='fs-12 f-w'>Pending</span>
								</span>
								<span className='d-none d-md-inline ms-3 me-1'>
									<svg
										color='hsl(252, 94%, 67%)'
										viewBox='0 0 1024 1024'
										style={{
											display: 'inline-block',
											stroke: 'currentcolor',
											fill: 'currentcolor',
											width: 10 + 'px',
											height: 10 + 'px',
										}}>
										<path d='M328.4 30l-144.8 144.8 337.2 337.2-337.2 337.2 144.8 144.8 482-482z'></path>
									</svg>
								</span>
							</div>
						</div>
					</a>
				</div>
			</div>
		</main>
	);
}

export default Invoices;
