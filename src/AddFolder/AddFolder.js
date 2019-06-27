import React from 'react';
import ApiContext from '../ApiContext';
import './AddFolder.css'

export default class AddFolder extends React.Component {

  static contextType = ApiContext;
  
  state = {
    folderName: '',
    isNameValid: false,
    validationMessages: {
      name: 'Folder requires a non-empty name',
    },
  }
  
  setName(name) {  

    let isValid = true;
    const validationMessages = {...this.state.validationMessages};
    
    if (name.length === 0) {
      validationMessages.name = 'Note requires a non-empty name'
      isValid = false;
    }

    this.setState({
      isNameValid: isValid,
      validationMessages,
      folderName: name,
    })

  }

  render() {
    return (
      <div className='add-folder'>
        <form onSubmit={(e)=> {
          e.preventDefault();
          this.context.addFolder(e.target.folderInput.value)
        }}>
          <label htmlFor='folderInput'>Folder Name: 
            {!this.state.isNameValid && (<p className='error'>{this.state.validationMessages.name}</p>)}
          </label>
          <input id='folderInput' type="text" onChange={(e) => this.setName(e.target.value)} />
          <button disabled={!this.state.isNameValid} type='submit'>Submit</button>
        </form>
      </div>
    )
  }

}