import React from "react";

const EmployeeTable = () => {
  return (
    <div>
      <h1>Employee CRUD</h1>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Salary</th>
            <th scope="col">DOB</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>DOB</td>
            <td>
              <button type="button" class="btn btn-success">
                Edit
              </button>
              <button type="button" class="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>DOB</td>

            <td>
              <button type="button" class="btn btn-success">
                Edit
              </button>
              <button type="button" class="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
