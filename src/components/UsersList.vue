<template>
  <div>
    <input
      v-model="search"
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
          <th scope="col">Удалить</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user of users" v-bind:user="user" v-bind:key="user.id">
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
  components: {},
  methods: {
    removeUser(id) {
      this.$emit("removeUser", id);
    },
    sortBy: function (sortKey) {
      this.reverse = this.sortKey === sortKey ? !this.reverse : false;

      this.sortKey = sortKey;
    },
  },
  data() {
    return {
      search: "",
      sortKey: "Фамилия",
      reverse: false,
    };
  },
};
</script>

<style scoped>
.form-control {
  margin-bottom: 25px;
}
</style>
