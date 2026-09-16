import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import checkAuth from "./auth/checkAuth";

function StudentList() {

    const user = useSelector(
        store => store.auth.user
    );

    const [students, setStudents] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {

        if (user) {

            axios.get(
                "https://worksheet-student.mashupstack.com/students",
                {
                    headers: {
                        Authorization: "Bearer " + user.token
                    }
                }
            )
            .then(response => {

                setStudents(response.data);

            })
            .catch(error => {

                setErrorMessage("Failed to load students.");

            });
        }

    }, [user]);

    return (
        <div className="container">

            <h1>Student List</h1>

            {errorMessage && (
                <div className="alert alert-danger">
                    {errorMessage}
                </div>
            )}

            <table className="table table-bordered">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>

                <tbody>

                    {students.map(student => (

                        <tr key={student.id}>

                            <td>
                                {student.name}
                            </td>

                            <td>
                                {student.age}
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default checkAuth(StudentList);