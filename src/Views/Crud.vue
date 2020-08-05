<template>
  <div>
    <router-link class="nav-link" to="/">На главную</router-link>
    <div class="container">
      <AddUser v-bind:users="users" @addUser="addUser" />
      <UsersList v-bind:users="users" @removeUser="removeUser" />
    </div>
  </div>
</template>

<script>
import UsersList from "@/components/UsersList";
import AddUser from "@/components/AddUser";

export default {
  name: "Crud",
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((json) => {
        this.users = json.data;
      });
  },
  components: {
    UsersList,
    AddUser,
  },
  methods: {
    removeUser(id) {
      this.users = this.users.filter((u) => u.id !== id);
    },
    addUser(user) {
      this.users.push(user);
    },
  },
};
</script>

<style>
.nav-link {
  margin-bottom: 30px;
}
</style>
