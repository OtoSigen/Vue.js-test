<template>
  <tr user="users">
    <td>{{ user.id }}</td>
    <td>{{ user.first_name }}</td>
    <td>{{ user.last_name }}</td>
    <td>{{ user.email }}</td>
    <button class="rm" v-on:click="$emit('removeUser', user.id)">
      &times;
    </button>
  </tr>
</template>

<script>
export default {
  props: {
    ["users"],
    user: {
      type: Object,
      required: true,
      first_name: String,
      last_name: String,
      email: String,
    },
  },
};
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
}

.rm {
  background: red;
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
  border: none;
}
</style>
