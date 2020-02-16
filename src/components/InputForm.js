import React from 'react';

export default class Inputform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInput: '',
      error: false
    };
  }
  render(){
    return (
      <div className="inputForm">
        <form onSubmit={e => e.preventDefault()}>
          <input
            className={this.state.error? "errorfrmInput":"frminput"}
            type="text"
            value={this.state.currentInput}
            placeholder="Enter a task to be done"
            autoFocus={true}
            onChange={e => this.setState({
              currentInput: e.target.value,
              error: false
            })}
            onKeyPress={(e)=>{
              if(e.target.value==='')
              {
                this.setState({error: true});
                return false;
              }
              if(e.which===13)
              {
                this.props.addTodo(e.target.value);
                this.setState({currentInput: ''})
              }
            }}
          />
        </form>
        <span className={this.state.error? "showError":"hide"}>Error: Please enter a valid task</span>
      </div>
    );
  }
  // todo: show error, when saved in empty State
  //check for empty input in onkeypress
}