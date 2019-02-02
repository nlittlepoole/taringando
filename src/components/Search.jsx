import React from 'react'

export default function SearchChannels(props){
	const input = props.query ? <input class="input" value={props.query} type="text" placeholder="Channel" onChange={props.inputChange}/>: <input class="input" type="text" placeholder="Channel" onChange={props.inputChange} />;
	return (
		<section class="section">
    		<div class="container">
				<div class="field has-addons">
				  <p class="control is-expanded">
				    {input}
				  </p>
				  <p class="control">
				    <a class="button is-info" onClick={props.onClick}>
				      Search
				    </a>
				  </p>
				</div>
			</div>
		</section>
	);
}
