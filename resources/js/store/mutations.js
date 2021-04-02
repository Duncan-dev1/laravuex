import { findIndex } from "lodash";

export default {
    updateStudents(state, students) {
        state.students = students;
        console.log("students done");
    },
    addStudent(state, student) {
        state.students.push(student);
        console.log("student added");
    },
    //addStudent:(state,student)=> state.students.push(student)
    removeStudent(state, id) {
        state.students = state.students.splice(student => student.id !== id);
        console.log("student deleted");
    },

    changeName(state, updatedStudent) {
        const index = state.students.findIndex(
            student => student.id === updatedStudent.id
        );
        if (index !== -1) {
            state.students.splice(index, 1, updatedStudent);
        }
    }
};
