import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [studentClass, setStudentClass] = useState("");

  const [search, setSearch] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editRollNumber, setEditRollNumber] = useState("");
  const [editClass, setEditClass] = useState("");

  // Add Student
  function handleSubmit(e) {
    e.preventDefault();

    if (
      name.trim() === "" ||
      rollNumber.trim() === "" ||
      studentClass.trim() === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    const rollExists = students.some(
      (student) =>
        student.rollNumber.toLowerCase() ===
        rollNumber.trim().toLowerCase()
    );

    if (rollExists) {
      alert("Roll number already exists");
      return;
    }

    const newStudent = {
      id: students.length + 1,
      name: name.trim(),
      rollNumber: rollNumber.trim(),
      studentClass: studentClass.trim()
    };

    setStudents([...students, newStudent]);

    setName("");
    setRollNumber("");
    setStudentClass("");
  }

  // Delete Student
  function deleteStudent(id) {
    const updatedStudents = students.filter(
      (student) => student.id !== id
    );

    setStudents(updatedStudents);
  }

  // Start Editing
  function editStudent(student) {
    setEditingId(student.id);
    setEditName(student.name);
    setEditRollNumber(student.rollNumber);
    setEditClass(student.studentClass);
  }

  // Save Edited Student
  function saveStudent(id) {
    if (
      editName.trim() === "" ||
      editRollNumber.trim() === "" ||
      editClass.trim() === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    const rollExists = students.some(
      (student) =>
        student.id !== id &&
        student.rollNumber.toLowerCase() ===
          editRollNumber.trim().toLowerCase()
    );

    if (rollExists) {
      alert("Roll number already exists");
      return;
    }

    const updatedStudents = students.map((student) => {
      if (student.id === id) {
        return {
          ...student,
          name: editName.trim(),
          rollNumber: editRollNumber.trim(),
          studentClass: editClass.trim()
        };
      }

      return student;
    });

    setStudents(updatedStudents);
    setEditingId(null);
  }

  // Cancel Editing
  function cancelEdit() {
    setEditingId(null);
  }

  // Search students by name
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4">
        Student List Management
      </h1>

      {/* Add Student Form */}
      <div className="card p-4 mb-4">

        <h3 className="mb-3">Add New Student</h3>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">
              Student Name
            </label>

            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter student name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Roll Number
            </label>

            <input
              type="text"
              className="form-control"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              placeholder="Enter roll number"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Class
            </label>

            <input
              type="text"
              className="form-control"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              placeholder="Example: 10A"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
          >
            Add Student
          </button>

        </form>
      </div>

      {/* Search */}
      <div className="mb-4">

        <input
          type="text"
          className="form-control"
          placeholder="Search student by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* Student List */}
      <div className="card p-4">

        <h3 className="mb-3">Student List</h3>

        {filteredStudents.length === 0 ? (

          <p>No students found</p>

        ) : (

          <div className="table-responsive">

            <table className="table table-bordered table-striped">

              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Student Name</th>
                  <th>Roll Number</th>
                  <th>Class</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                {filteredStudents.map((student) => (

                  <tr key={student.id}>

                    <td>{student.id}</td>

                    <td>
                      {editingId === student.id ? (
                        <input
                          type="text"
                          className="form-control"
                          value={editName}
                          onChange={(e) =>
                            setEditName(e.target.value)
                          }
                        />
                      ) : (
                        student.name
                      )}
                    </td>

                    <td>
                      {editingId === student.id ? (
                        <input
                          type="text"
                          className="form-control"
                          value={editRollNumber}
                          onChange={(e) =>
                            setEditRollNumber(e.target.value)
                          }
                        />
                      ) : (
                        student.rollNumber
                      )}
                    </td>

                    <td>
                      {editingId === student.id ? (
                        <input
                          type="text"
                          className="form-control"
                          value={editClass}
                          onChange={(e) =>
                            setEditClass(e.target.value)
                          }
                        />
                      ) : (
                        student.studentClass
                      )}
                    </td>

                    <td>

                      {editingId === student.id ? (

                        <div>
                          <button
                            className="btn btn-success btn-sm me-2"
                            onClick={() =>
                              saveStudent(student.id)
                            }
                          >
                            Save
                          </button>

                          <button
                            className="btn btn-secondary btn-sm"
                            onClick={cancelEdit}
                          >
                            Cancel
                          </button>
                        </div>

                      ) : (

                        <div>
                          <button
                            className="btn btn-warning btn-sm me-2"
                            onClick={() =>
                              editStudent(student)
                            }
                          >
                            Edit
                          </button>

                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() =>
                              deleteStudent(student.id)
                            }
                          >
                            Delete
                          </button>
                        </div>

                      )}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </div>
  );
}

export default App;