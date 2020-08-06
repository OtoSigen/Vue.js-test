<template>
  <div>
    <p>Пользователь: {{ userId }}</p>
    <p>Имя: {{ userName }}</p>
    <p>Фамилия: {{ userLastName }}</p>
    <p>Email: {{ userEmail }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    userId() {
      return +this.$route.params.id;
    },
    userName() {
      return this.$route.params.first_name;
    },
    userLastName() {
      return this.$route.params.last_name;
    },
    userEmail() {
      return this.$route.params.email;
    },
    userAvatar() {
      return this.$route.params.avatar;
    },
  },
};
</script>
