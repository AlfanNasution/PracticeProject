<template>
  <section>
    <base-card>
      <h2>See Course</h2>
      <div>
        <base-button @click="displayCourse">Show Course</base-button>
      </div>
      <!-- <p v-if="course.length === 0 || !course">No Data</p> -->
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && (course.length === 0 || !course)">NO data</p>
      <ul v-else-if="!isLoading && course && course.length > 0">
        <course-result
          v-for="cor in course"
          :key="cor.id"
          :name="cor.name"
          :kampus="cor.kampus"
          :take="cor.take"
        ></course-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import CourseResult from "./CourseResult.vue";
export default {
  components: {
    CourseResult,
  },
  data() {
    return {
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
