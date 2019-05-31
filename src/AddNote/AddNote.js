import React from 'react';
import ApiContext from '../ApiContext';

export default class AddNote extends React.Component {

  static contextType = ApiContext;

  state = {
    noteName: '',
    noteContent: '',
    isNameValid: false,
    validationMessages: {
      name: 'Note requires a non-empty name',
    },
  }

  setName(name) {  
    this.setState({
      noteName: name,
    }, this.validateName(name))
    //Why didn't this work if we don't pass name to validateName
  }
  
  validateName(name) {
    let isValid = true;
    const validationMessages = {...this.state.validationMessages};
    
    if (name.length === 0) {
      validationMessages.name = 'Note requires a non-empty name'
      isValid = false;
    }

    this.setState({
      isNameValid: isValid,
      validationMessages,
    })
  }

  render() {

    const folderSelections = this.context.folders.map((folder, index) => {
      return <option key={index} value={folder.id}>{folder.name}</option>;
    });

    return (
      <div className='add-note'>
        <form onSubmit={(e)=> this.context.addNote(e.target.noteName.value,
          e.target.noteContent.value, e.target.folderSelection.value )}>
          <label>Note Name
            {!this.state.isNameValid && (<p className='error'>{this.state.validationMessages.name}</p>)}
          </label>
          <input id='noteName' type="text" onChange={(e) => this.setName(e.target.value)}/>

          <label>Note Content</label>
          <textarea id='noteContent' type="text" />

          <label>Select Folder</label>
          <select id='folderSelection' required >
            {folderSelections}
          </select>

          <button type='submit' disabled={!this.state.isNameValid}>Submit</button>
        </form>
      </div>
    )
  }

}