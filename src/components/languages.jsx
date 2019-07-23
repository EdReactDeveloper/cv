import React from 'react';

const languages = () => {
	return (
		<div class="aside__languages aside__block-padding">
			<h3 class="aside__languages title">LANGUAGES</h3>
			<ul class="aside__languages-list">
				<li class="aside__language">
					Russian <span class="aside__language-level">(Native)</span>{' '}
				</li>
				<li class="aside__language">
					English <span class="aside__language-level">(Professional)</span>{' '}
				</li>
				<li class="aside__language">
					German <span class="aside__language-level">(Fluent)</span>
				</li>
				<li class="aside__language">
					Chinese <span class="aside__language-level">(Intermediate)</span>
				</li>
			</ul>
		</div>
	);
};

export default languages;
