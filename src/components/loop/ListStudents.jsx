import React from "react";
import students from "../../data/students";

export default props => {
    const studentsData = students.map(student => {
        return (
            <li key={student.id}>
                {student.id}) {student.name} -&gt; {student.grade}
            </li>
        );
    });

    return (
        <div>
            <ul style={{ listStyle: "none" }}>
                {studentsData}
            </ul>
        </div>
    );
}