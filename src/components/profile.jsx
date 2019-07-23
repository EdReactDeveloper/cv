import React from 'react';
import mypic from '../assets/mypic.jpg';
const profile = () => {
	return (
		<div class="profile__user aside__block-padding">
			<img src={mypic} alt="" class="profile__picture" />
			<h1 class="profile__user-name">Edward Rado</h1>
			<h3 class="profile__user-rank">Frontend Developer (React js)</h3>
		</div>
	);
};

export default profile;
