import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import checkAuth from "./auth/checkAuth";

function StudentsList() {

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

                setErrorMessage(
                    "Failed to load students."
                );
            });
        }

    }, [user]);

    return (
        <div className="container">

            <h1>Students List</h1>

            {errorMessage && (
                <p>{errorMessage}</p>
            )}

            <ul>

                {students.map(student => (

                    <li key={student.id}>

                        <strong>
                            Name: {student.name}
                        </strong>

                        <br />

                        Age: {student.age}

                    </li>

                ))}

            </ul>

        </div>
    );
}

export default checkAuth(StudentsList);