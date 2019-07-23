import React from 'react';
import { technologies } from './data';
const sectionTwo = () => {
	return (
		<div class="main__block">
			<div class="main__block-title">
				<div class="main__block-icon">
					<i class="fa fa-briefcase" />
				</div>
				<h2 class="main__block-header">TECHNOLOGIES</h2>
			</div>

			<ul className="technologies">
				{technologies.map(el => (
					<li className="technologies__item" key={el.name}>
						<img src={el.img} alt={el.name} className="technologies__item--img" />
						<div>{el.name}</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default sectionTwo;
