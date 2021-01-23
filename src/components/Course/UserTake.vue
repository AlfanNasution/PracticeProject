<template>
  <section>
    <base-card>
      <h2>See Course</h2>
      <div>
        <base-button @click="displayCourse">Show Course</base-button>
      </div>
      <!-- <p v-if="course.length === 0 || !course">No Data</p> -->
      <ul>
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
    };
  },
  methods: {
    displayCourse() {
      fetch(
        "https://project-practice-beb49-default-rtdb.firebaseio.com/course.json"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          const course = [];
          for (const id in data) {
            course.push({
              id: id,
              name: data[id].name,
              kampus: data[id].kampus,
              take: data[id].take
            });
          }
          this.course = course;
        });
    },
  },
  mounted() {
      this.displayCourse();
  }
};
</script>
