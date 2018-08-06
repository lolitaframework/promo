<template>
  <div id="login">
    <telegram-login
      class="telegram-login"
      mode="callback"
      telegram-login="promo555_bot"
      @callback="tg" />

    <div id="lolita"></div>
  </div>
</template>

<script>
import TelegramLogin from '@/components/TelegramLogin';
import telegramCheckingAuthorization from 'telegram-checking-authorization';
import { BOT_TOKEN } from '@/config';

export default {
  components: {
    TelegramLogin,
  },
  methods: {
    tg(user) {
      if (telegramCheckingAuthorization(user, BOT_TOKEN)) {
        this.$router.push('/wizard');
      }
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

  .telegram-login{
    margin-top: -50px;
  }
</style>
