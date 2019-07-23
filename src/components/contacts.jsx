import React from 'react';
import { formatTitle } from './utilfunc';
const contacts = () => {
	return (
		<ul class="aside__contacts aside__block-padding">
			<li class="aside__contacts-wrapper">
				<i class="fa fa-envelope aside__icon" />
				<a href="#" class="aside__contacts-info">
					edinbox2@mail.ru
				</a>
			</li>
			<li class="aside__contacts-wrapper">
				<i class="fa fa-phone aside__icon" />
				<a href="#" class="aside__contacts-info">
					+7(978)5727823
				</a>
			</li>
			<li class="aside__contacts-wrapper">
				<i class="fab fa-linkedin-in aside__icon" />
				<a href="https://www.linkedin.com/in/eduard-rado-53926a16b/" class="aside__contacts-info">
					{formatTitle('eduard-rado-53926a16b')}
				</a>
			</li>
			<li class="aside__contacts-wrapper">
				<i class="fab fa-github aside__icon" />
				<a href="https://github.com/EdReactDeveloper" class="aside__contacts-info">
					{formatTitle('github.com/EdReactDeveloper')}
				</a>
			</li>
		</ul>
	);
};

export default contacts;
