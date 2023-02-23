import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

const App = () => {
	const [items, setItems] = useState([]);

	return (
		<div className='app-background'>
			<div className='main-container'>
				<div className='add-item-box'>
					<input className='add-item-input' placeholder='Add an item...' />
					<FontAwesomeIcon icon={faPlus} />
				</div>
				<div className='item-list'>
					<div className='item-container'>
						<div className='item-name'>
							{false ? (
								<>
									<FontAwesomeIcon icon={faCheckCircle} />
									<span className='completed'>Item 1</span>
								</>
							) : (
								<>
									<FontAwesomeIcon icon={faCircle} />
									<span>Item 1</span>
								</>
							)}
						</div>
						<div className='quantity'>
							<button>
								<FontAwesomeIcon icon={faChevronLeft} />
							</button>
							<span> 1 </span>
							<button>
								<FontAwesomeIcon icon={faChevronRight} />
							</button>
						</div>
					</div>
				</div>
				<div className='total'>Total: 6</div>
			</div>
		</div>
	);
};

export default App;