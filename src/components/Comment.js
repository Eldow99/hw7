import React from 'react'
import CommentWrapper from '../UI/CommentWrapper'
import CommentDate from './CommentDate'
import UserInfo from './UserInfo'
import classes from './Comment.module.css'
function Comment(props) {
	return (
		<div className='Comment'>
			<UserInfo author={props.author} />
			<CommentWrapper className={classes.Text}>
				<div className={classes.CommentText}>{props.text}</div>
				<CommentDate date={props.date} />
			</CommentWrapper>
		</div>
	)
}

export default Comment
