import React, { useState } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import InvoiceCanvas from './components/InvoiceCanvas';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Invoices from './pages/Invoices';
import InvoiceDetails from './pages/InvoiceDetails';

export const Context = React.createContext();

function App() {
	const [openModal, setOpenModal] = useState(false);
	const [modalTitle, setModalTitle] = useState('Confrim');
	const [modalBody, setModalBody] = useState('Are you sure');
	const [modalButton, setModalButton] = useState('primary');

	return (
		<div>
			<div className='container-fluid' id='mainBody'>
				<div className='row'>
					<SideBar />
					<InvoiceCanvas />
					<div className='col d-flex flex-column vh-90 position-relative'>
						<div className='row'>
							<div className='col-md-1 col-xl-2'></div>
							<div className='col-md col-lg'>
								<Context.Provider
									value={{
										openModal,
										setOpenModal,
										modalTitle,
										modalBody,
										modalButton,
										setModalTitle,
										setModalBody,
										setModalButton,
									}}>
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
								</Context.Provider>
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
