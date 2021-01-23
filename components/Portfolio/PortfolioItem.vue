<template>
  <v-row align="center" class="pa-8" style="max-width: 100vw">
    <v-col xl="7" lg="7" md="6" sm="12">
      <v-img
        src="https://via.placeholder.com/1366x768/000000/ffffff?Text=Portfolio Placeholder"
        max-width="100%"
        width="100%"
        height="auto"
      ></v-img>
    </v-col>
    <v-col xl="5" lg="5" md="6" sm="12">
      <div class="text-h4 font-weight-black">Item Title</div>
      <div>
        {{
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl
        lectus, cursus non nibh at, condimentum fringilla nulla. Curabitur
        aliquam nunc in sagittis mattis. Ut egestas arcu dolor, viverra sodales
        sapien fermentum et. Cras non justo in sem aliquet tristique.
        Suspendisse eget ipsum vulputate, tincidunt nisi in, lacinia erat.
        Aenean eu erat iaculis, convallis tellus in, semper nibh. Maecenas erat
        metus, lobortis vel lorem id, egestas tempus tortor. In in risus
        tincidunt, finibus eros sed, consequat quam. Donec at iaculis tortor.
        Nulla facilisi. Suspendisse congue lectus mauris. Aliquam ut nisi eget
        turpis tincidunt tincidunt non a sapien. Proin magna est, vestibulum a
        tincidunt non, lobortis non orci. Donec pellentesque elementum lectus,
        sit amet accumsan erat ullamcorper at. Integer tempus, metus a luctus
        hendrerit, risus lorem eleifend dui, sit amet faucibus urna nulla a leo.
        Ut vitae odio tempor, blandit mauris non, lobortis sem.` | truncate(250)
        }}
        <v-btn text color="primary">read more</v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "PortfolioItem",
};
</script>
