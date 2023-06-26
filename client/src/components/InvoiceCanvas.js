import React, { useState } from 'react';
import InvoiceList from '../data/data.json';

const url = document.URL;
const l = document.URL.length;
const id = url.slice(l - 6);

function InvoiceCanvas() {
	const [inv] = InvoiceList.filter((invoice) => invoice.id === id);
	const [items, setItems] = useState([]);
	const [invoice, setInvoice] = useState(inv);

	const handleAddItem = () => {
		setItems([...items, {}]);
	};

	const handleRemoveItem = (index) => {
		const newItems = [...items];
		newItems.splice(index, 1);
		setItems(newItems);
	};

	if (invoice) {
		return (
			<div
				className='offcanvas offcanvas-start f-w ps-3 ps-lg-4'
				tabIndex='-1'
				id='offcanvasExample'
				aria-labelledby='offcanvasExampleLabel'>
				<nav className='sticky-top w-100 mt-4 text-start pt-3' id='canvasNav'>
					<a
						data-bs-toggle='offcanvas'
						href='#offcanvasExample'
						role='button'
						aria-controls='offcanvasExample'
						className='goBack d-inline d-md-none mb-3'>
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
						<span className='f-w fs-12 ms-2 col-black'>Go back</span>
					</a>
					<h5
						className='offcanvas-title w-100 f-w pt-4 ps-3 mb-1 col-black'
						id='offcanvasExampleLabel'>
						Edit <span className='text-color'>#</span>
						{invoice.id}
					</h5>
				</nav>
				<div className='offcanvas-body mt-2 fs-12 mb-16 text-color' id='inputs'>
					<form className='d-flex flex-column'>
						<div className='sender d-flex flex-column'>
							<span className='mb-3 col-purple'>Bill from</span>
							<div className='mb-3'>
								<label htmlFor='exampleInputEmail1' className='form-label'>
									Street Address
								</label>
								<input
									type='text'
									className='form-control py-3 px-4'
									name='senderStreetAddress'
									id='senderStreetAddress'
									aria-describedby='emailHelp'
								/>
							</div>
							<div className='row mb-3'>
								<div className='col'>
									<label htmlFor='exampleInputEmail1' className='form-label'>
										City
									</label>
									<input
										type='text'
										className='form-control py-3 px-4'
										name='senderCity'
										id='senderCity'
										aria-describedby='emailHelp'
									/>
								</div>
								<div className='col'>
									<label htmlFor='exampleInputEmail1' className='form-label'>
										Post Code
									</label>
									<input
										type='text'
										className='form-control py-3 px-4'
										name='senderPostCode'
										id='senderPostCode'
										aria-describedby='emailHelp'
									/>
								</div>
								<div className='col-md mt-3 mt-md-0'>
									<label htmlFor='exampleInputEmail1' className='form-label'>
										Country
									</label>
									<input
										type='text'
										className='form-control py-3 px-4'
										name='senderCountry'
										id='senderCountry'
										aria-describedby='emailHelp'
									/>
								</div>
							</div>
						</div>
						<div className='sender d-flex flex-column mt-4'>
							<span className='mb-3 col-purple'>Bill to</span>
							<div className='mb-3'>
								<label htmlFor='exampleInputEmail1' className='form-label'>
									Name
								</label>
								<input
									type='text'
									className='form-control py-3 px-4'
									name='clientName'
									id='clientName'
									aria-describedby='emailHelp'
								/>
							</div>
							<div className='mb-3'>
								<label htmlFor='exampleInputEmail1' className='form-label'>
									Email
								</label>
								<input
									type='email'
									className='form-control py-3 px-4'
									name='clientEmail'
									id='clientEmail'
									placeholder='e.g. email@example.com'
									aria-describedby='emailHelp'
								/>
							</div>
							<div className='mb-3'>
								<label htmlFor='exampleInputEmail1' className='form-label'>
									Street Address
								</label>
								<input
									type='text'
									className='form-control py-3 px-4'
									name='clientStreetAddress'
									id='clientStreetAddress'
									aria-describedby='emailHelp'
								/>
							</div>
							<div className='row mb-3'>
								<div className='col'>
									<label htmlFor='exampleInputEmail1' className='form-label'>
										City
									</label>
									<input
										type='text'
										className='form-control py-3 px-4'
										name='clientCity'
										id='clientCity'
										aria-describedby='emailHelp'
									/>
								</div>
								<div className='col'>
									<label htmlFor='exampleInputEmail1' className='form-label'>
										Post Code
									</label>
									<input
										type='text'
										className='form-control py-3 px-4'
										name='clientPostCode'
										id='clientPostCode'
										aria-describedby='emailHelp'
									/>
								</div>
								<div className='col-md mt-3 mt-md-0'>
									<label htmlFor='exampleInputEmail1' className='form-label'>
										Country
									</label>
									<input
										type='text'
										className='form-control py-3 px-4'
										name='clientCountry'
										id='clientCountry'
										aria-describedby='emailHelp'
									/>
								</div>
							</div>
							<div className='row mb-3'>
								<div className='col-md'>
									<label htmlFor='exampleInputEmail1' className='form-label'>
										Invoice Date
									</label>
									<input
										type='date'
										className='form-control py-3 px-4'
										placeholder='dd-mm-yyyy'
										name='invoiceDate'
										id='invoiceDate'
										aria-describedby='emailHelp'
									/>
								</div>
								<div className='col-md mt-3 mt-md-0'>
									<label htmlFor='exampleInputEmail1' className='form-label'>
										Payment Terms
									</label>
									<input
										type='text'
										className='form-control py-3 px-4'
										name='paymentTerms'
										id='paymentTerms'
										aria-describedby='emailHelp'
									/>
								</div>
							</div>
							<div className='mb-3'>
								<label htmlFor='exampleInputEmail1' className='form-label'>
									Project Description
								</label>
								<input
									type='text'
									placeholder='eg. Graphic Design'
									className='form-control py-3 px-4'
									name='projectDescription'
									id='projectDescription'
									aria-describedby='emailHelp'
								/>
							</div>
						</div>
						<div className='sender d-flex flex-column mt-4'>
							<span className='mb-3 fs-18'>Items List</span>
							{items.map((item, index) => {
								return (
									<div key={index} className='row mb-3'>
										<div className='col-md-5 mb-3 mb-md-0'>
											<label
												htmlFor='exampleInputEmail1'
												className='form-label'>
												Item Name
											</label>
											<input
												type='text'
												className='form-control py-3 px-4'
												name='itemName'
												id='itemName'
												aria-describedby='emailHelp'
											/>
										</div>
										<div className='col'>
											<label
												htmlFor='exampleInputEmail1'
												className='form-label'>
												Qty
											</label>
											<input
												type='text'
												className='form-control py-3 px-4'
												name='itemQty'
												id='itemQty'
												aria-describedby='emailHelp'
											/>
										</div>
										<div className='col'>
											<label
												htmlFor='exampleInputEmail1'
												className='form-label'>
												Price
											</label>
											<input
												type='text'
												className='form-control py-3 px-4'
												name='itemPrice'
												id='itemPrice'
												aria-describedby='emailHelp'
											/>
										</div>
										<div className='col'>
											<label
												htmlFor='exampleInputEmail1'
												className='form-label'>
												Total
											</label>
											<input
												type='text'
												className='form-control py-3 px-4 border border-0 bg-transparent'
												name='itemTotal'
												id='itemTotal'
												aria-describedby='emailHelp'
												defaultValue='0'
												disabled
											/>
										</div>
										<div className='col-1 d-flex align-items-center justify-content-center pt-3'>
											<button
												type='button'
												className='btn btn-transparent'
												onClick={() => handleRemoveItem(index)}>
												<i className='bi bi-trash-fill'></i>
											</button>
										</div>
									</div>
								);
							})}
							<button
								type='button'
								className='btn btn-secondary rounded-pill mt-1 mb-2 border border-0'
								id='editButton'
								onClick={handleAddItem}>
								<span className='f-w fs-12'>+ Add New Item</span>
							</button>
						</div>
					</form>
				</div>
				<nav className='nav sticky-bottom d-flex py-4 px-4' id='canvasFooter'>
					<div className='d-flex flex-row w-100 justify-content-center'>
						<div className='text-center me-md-auto'></div>
						<div className='text-center'>
							<button
								className='btn border border-0 rounded-pill mx-2'
								data-bs-dismiss='offcanvas'
								aria-label='Close'
								id='editButton'>
								<span className='f-w fs-12'>Discard</span>
							</button>
						</div>
						<div className='text-center'>
							<button
								className='btn border border-0 rounded-pill mx-2'
								id='markButton'>
								<span className='f-w fs-12'>Save & Send</span>
							</button>
						</div>
					</div>
				</nav>
			</div>
		);
	}

	return (
		<div
			className='offcanvas offcanvas-start f-w ps-3 ps-lg-4'
			tabIndex='-1'
			id='offcanvasExample'
			aria-labelledby='offcanvasExampleLabel'>
			<nav className='sticky-top w-100 mt-4 text-start pt-3' id='canvasNav'>
				<a
					data-bs-toggle='offcanvas'
					href='#offcanvasExample'
					role='button'
					aria-controls='offcanvasExample'
					className='goBack d-inline d-md-none mb-3'>
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
					<span className='f-w fs-12 ms-2 col-black'>Go back</span>
				</a>
				<h5
					className='offcanvas-title w-100 f-w pt-4 ps-3 mb-1 col-black'
					id='offcanvasExampleLabel'>
					New Invoice
				</h5>
			</nav>
			<div className='offcanvas-body mt-2 fs-12 mb-16 text-color' id='inputs'>
				<form className='d-flex flex-column' noValidate>
					<div className='sender d-flex flex-column'>
						<span className='mb-3 col-purple'>Bill from</span>
						<div className='mb-3'>
							<div className='d-flex justify-content-evenly'>
								<label
									htmlFor='exampleInputEmail1'
									className='form-label me-auto'>
									Street Address
								</label>
								<label
									htmlFor='exampleInputEmail1'
									className='form-label space'>
									can't be empty
								</label>
							</div>
							<input
								type='text'
								className='form-control py-3 px-4'
								name='senderStreetAddress'
								id='senderStreetAddress'
								aria-describedby='emailHelp'
								required
							/>
						</div>
						<div className='row mb-3'>
							<div className='col'>
								<div className='d-flex justify-content-evenly'>
									<label
										htmlFor='exampleInputEmail1'
										className='form-label me-auto'>
										City
									</label>
									<label
										htmlFor='exampleInputEmail1'
										className='form-label space'>
										can't be empty
									</label>
								</div>
								<input
									type='text'
									className='form-control py-3 px-4'
									name='senderCity'
									id='senderCity'
									aria-describedby='emailHelp'
								/>
							</div>
							<div className='col'>
								<label htmlFor='exampleInputEmail1' className='form-label'>
									Post Code
								</label>
								<input
									type='text'
									className='form-control py-3 px-4'
									name='senderPostCode'
									id='senderPostCode'
									aria-describedby='emailHelp'
								/>
							</div>
							<div className='col-md mt-3 mt-md-0'>
								<label htmlFor='exampleInputEmail1' className='form-label'>
									Country
								</label>
								<input
									type='text'
									className='form-control py-3 px-4'
									name='senderCountry'
									id='senderCountry'
									aria-describedby='emailHelp'
								/>
							</div>
						</div>
					</div>
					<div className='sender d-flex flex-column mt-4'>
						<span className='mb-3 col-purple'>Bill to</span>
						<div className='mb-3'>
							<label htmlFor='exampleInputEmail1' className='form-label'>
								Name
							</label>
							<input
								type='text'
								className='form-control py-3 px-4'
								name='clientName'
								id='clientName'
								aria-describedby='emailHelp'
							/>
						</div>
						<div className='mb-3'>
							<label htmlFor='exampleInputEmail1' className='form-label'>
								Email
							</label>
							<input
								type='email'
								className='form-control py-3 px-4'
								name='clientEmail'
								id='clientEmail'
								placeholder='e.g. email@example.com'
								aria-describedby='emailHelp'
							/>
						</div>
						<div className='mb-3'>
							<label htmlFor='exampleInputEmail1' className='form-label'>
								Street Address
							</label>
							<input
								type='text'
								className='form-control py-3 px-4'
								name='clientStreetAddress'
								id='clientStreetAddress'
								aria-describedby='emailHelp'
							/>
						</div>
						<div className='row mb-3'>
							<div className='col'>
								<label htmlFor='exampleInputEmail1' className='form-label'>
									City
								</label>
								<input
									type='text'
									className='form-control py-3 px-4'
									name='clientCity'
									id='clientCity'
									aria-describedby='emailHelp'
								/>
							</div>
							<div className='col'>
								<label htmlFor='exampleInputEmail1' className='form-label'>
									Post Code
								</label>
								<input
									type='text'
									className='form-control py-3 px-4'
									name='clientPostCode'
									id='clientPostCode'
									aria-describedby='emailHelp'
								/>
							</div>
							<div className='col-md mt-3 mt-md-0'>
								<label htmlFor='exampleInputEmail1' className='form-label'>
									Country
								</label>
								<input
									type='text'
									className='form-control py-3 px-4'
									name='clientCountry'
									id='clientCountry'
									aria-describedby='emailHelp'
								/>
							</div>
						</div>
						<div className='row mb-3'>
							<div className='col-md'>
								<label htmlFor='exampleInputEmail1' className='form-label'>
									Invoice Date
								</label>
								<input
									type='date'
									className='form-control py-3 px-4'
									placeholder='dd-mm-yyyy'
									name='invoiceDate'
									id='invoiceDate'
									aria-describedby='emailHelp'
								/>
							</div>
							<div className='col-md mt-3 mt-md-0'>
								<label htmlFor='exampleInputEmail1' className='form-label'>
									Payment Terms
								</label>
								<input
									type='text'
									className='form-control py-3 px-4'
									name='paymentTerms'
									id='paymentTerms'
									aria-describedby='emailHelp'
								/>
							</div>
						</div>
						<div className='mb-3'>
							<label htmlFor='exampleInputEmail1' className='form-label'>
								Project Description
							</label>
							<input
								type='text'
								placeholder='eg. Graphic Design'
								className='form-control py-3 px-4'
								name='projectDescription'
								id='projectDescription'
								aria-describedby='emailHelp'
							/>
						</div>
					</div>
					<div className='sender d-flex flex-column mt-4'>
						<span className='mb-3 fs-18'>Items List</span>
						{items.map((item, index) => {
							return (
								<div key={index} className='row mb-3'>
									<div className='col-md-5 mb-3 mb-md-0'>
										<label htmlFor='exampleInputEmail1' className='form-label'>
											Item Name
										</label>
										<input
											type='text'
											className='form-control py-3 px-4'
											name='itemName'
											id='itemName'
											aria-describedby='emailHelp'
										/>
									</div>
									<div className='col'>
										<label htmlFor='exampleInputEmail1' className='form-label'>
											Qty
										</label>
										<input
											type='text'
											className='form-control py-3 px-4'
											name='itemQty'
											id='itemQty'
											aria-describedby='emailHelp'
										/>
									</div>
									<div className='col'>
										<label htmlFor='exampleInputEmail1' className='form-label'>
											Price
										</label>
										<input
											type='text'
											className='form-control py-3 px-4'
											name='itemPrice'
											id='itemPrice'
											aria-describedby='emailHelp'
										/>
									</div>
									<div className='col'>
										<label htmlFor='exampleInputEmail1' className='form-label'>
											Total
										</label>
										<input
											type='text'
											className='form-control py-3 px-4 border border-0 bg-transparent'
											name='itemTotal'
											id='itemTotal'
											aria-describedby='emailHelp'
											defaultValue='0'
											disabled
										/>
									</div>
									<div className='col-1 d-flex align-items-center justify-content-center pt-3'>
										<button
											type='button'
											className='btn btn-transparent'
											onClick={() => handleRemoveItem(index)}>
											<i className='bi bi-trash-fill'></i>
										</button>
									</div>
								</div>
							);
						})}
						<button
							type='button'
							className='btn btn-secondary rounded-pill mt-1 mb-2 border border-0'
							id='editButton'
							onClick={handleAddItem}>
							<span className='f-w fs-12'>+ Add New Item</span>
						</button>
					</div>
				</form>
			</div>
			<nav className='nav sticky-bottom d-flex py-4 px-4' id='canvasFooter'>
				<div className='d-flex flex-row w-100 justify-content-center'>
					<div className='text-center me-md-auto'>
						<button
							className='btn border border-0 rounded-pill mx-2'
							data-bs-dismiss='offcanvas'
							aria-label='Close'
							id='editButton'>
							<span className='f-w fs-12'>Discard</span>
						</button>
					</div>
					<div className='text-center'>
						<button className='btn rounded-pill mx-2' id='saveDraft'>
							<span className='f-w fs-12'>Save as Draft</span>
						</button>
					</div>
					<div className='text-center'>
						<button
							type='submit'
							className='btn border border-0 rounded-pill mx-2'
							id='markButton'>
							<span className='f-w fs-12'>Save & Send</span>
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default InvoiceCanvas;
