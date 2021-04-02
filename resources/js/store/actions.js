export default {
    fetchStudents({ commit }) {
        axios.get("api/student").then(response => {
            commit("updateStudents", response.data);
            console.log(response);
        });
    },
    createStudent({ commit }, name) {
        axios
            .post("api/student", {
                name
            })
            .then(response => {
                commit("addStudent", response.data);
                // this.form = "";
            });
    },
    updateName({ commit }, updatedStudent) {
        axios.put("api/student/" + updatedStudent.id).then(() => {
            commit("changeName", updatedStudent);
        });
    },  
/*updateName({ commit }, updatedStudent) {
        axios.put(`api/student/${updatedStudent.id}`).then(() => {
            commit("changeName", updatedStudent);
        });  
    },  */
    deleteStudent({ commit }, id) {
        axios.delete("api/student/" + id).then(() => {
            commit("removeStudent", id);
       
        });
    },
   
     filterStudents({ commit }, e) {
        const limit = parseInt(
            e.target.options[e.target.options.selectedIndex].innerText
        );
         axios.get(`api/student?_limit=${limit}`).then(response => {
            commit("updateStudents", response.data);
            console.log(response);
        });
    }
};
