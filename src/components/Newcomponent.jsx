import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Newcomponent = () => {
  // =========================
  // STATES
  // =========================
  const [collection, setCollection] = useState([]);

  const [studentName, setStudentName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [course, setCourse] = useState("");
  const [level, setLevel] = useState("");
  const [cgpa, setCgpa] = useState("");

  const [editIndex, setEditIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // TO SHOW DIFFERENT PAGES
  const [activePage, setActivePage] = useState("register");

  // SEARCH
  const [search, setSearch] = useState("");

  // =========================
  // ADD / UPDATE STUDENT
  // =========================
  const handleDetails = () => {
    if (
      !studentName ||
      !studentId ||
      !course ||
      !level ||
      !cgpa
    ) {
      return toast.error("Kindly fill all fields");
    }

    // EDIT STUDENT
    if (editIndex !== null) {
      const newArray = [...collection];

      newArray.splice(editIndex, 1, {
        studentName,
        studentId,
        course,
        level,
        cgpa,
      });

      setCollection(newArray);

      toast.success("Student updated successfully!");

      clearInputs();

      setEditIndex(null);
      setIsEditing(false);
    } else {
      // ADD STUDENT
      const details = {
        studentName,
        studentId,
        course,
        level,
        cgpa,
      };

      setCollection([...collection, details]);

      toast.success("Student has been added!");

      clearInputs();
    }
  };

  // =========================
  // CLEAR INPUTS
  // =========================
  const clearInputs = () => {
    setStudentName("");
    setStudentId("");
    setCourse("");
    setLevel("");
    setCgpa("");
  };

  // =========================
  // DELETE STUDENT
  // =========================
  const handleDelete = (index) => {
    setCollection(collection.filter((_, i) => i !== index));

    toast.success("Student deleted");

    if (index === editIndex) {
      setEditIndex(null);
      setIsEditing(false);
      clearInputs();
    }
  };

  // =========================
  // EDIT STUDENT
  // =========================
  const handleEdit = (index) => {
    setIsEditing(true);
    setEditIndex(index);

    setStudentName(collection[index].studentName);
    setStudentId(collection[index].studentId);
    setCourse(collection[index].course);
    setLevel(collection[index].level);
    setCgpa(collection[index].cgpa);

    // OPEN REGISTER PAGE
    setActivePage("register");
  };

  // =========================
  // SEARCH FILTER
  // =========================
  const filteredStudents = collection.filter((student) => {
    return (
      student.studentName
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      student.studentId
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      student.level
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  });

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#f4f6f9",
          padding: "30px",
          fontFamily: "Arial",
        }}
      >
        {/* ========================= */}
        {/* TOP BUTTONS */}
        {/* ========================= */}

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <button
            onClick={() => setActivePage("register")}
            style={{
              padding: "12px 25px",
              border: "none",
              borderRadius: "8px",
              backgroundColor:
                activePage === "register" ? "blue" : "gray",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Register Student
          </button>

          <button
            onClick={() => setActivePage("students")}
            style={{
              padding: "12px 25px",
              border: "none",
              borderRadius: "8px",
              backgroundColor:
                activePage === "students" ? "blue" : "gray",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Students
          </button>
        </div>

        {activePage === "register" && (
          <div
            style={{
              backgroundColor: "white",
              padding: "25px",
              borderRadius: "10px",
              maxWidth: "500px",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ marginBottom: "20px" }}>
              {isEditing ? "Edit Student" : "Register Student"}
            </h2>

            <input
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Enter Student Name"
              type="text"
              style={inputStyle}
            />

            <input
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              placeholder="Enter Student ID"
              type="text"
              style={inputStyle}
            />

            <input
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              placeholder="Enter Course"
              type="text"
              style={inputStyle}
            />

            <input
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              placeholder="Enter Level"
              type="text"
              style={inputStyle}
            />

            <input
              value={cgpa}
              onChange={(e) => setCgpa(e.target.value)}
              placeholder="Enter CGPA"
              type="number"
              style={inputStyle}
            />

            <button
              onClick={handleDetails}
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "blue",
                color: "white",
                fontSize: "16px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              {isEditing ? "Update Student" : "Add Student"}
            </button>
          </div>
        )}


        {activePage === "students" && (
          <div
            style={{
              backgroundColor: "white",
              padding: "25px",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h2>Registered Students</h2>

            <input
              type="text"
              placeholder="Search by Name, ID or Level"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                padding: "12px",
                width: "100%",
                maxWidth: "400px",
                marginTop: "15px",
                marginBottom: "20px",
                borderRadius: "8px",
                border: "1px solid gray",
              }}
            />

            <table
              border="1"
              cellPadding="10"
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "center",
              }}
            >
              <thead
                style={{
                  backgroundColor: "blue",
                  color: "white",
                }}
              >
                <tr>
                  <th>S/N</th>
                  <th>Name</th>
                  <th>ID</th>
                  <th>Course</th>
                  <th>Level</th>
                  <th>CGPA</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{student.studentName}</td>
                      <td>{student.studentId}</td>
                      <td>{student.course}</td>
                      <td>{student.level}</td>
                      <td>{student.cgpa}</td>

                      <td>
                        <button
                          onClick={() => handleEdit(index)}
                          style={{
                            marginRight: "10px",
                            backgroundColor: "green",
                            color: "white",
                            border: "none",
                            padding: "8px 12px",
                            borderRadius: "5px",
                            cursor: "pointer",
                          }}
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(index)}
                          style={{
                            backgroundColor: "red",
                            color: "white",
                            border: "none",
                            padding: "8px 12px",
                            borderRadius: "5px",
                            cursor: "pointer",
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7">No student found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <ToastContainer />
    </>
  );
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid gray",
  fontSize: "15px",
};