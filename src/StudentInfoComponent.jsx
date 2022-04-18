import "bootstrap/dist/css/bootstrap.min.css";
import studentData from "./student-data";
import "./StudentInfoComponent.css"

export default function StudentInfoComponent() {
   return (
      <table className="table">
         <thead>
            <tr>
               <th scope="col">ID</th>
               <th scope="col">Name</th>
               <th scope="col">Age</th>
               <th scope="col">State</th>
            </tr>
         </thead>
         <tbody>
            {studentData.map((student) => (
               <tr key={student.id}>
                  <th scope="row">{student.id}</th>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.address}</td>
               </tr>
            ))}
         </tbody>
      </table>
   );
}
