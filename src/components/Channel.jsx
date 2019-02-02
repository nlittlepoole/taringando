import React from 'react'

export default function Channel(props){
	const posts = props.posts ? props.posts.items: [];
	const items = posts.map((p, i) => <ChannelPost key={i} post={p} onClick={props.onClick} />);
	console.log(props.posts, posts);
	return (
		<section class="section">
    		<div class="container">
				{items}
			</div>
		</section>
	);
}

function ChannelPost(props) {
	return (
		<article class="media">
		  <figure class="media-left">
		    <p class="image is-64x64">
		      <img src={props.post.summary.images.slice[0] ? props.post.summary.images.slice[0].url : "https://cdn-images-1.medium.com/max/1200/1*SNI2ONdjDxSA3zeHYaMazg.png"} />
		    </p>
		  </figure>
		  <div class="media-content" onClick={(e) => props.onClick(e, props.post)}>
		    <div class="content">
		      <p>
		        <strong>{props.post.title}</strong> <small>{props.post.comments}</small> <small>Comments</small>
		        <br/>
		        {props.post.summary.excerpt}
		      </p>
		    </div>
		  </div>
		</article>
	)
}