<template>
  <section>
    <base-card>
      <h2>See Course</h2>
      <div>
        <base-button @click="displayCourse">Show Course</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && (course.length === 0 || !course)">NO data</p>

      <table
        class="table mt-5"
        v-else-if="!isLoading && course && course.length > 0"
      >
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Kampus</th>
            <th scope="col">Ngambil</th>
          </tr>
        </thead>

        <course-result
          v-for="cor in course"
          :key="cor.id"
          :id="cor.id"
          :name="cor.name"
          :kampus="cor.kampus"
          :take="cor.take"
        >
        </course-result>
      </table>
    </base-card>
  </section>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";
import CourseResult from "./CourseResult.vue";
export default {
  components: {
    CourseResult,
  },
  data() {
    BaseButton;
    return {
      url:
        "https://project-practice-beb49-default-rtdb.firebaseio.com/course.json",
      course: [],
      isLoading: false,
    };
  },
  methods: {
    displayCourse() {
      this.isLoading = true;
      fetch(
        "https://project-practice-beb49-default-rtdb.firebaseio.com/course.json"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.isLoading = false;
          const course = [];
          for (const id in data) {
            course.push({
              id: id,
              name: data[id].name,
              kampus: data[id].kampus,
              take: data[id].take,
            });
          }
          this.course = course;
        });
    },
  },
  mounted() {
    this.displayCourse();
  },
};
</script>
