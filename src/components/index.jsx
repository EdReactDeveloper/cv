import React, { Component } from 'react';

import Profile from './profile';
import Contacts from './contacts';
import Education from './education';
import Lanuages from './languages';
import Interests from './interests';
import Main from './main';
class One extends Component {
	render() {
		return (
			<div class="wrapper">
				<aside class="profile">
					<Profile />
					<div class="aside__main">
						<Contacts />
						<Education />

						<Lanuages />

						<Interests />
					</div>
				</aside>
				<Main />
			</div>
		);
	}
}

export default One;
