import React from 'react';
import ApiContext from '../ApiContext';
import './AddFolder.css'

export default class AddFolder extends React.Component {

  static contextType = ApiContext;
  

  // what sort of validation for folder?? empty name??


  render() {
    return (
      <div className='add-folder'>
        <form onSubmit={(e)=> {
          e.preventDefault();
          this.context.addFolder(e.target.folderInput.value)
        }}>
          <label htmlFor='folderInput'>Folder Name: </label>
          <input id='folderInput' type="text" />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }

}