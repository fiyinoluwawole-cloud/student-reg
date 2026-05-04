import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export const Newcomponent = () => {
  const [collection, setCollection] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [course, setCourse] = useState("");
  const [level, setLevel] = useState("");

  const [editIndex, setEditIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleDetails = () => {
    if (!studentName || !course || !level) {
      return toast.error("Kindly fill all fields");
    }

    if (editIndex !== null) {
      const newArray = [...collection];
      newArray.splice(editIndex, 1, { studentName, course, level });

      setCollection(newArray);

      toast.success("Info updated!!");

      setStudentName("");
      setCourse("");
      setLevel("");
      setEditIndex(null);     
      setIsEditing(false);    
    } else {
      
      const details = { studentName, course, level };

      setCollection([...collection, details]);

      toast.success("Info added!!");

      setStudentName("");
      setCourse("");
      setLevel("");
    }
  };

  const handleDelete = (index) => {
    setCollection(collection.filter((_, i) => i !== index));

    if (index === editIndex) {
      setEditIndex(null);
      setIsEditing(false);
      setStudentName("");
      setCourse("");
      setLevel("");
    }
  };

  const handleEdit = (index) => {
    setIsEditing(true);
    setEditIndex(index);

    setStudentName(collection[index].studentName);
    setCourse(collection[index].course);
    setLevel(collection[index].level);
  };

  return (
    <>
      <div>
        <h2>Student Form</h2>

        <input
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="Enter Name"
          type="text"
        />
        <br />

        <input
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          placeholder="Enter Course"
          type="text"
        />
        <br />

        <input
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          placeholder="Enter Level"
          type="text"
        />
        <br />

        <button onClick={handleDetails}>
          {isEditing ? "Update Info" : "Submit"}
        </button>

        <table border="1" style={{ marginTop: "20px" }}>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Course</th>
              <th>Level</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {collection.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.studentName}</td>
                <td>{student.course}</td>
                <td>{student.level}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ToastContainer />
    </>
  );
};