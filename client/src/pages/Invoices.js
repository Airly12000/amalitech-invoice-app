import React, { useState } from 'react';
import InvoiceList from '../data/data.json';
import { getDate, statusButton, capitalize } from '../components/Utilities';
import checkIcon from '../assets/images/icon-check.svg';

function Invoices() {
	const [filterArg, setFilterArg] = useState('');

	return (
		<main className='col row overflow-auto mt-lg-4'>
			<div className='col pt-4'>
				<div className='d-flex flex-row m-3'>
					<div className='col'>
						<h2 className='f-w-900 col-black'>Invoices</h2>
						<p className='f-w fs-12 text-color'>
							<span className='d-none d-lg-inline'>There are</span> 7 total
							invoices
						</p>
					</div>
					<div className='d-flex align-items-center flex-row-reverse justify-content-evenly'>
						<button
							className='rounded-pill newB mx-auto d-flex flex-row align-items-center justify-content-center'
							data-bs-toggle='offcanvas'
							data-bs-target='#offcanvasExample'
							aria-controls='offcanvasExample'>
							<span className='plus rounded-circle me-lg-1 d-flex f-w-900 pt-1 align-items-center justify-content-center'>
								+
							</span>
							<span className='text mx-1'>
								New <span className='d-none d-lg-inline'>Invoice</span>
							</span>
						</button>
						<div className='dropdown-center me-4 f-w fs-12'>
							<button
								className='btn dropdown-toggle border border-0 col-black'
								data-bs-toggle='dropdown'
								aria-expanded='false'>
								<span className='f-w fs-12'>Filter </span>
								<span className='d-none d-lg-inline f-w fs-12'>by status</span>
							</button>
							<ul className='dropdown-menu'>
								<li className='d-flex align-items-center ps-3 fs-12 mb-2 mt-2'>
									<input
										type='radio'
										name='status'
										id=''
										className='me-2'
										onChange={() => setFilterArg('')}
										defaultChecked
									/>
									All
								</li>
								<li
									className='d-flex align-items-center ps-3 fs-12 mb-2'
									onChange={() => setFilterArg('draft')}>
									<input type='radio' name='status' id='' className='me-2' />
									Draft
								</li>
								<li
									className='d-flex align-items-center ps-3 fs-12 mb-2'
									onChange={() => setFilterArg('pending')}>
									<input type='radio' name='status' id='' className='me-2' />
									Pending
								</li>
								<li
									className='d-flex align-items-center ps-3 fs-12 mb-2'
									onChange={() => setFilterArg('paid')}>
									<input type='radio' name='status' id='' className='me-2' />
									Paid
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='mt-lg-5 f-w fs-12 mb-5'>
					{InvoiceList.filter((invoice) =>
						invoice.status.includes(filterArg)
					).map((invoice) => {
						return (
							<a href={'/invoice/' + invoice.id} id='invoice' key={invoice.id}>
								<div
									className='d-flex align-items-md-center flex-md-row justify-content-center card m-3 mx-md-1 mx-lg-2 mx-xl-3 card-hover position-relative'
									style={{ color: 'hsl(231,20%,61%)' }}
									id='invoiceCard'>
									<div
										className='col-md-2 ms-4 ms-md-0 align-self-start align-self-md-center text-center f-w-900 pId col-black'
										id='pId'>
										<span style={{ color: 'rgb(146, 119, 255)' }}>#</span>
										{invoice.id}
									</div>
									<div className='col-md ms-4 ms-md-0 align-self-start align-self-md-center text-center'>
										Due {getDate(invoice.paymentDue)}
									</div>
									<div className='col-md-2 me-4 me-md-0 align-self-end align-self-md-center text-center pName'>
										{invoice.clientName}
									</div>
									<div className='col-md ms-4 ms-md-0 align-self-start align-self-md-center fs-16 f-w-900 text-center pPrice col-black'>
										${invoice.total.toFixed(2)}
									</div>
									<div className='col-md-2 me-4 me-md-0 align-self-end align-self-md-center d-flex flex-row align-items-center text-center pStatus'>
										<span
											className={
												'd-flex flex-row align-items-center justify-content-center rounded border border-0 ' +
												statusButton(invoice.status)
											}>
											<i
												className='bi bi-circle-fill pe-1'
												style={{
													fontSize: 0.5 + 'rem',
												}}></i>
											<span className='fs-12 f-w'>
												{capitalize(invoice.status)}
											</span>
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
						);
					})}
				</div>
			</div>
		</main>
	);
}

export default Invoices;
