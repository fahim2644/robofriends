import React from 'react';

const Card = (props) => {
	const { email, id, name } = props;
	return (
		<div className="tc bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5">
			<img alt="robot" src={`https://robohash.org/${id}?size=200x200`} />
			<div>
				<h2>{ name }</h2>
				<p>{ email }</p>
			</div>

		</div>
	)
}

export default Card;