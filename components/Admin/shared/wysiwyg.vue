<template>
  <div>
    <v-tabs v-model="tabs" background-color="black" dark>
      <v-tab> Editor </v-tab>
      <v-tab> Preview </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <v-card flat>
          <ClientOnly>
            <!-- Use the component in the right place of the template -->
            <tiptap-vuetify v-model="content" :extensions="extensions" />

            <template #placeholder> Loading... </template>
          </ClientOnly>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <div class="pa-4" v-html="content"></div>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
/* eslint-disable */
// import the component and the necessary extensions
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History,
} from "tiptap-vuetify";

export default {
  // specify TiptapVuetify component in "components"
  components: { TiptapVuetify },
  data: () => ({
    tabs: "",
    // declare extensions you want to use
    extensions: [
      History,
      Blockquote,
      Link,
      Underline,
      Strike,
      Italic,
      ListItem,
      BulletList,
      OrderedList,
      [
        Heading,
        {
          options: {
            levels: [1, 2, 3],
          },
        },
      ],
      Bold,
      Link,
      Code,
      HorizontalRule,
      Paragraph,
      HardBreak,
    ],
    // starting editor's content
    content: `
      <h1>Yay Headlines!</h1>
      <p>All these <strong>cool tags</strong> are working now.</p>
    `,
  }),
};
</script>
