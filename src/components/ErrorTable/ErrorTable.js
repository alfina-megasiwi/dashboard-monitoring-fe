// import React, { useState, useEffect } from "react";
// import "./ErrorTable.css";
// // import { makeStyles } from "@material-ui/core/styles";
// // import Table from "@material-ui/core/Table";
// // import TableBody from "@material-ui/core/TableBody";
// // import TableCell from "@material-ui/core/TableCell";
// // import TableContainer from "@material-ui/core/TableContainer";
// // import TableHead from "@material-ui/core/TableHead";
// // import TableRow from "@material-ui/core/TableRow";
// // import Paper from "@material-ui/core/Paper";
// // import axios from "axios";

// const ErrorTable = () => {
//   const useStyles = makeStyles({
//     table: {
//       minWidth: 650,
//     },
//     sticky: {
//       position: "sticky",
//       left: 0,
//       background: "white",
//       boxShadow: "5px 2px 5px grey",
//     },
//   });

//   const [data, setData] = useState([]);
//   const classes = useStyles();

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((res) => {
//         setData(res.data);
//         console.log("Result:", data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div className="error-container">
//       <div className="error-card">
//         <div className="error-card-title">Error Records</div>
//         <div className="error-card-body">
//           <TableContainer component={Paper}>
//             <Table aria-label="simple table">
//               <TableHead>
//                 <TableRow>
//                   <TableCell className={classes.sticky}>Name</TableCell>
//                   <TableCell align="right">Username</TableCell>
//                   <TableCell align="right">Email</TableCell>
//                   <TableCell align="right">Phone</TableCell>
//                   <TableCell align="right">Website</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {data.map((row) => (
//                   <TableRow key={row.id}>
//                     <TableCell
//                       component="th"
//                       scope="row"
//                       className={classes.sticky}
//                     >
//                       {row.name}
//                     </TableCell>
//                     <TableCell align="right">{row.username}</TableCell>
//                     <TableCell align="right">{row.email}</TableCell>
//                     <TableCell align="right">{row.phone}</TableCell>
//                     <TableCell align="right">{row.website}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ErrorTable;
