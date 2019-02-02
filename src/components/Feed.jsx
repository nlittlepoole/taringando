import React from 'react'

export default function Feed(props){
	const channels = props.channels ? props.channels.items: [];
	const items = channels.map((t, i) => <FeedItem key={i} item={t} onClick={props.onClick} />);
	return (
		<section class="section">
    		<div class="container">
				{items}
			</div>
		</section>
	);
}

function FeedItem(props) {
	return (
		<article class="media">
		  <figure class="media-left">
		    <p class="image is-64x64">
		      <img src={props.item.thumbnail} />
		    </p>
		  </figure>
		  <div class="media-content" onClick={(e) => props.onClick(e, props.item.name)}>
		    <div class="content">
		      <p>
		        <strong>{props.item.title}</strong> <small>{props.item.stories}</small> <small>Stories</small>
		        <br/>
		        {props.item.description}
		      </p>
		    </div>
		  </div>
		</article>
	)
}