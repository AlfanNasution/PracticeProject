<template>
  <section>
    <base-card>
      <form @submit.prevent="submitData">
        <div class="form-control">
          <label for="name">Nama</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>
        <div>
          <h3>Pilih Kampus Anda</h3>
          <div class="form-control">
            <input
              id="kampus-telkom"
              name="kampus"
              type="radio"
              value="telkom"
              v-model="pilihKampus"
            />
            <label>Telkom University</label>
          </div>
          <div class="form-control">
            <input
              id="kampus-itb"
              name="kampus"
              type="radio"
              value="itb"
              v-model="pilihKampus"
            />
            <label>ITB</label>
          </div>
          <div class="form-control">
            <input
              id="kampus-other"
              name="kampus"
              type="radio"
              value="other"
              v-model="pilihKampus"
            />
            <label>Other</label>
          </div>
        </div>
        <div class="form-control">
          <label for="take">What to Learn</label>
          <select id="take" name="take" v-model="take">
            <option value="Calculus">Calculus</option>
            <option value="DAP">DAP</option>
            <option value="OOP">OOP</option>
          </select>
        </div>
        <!-- <h3>Pilih Kampus Anda</h3>
        <div class="form-control">
          <div>
            <input
              type="checkbox"
              name="take"
              id="take-calculus"
              value="calculus"
              v-model="take"
            />
            <label for="take-calculus">Calculus</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="take"
              id="take-BasicProgram"
              value="BasicProgram"
              v-model="take"
            />
            <label for="take-BasicProgram">Basic Programming</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="take"
              id="take-OOP"
              value="OOP"
              v-model="take"
            />
            <label for="take-OOP">Object Oriented Programming</label>
          </div>
        </div> -->
        <div>
          <base-button>Submit</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredName: "",
      pilihKampus: null,
      take: null,
    };
  },
  methods: {
    submitData() {
      fetch(
        "https://project-practice-beb49-default-rtdb.firebaseio.com/course.json",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            name: this.enteredName,
            kampus: this.pilihKampus,
            take: this.take
          }),
        }
      );
      this.enteredName = "";
      this.pilihKampus = null;
      this.take = null;
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type="text"] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>
