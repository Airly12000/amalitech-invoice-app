import React, { useState } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import InvoiceCanvas from './components/InvoiceCanvas';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Invoices from './pages/Invoices';
import InvoiceDetails from './pages/InvoiceDetails';

function App() {
	const [openModal, setOpenModal] = useState(true);
	return (
		<div>
			<div className='container-fluid'>
				<div className='row'>
					<SideBar />
					{openModal && <InvoiceCanvas />}
					<div
						class='col d-flex flex-column vh-90 position-relative'
						style={{ backgroundColor: '#f8f8f8' }}>
						<div className='row'>
							<div className='col-md-1 col-xl-2'></div>
							<div className='col-md col-lg'>
								<Router>
									<Routes>
										<Route exact path='/' element={<Invoices />} />
										<Route
											exact
											path='/invoice/:id'
											element={<InvoiceDetails />}
										/>
									</Routes>
								</Router>
							</div>
							<div className='col-md-1 col-xl-2'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
