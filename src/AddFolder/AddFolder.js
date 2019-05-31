import React from 'react';
import ApiContext from '../ApiContext';

export default class AddFolder extends React.Component {

  static contextType = ApiContext;
  

  // what sort of validation for folder?? empty name??


  render() {
    return (
      <div className='add-folder'>
        <form onSubmit={(e)=> this.context.addFolder(e.target.folderInput.value)}>
          <label>Folder Name</label>
          <input id='folderInput' type="text" />
          <button type='submit' disabled={false}>Submit</button>
        </form>
      </div>
    )
  }

}