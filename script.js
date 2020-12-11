class Comment extends React.Component{
    render() {
        return <div class="comment">
            <h5 class="commentname">{this.props.username}</h5> <span class="commentdate">{this.props.date}</span>
            <p class="commenttext">{this.props.text}</p>
        </div>
        
    }
}
console.log("Hello")
ReactDOM.render(<Comment username="Ryan"text="hi mum" date="11th Nov 2020"/>, document.getElementById('commentsList'))
