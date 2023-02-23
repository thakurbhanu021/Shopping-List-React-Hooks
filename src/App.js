import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

const App = () => {
	const [items, setItems] = useState([
		{Value: 'Item 1', quantity: 1 , isCompleted: false},
		{Value: 'Item 2', quantity: 2 , isCompleted: false},
		{Value: 'Item 3', quantity: 3 , isCompleted: false},
	]);

	return (
		<div className='app-background'>
			<div className='main-container'>
				<div className='add-item-box'>
					<input className='add-item-input' placeholder='Add an item...' />
					<FontAwesomeIcon icon={faPlus} />
				</div>
				<div className='item-list'>
					{items.map((item , index)=> (
						<div className='item-container'>
						<div className='item-name'>
							{false ? (
								<>
									<FontAwesomeIcon icon={faCheckCircle} />
									<span className='completed'>{item.Value}</span>
								</>
							) : (
								<>
									<FontAwesomeIcon icon={faCircle} />
									<span>{item.Value}</span>
								</>
							)}
						</div>
						<div className='quantity'>
							<button>
								<FontAwesomeIcon icon={faChevronLeft} />
							</button>
							<span> {item.quantity} </span>
							<button>
								<FontAwesomeIcon icon={faChevronRight} />
							</button>
						</div>
					</div>
					))}				
				</div>
				<div className='total'>Total: 6</div>
			</div>
		</div>
	);
};

export default App;