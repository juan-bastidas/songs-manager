import React from 'react';
class SongsPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.state = {
      song: { title: "" }
    };
  }
  onTitleChange(event){
    const song =  this.state.song;
    song.title = event.target.value;
    this.setState({song: song});
  }
  onClickSave(){
    alert(this.state.song.title);
  }


  render(){
    return(
      <div>
        <h1>Songs</h1>
        <h2>Add Song</h2>
        <input type="text" onChange={this.onTitleChange} value={this.state.song.title}/>
        <input type="submit" value="save" onClick={this.onClickSave}/>
      </div>
    );
  }
}

export default SongsPage;
