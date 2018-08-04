<template>
  <div id="login">
    <telegram-login
      mode="callback"
      telegram-login="promo555_bot"
      @callback="tg" />
  </div>
</template>

<script>
import TelegramLogin from '@/components/TelegramLogin';

export default {
  components: {
    TelegramLogin,
  },
  methods: {
    tg(user) {
      // eslint-disable-next-line
      console.log(user);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #login{
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
