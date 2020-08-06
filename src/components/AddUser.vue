<template>
  <form class="form-group" @submit.prevent="onSubmit" @submit="checkForm">
    <p v-if="errors.length">
    <b>Пожалуйста исправьте указанные ошибки:</b>
    <ul>
      <li v-for="error in errors" v-bind:key="error.index">{{ error }}</li>
    </ul>
  </p>
    <input type="text" class="form-control" v-model="first_name" placeholder="Имя" />
    <input type="text" class="form-control" v-model="last_name" placeholder="Фамилия" />
    <input type="text" class="form-control" v-model="email" placeholder="Email" />
    <button type="submit" class="btn btn-primary">Добавить</button>
  </form>
</template>

<script>
export default {
  props: ["users"],
  data() {
    return {
      errors: [],
      first_name: "",
      last_name: "",
      email: "",
    };
  },
  methods: {
    checkForm(e) {
      if (this.first_name && this.last_name) {
        return true;
      }

      this.errors = [];

      if (!this.first_name) {
        this.errors.push('Требуется указать имя.');
      }
      if (!this.last_name) {
        this.errors.push('Требуется указать фамилию.');
      }
      e.preventDefault();
    },
    onSubmit() {     
      if (this.first_name.trim) {
        const newUser = {
          id: this.users.length + 1,
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
        };
        this.$emit("addUser", newUser);
        this.first_name = "";
        this.last_name = "";
        this.email = "";
      }
      if(this.errors.length > 0){
        return false
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-flow: column;
  margin-bottom: 30px;
}

input {
  width: 300px;

  margin-bottom: 15px;
}

button {
  width: 150px;
}
</style>
