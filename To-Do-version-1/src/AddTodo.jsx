function AddTodo(){
  return <div class="container text-center">
        <div class="row">
          <div class="col-sm-6">
            <input type="textarea" placeholder="Enter ToDo Here" />
          </div>
          <div class="col-sm-3">
            <input type="date" />
          </div>
          <div class="col-sm-2">
            <button type="button" class="btn btn-success addbtn">
              Add
            </button>
          </div>
        </div>
      </div>
}
export default AddTodo;