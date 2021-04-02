<template>
    <div>
        Filter Students:
        <select @change="filterStudents($event)">
            <option value="20">20</option>
            <option value="10">10</option>
            <option value="5">5</option>
            <option value="2">2</option>
        </select>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "FilterStudents",
    methods: {
        ...mapActions(["filterStudents"])
    }
};
</script>

<style>
select {
    margin-top: 20px;
    padding: 6px;
    border: #41b883 1px solid;
}
</style>
