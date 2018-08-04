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
import telegramCheckingAuthorization from 'telegram-checking-authorization';

export default {
  components: {
    TelegramLogin,
  },
  methods: {
    tg(user) {
      // eslint-disable-next-line
      console.log(user);
      console.log(telegramCheckingAuthorization(user, '691398317:AAFN2zR-pjyLkzgjHsK_1fXuqf6iyYw1tPU'));
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
