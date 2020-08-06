<template>
  <div>
    <input
      v-model="searchName"
      class="form-control"
      placeholder="Фильтрация по фамилии"
    />
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Имя</th>
          <th scope="col">Фамилия</th>
          <th scope="col">Email</th>
          <th scope="col">Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in filteredPersons"
          v-bind:user="user"
          v-bind:key="user.id"
        >
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button
              type="button"
              class="btn btn-danger"
              v-on:click="$emit('removeUser', user.id)"
            >
              Удалить
            </button>
            <router-link
              tag="button"
              class="btn btn-primary"
              :to="{
                name: 'User',
                params: {
                  id: user.id,
                  first_name: user.first_name,
                  last_name: user.last_name,
                  email: user.email,
                },
              }"
            >
              Открыть
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["users"],
  user: {
    type: Object,
    required: true,
    first_name: String,
    last_name: String,
    email: String,
  },

  methods: {
    filterByName: function (user) {
      if (this.searchName.length === 0) {
        return true;
      }
      return (
        user.last_name.toLowerCase().indexOf(this.searchName.toLowerCase()) > -1
      );
    },

    removeUser(id) {
      this.$emit("removeUser", id);
    },
  },
  data() {
    return {
      search: "",
      searchName: "",
    };
  },
  computed: {
    filteredPersons: function () {
      return this.users.filter(this.filterByName);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin-bottom: 25px;
}
.btn {
  margin-left: 20px;
}
</style>
