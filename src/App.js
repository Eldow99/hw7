import './App.css'
import Comment from './components/Comment'
function App() {
	const comment = {
		date: new Date(),
		text: 'I hope you enjoy learning React!',
		author: {
			name: 'Hello Kitty',
			avatarUrl: 'http://placekitten.com/g/64/64',
		},
	}

	return (
		<div className='App'>
			<Comment
				author={comment.author}
				text={comment.text}
				date={comment.date}
			/>
		</div>
	)
}

export default App
