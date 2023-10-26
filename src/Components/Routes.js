import React from "react";
import { Routes,Route } from "react-router-dom";
import Student from "../StudentMgmt";
import Mentor from "../MentorMgmt";
import CreateMentor from "../MentorMgmt/Create";
import ReadMentor from "../MentorMgmt/Read";
import CreateStudent from "../StudentMgmt/Creation";
import ReadStudent from "../StudentMgmt/Read";
import Update from "../StudentMgmt/Update";
import UpdateMentor from "../MentorMgmt/Update";
export default function RoutesPage()
{
  return(
    <div>
        <Routes>
            <Route path="/students" element={<Student/>}>
            
            </Route>
            <Route path="/students/create" element={<CreateStudent/>}/>
                <Route path="/students/read" element={<ReadStudent/>}/>
            <Route path="/mentors" element={<Mentor/>}>
            
            </Route>
            <Route path="/mentors/create" element={<CreateMentor/>}/>
              <Route path="/mentors/read" element={<ReadMentor/>}/>
              <Route path="/students/update" element={<Update/>}/>
              <Route path="/mentors/update" element={<UpdateMentor/>}/>
            
        </Routes>
    </div>
  )
}