import React from 'react'
import CommentWrapper from '../UI/CommentWrapper'
import CommentDate from './CommentDate'
import UserInfo from './UserInfo'
import classes from './Comment.module.css'
function Comment(props) {
	return (
		<div className={classes.blocks}>
			{props.comment.map((el) => (
				<div key={Math.random().toString()} className='Comment'>
					<UserInfo author={el.author} />
					<CommentWrapper className={classes.Text}>
						<div>{el.text}</div>
						<CommentDate date={el.date} />
					</CommentWrapper>
				</div>
			))}
		</div>
	)
}

export default Comment
