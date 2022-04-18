import "bootstrap/dist/css/bootstrap.min.css";
import studentData from "./student-data";

export default function StudentInfoComponent() {
   return (
      <table class="table">
         <thead>
            <tr>
               <th scope="col">ID</th>
               <th scope="col">Name</th>
               <th scope="col">Age</th>
               <th scope="col">Address</th>
            </tr>
         </thead>
         <tbody>
            {studentData.map((student) => (
               <tr>
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
