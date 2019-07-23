import React from 'react';
import { experience } from './data';

const sectionFour = () => {
	return (
		<div class="main__block">
			<div class="main__block-title">
				<div class="main__block-icon">
					<i class="fa fa-rocket" />
				</div>
				<h2 class="main__block-header">Experience</h2>
			</div>
			<ul className="experience">
				{experience.map((el, i) => (
					<li key={i} className="experience__item">
						<span>{el.date}</span>
						<p>{el.text}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default sectionFour;
