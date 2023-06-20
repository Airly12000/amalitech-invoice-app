import React, { useState } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import InvoiceModal from './components/InvoiceModal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Invoices from './pages/Invoices';
import InvoiceDetails from './pages/InvoiceDetails';

function App() {
	const [openModal, setOpenModal] = useState(false);
	return (
		<div>
			<div className='container-fluid'>
				<div className='col'>
					<SideBar />
				</div>
				{openModal && <InvoiceModal />}
				<div className='col'>
					<Router>
						<Routes>
							<Route exact path='/' element={<Invoices />} />
							<Route exact path='/invoice/:id' element={<InvoiceDetails />} />
						</Routes>
					</Router>
				</div>
			</div>
		</div>
	);
}

export default App;
