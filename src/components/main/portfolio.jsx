import React from 'react';
import shop from '../../assets/portfolio/shop.png';


const sectionThree = () => {
	return (
		<div class="main__block">
			<div class="main__block-title">
				<div class="main__block-icon">
					<i class="fa fa-briefcase" />
				</div>
				<h2 class="main__block-header">MY PORTFOLIO</h2>
			</div>
			<ul className="portfolio">
				<li className="portfolio__item">
					<a href="https://protected-island-44402.herokuapp.com" className="portfolio__item--img">
						<img src={shop} alt="e-commerce website" />
					</a>
					<h3>
						<a href="https://protected-island-44402.herokuapp.com">e-commerce website</a>
					</h3>
					<div className="portfolio__item--description">
						This is a simple e-commerce website based on <strong>react</strong>, <strong>redux</strong>  for the client side and <strong>express</strong>, <strong>mongodb</strong>  for the server side. 
						The functionality includes: <strong> registration, authorisation, adding products to the user's cart and making orders </strong><br/>
						To see the project
						<a
							className="portfolio__item--description-link"
							href="https://protected-island-44402.herokuapp.com"
							style={{ color: '#2980b9' }}
						> <strong>click here</strong> <br/>
						</a> To view <a style={{ color: '#2980b9' }} className="portfolio__item--description-link" href="https://github.com/EdReactDeveloper/ShopProject">the code</a>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default sectionThree;
