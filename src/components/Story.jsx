import React from 'react'

export default function Story(props){
	console.log(props);
	const comments = props.story.comments ? props.story.comments.items.map((c, i) => (<Comment key={i} comment={c} />)) : "Loading Comments";
	return (
		<React.Fragment>
		<section class="section">
			<div class="container">
				<h1 className="title">{props.story.original ? props.story.original.data.title: "Loading"}</h1>
				<h2 class="subtitle">{props.story.original ? props.story.original.data.date: "Loading"}</h2>
				<div className="content is-medium" dangerouslySetInnerHTML={{__html: props.story.original ? props.story.original.data.html : "Loading"}}></div>
			</div>
		</section>
		<section class="section">
			<div class="container">
				<h1 className="title">Comments:</h1>
				{comments}
			</div>
		</section>
		</React.Fragment>
	);
}

function Comment(props){
	const replies = props.comment.replies ? props.comment.replies.items.map((c, i) => (<Comment key={i} comment={c} />)) : "";
	const googleTranslate = "http://translate.google.com/#auto/en/" + props.comment.body;
	return (
		<article class="media">
		  <figure class="media-left">
		    <p class="image is-64x64">
		      <img src={props.comment.owner.avatar}/>
		    </p>
		  </figure>
		  <div class="media-content">
		    <div class="content">
		      <p>
		        <strong>{props.comment.owner.firstname + " " + props.comment.owner.lastname}</strong>
		        <br/>
		        {props.comment.body}
		        <br/>
		        <small><a target="_blank" href={googleTranslate}>Translate</a> · <a>{props.comment.upvotes - props.comment.downvotes} Points</a> · {props.comment.created}</small>
		      </p>
		    </div>
		    {replies}
		  </div>
		</article>
	)
}

