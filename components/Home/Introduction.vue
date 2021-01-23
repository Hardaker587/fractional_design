<template>
  <v-col cols="12" class="py-16"
    ><v-card
      class="pa-12 d-flex justify-center align-center rainbowCard rounded-xl"
      height="75vh"
      flat
    >
      <div class="introductionHolder white--text">
        <div
          class="font-weight-black"
          :class="$vuetify.breakpoint.smAndDown ? 'text-h4' : 'text-h2'"
        >
          Hey there internet explorer!
        </div>
        <div
          class="text-h4 font-weight-bold"
          :class="$vuetify.breakpoint.smAndDown ? 'text-h6' : 'text-h4'"
        >
          Looks like you've found my website! Let me introduce myself...
          <br />
          My name is
          <span class="font-weight-black">Gavin Hardaker</span> and I design and
          develop websites
        </div>
        <div>
          Interaction design and full scale web development are my thing
        </div>
        <v-icon large color="white">mdi-facebook</v-icon>
        <v-icon large color="white">mdi-linkedin</v-icon>
      </div>
    </v-card></v-col
  >
</template>

<script>
export default {
  name: "Introduction",
};
</script>

<style scoped lang="scss">
.introductionHolder {
  .text-h2,
  .text-h4 {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
}

.rainbowCard {
  background: linear-gradient(
    124deg,
    #ff2400,
    #e81d1d,
    #e8b71d,
    #e3e81d,
    #1de840,
    #1ddde8,
    #2b1de8,
    #dd00f3,
    #dd00f3
  );
  background-size: 1800% 1800%;
  -webkit-animation: rainbow 18s ease infinite;
  -z-animation: rainbow 18s ease infinite;
  -o-animation: rainbow 18s ease infinite;
  animation: rainbow 18s ease infinite;
}

@-webkit-keyframes rainbow {
  0% {
    background-position: 0% 82%;
  }
  50% {
    background-position: 100% 19%;
  }
  100% {
    background-position: 0% 82%;
  }
}
@-moz-keyframes rainbow {
  0% {
    background-position: 0% 82%;
  }
  50% {
    background-position: 100% 19%;
  }
  100% {
    background-position: 0% 82%;
  }
}
@-o-keyframes rainbow {
  0% {
    background-position: 0% 82%;
  }
  50% {
    background-position: 100% 19%;
  }
  100% {
    background-position: 0% 82%;
  }
}
@keyframes rainbow {
  0% {
    background-position: 0% 82%;
  }
  50% {
    background-position: 100% 19%;
  }
  100% {
    background-position: 0% 82%;
  }
}
</style>
