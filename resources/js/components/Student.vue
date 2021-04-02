<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        <form
                            @submit.prevent="
                                editMode ? updStudent() : onSubmit()
                            "
                        >
                            <div class="mb-3">
                                <label for="name" class="form-label"
                                    >First Name</label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model="form.name"
                                    name="name"
                                    placeholder="Name"
                                />
                            </div>

                            <div class="col-auto">
                                <button
                                    type="submit"
                                    v-show="!editMode"
                                    class="btn btn-success mb-3"
                                >
                                    Submit
                                </button>
                                <button
                                    type="submit"
                                    v-show="editMode"
                                    class="btn btn-primary mb-3"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" v-for="student in students" :key="student.id">
            <div class="col-8">
                {{ student.name }}
            </div>
            <div class="col-2">
                <button class="btn btn-info" @click="fillStudentForm(student)">
                    edit
                </button>
            </div>
            <div class="col-2">
                <button
                    class="btn btn-danger"
                    @click="deleteStudent(student.id)"
                >
                    Delete
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
//import FilterStudents from "./FilterStudents.vue";

export default {
    components: {
        //   FilterStudents
    },
    data() {
        return {
            student: {},
            editMode: false,

            form: {
                id: "",
                name: ""
            }
        };
    },
    methods: {
        ...mapActions(["createStudent", "deleteStudent", "updateName"]),
        onSubmit() {
            this.createStudent(this.form.name);
            this.form = "";
        },
        fillStudentForm(id) {
            this.editMode = true;
            this.form = id;
        },
        updStudent() {
            const studentDetails = {
                id: this.form.id,
                name: this.form.name
            };

            this.updateName(studentDetails);
            this.form = "";
        }

        /*  updStudent() {
            this.updateName({ id: this.form.id, name: this.form.name });
        }  */
    },
    created() {
        this.$store.dispatch("fetchStudents");
    },

    computed: {
        ...mapState(["students"])
    }
};
</script>
