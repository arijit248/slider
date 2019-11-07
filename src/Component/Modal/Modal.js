import React from 'react';

const modal = () => {
 return (
  <div class="container-fluid" style={{ marginTop: '5rem', padding: '0' }}>

   <a class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" style={{ width: '100%' }}>Open Modal</a>

   <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">

     <div class="modal-content">
      <div class="modal-header">
       <button type="button" class="close" data-dismiss="modal">&times;</button>
       <h4 class="modal-title">Modal Header</h4>
      </div>
      <div class="modal-body">
       <p>Some text in the modal.</p>
      </div>
      <div class="modal-footer">
       <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
     </div>

    </div>
   </div>

  </div>
 );
}
export default modal;