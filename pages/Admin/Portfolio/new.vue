<template>
  <v-row>
    <v-col cols="12">
      <site-page-title :title="'Add Portfolio Item: ' + postData.title" />
    </v-col>
    <v-col cols="9">
      <v-form style="width: 100%">
        <v-row class="px-8">
          <v-col cols="6">
            <span class="font-weight-bold">Title:</span>
            <v-text-field
              v-model="postData.title"
              label="Portfolio item title"
              @keyup="returnLink(postData.title)"
              @change="formatText(postData.title)"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <span class="font-weight-bold">Url:</span>
            <v-text-field
              v-model="postData.link"
              label="Portfolio item link"
              prefix="/portfolio/"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <span class="font-weight-bold">Hero image:</span>
            <v-file-input
              v-model="postData.heroImage"
              accept="image/*"
              label="Image"
              @blur="returnImage(postData.heroImage)"
              @click:clear="postData.imagePreview = ''"
            ></v-file-input>
          </v-col>
          <v-col cols="6">
            <span class="font-weight-bold">Project link:</span>
            <v-text-field
              v-model="postData.projectLink"
              label="Project Link"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <wysiwyg />
          </v-col>
        </v-row>
      </v-form>
    </v-col>
    <v-col cols="3">
      <v-card class="rounded-0 mb-4">
        <v-card-title>Publish</v-card-title>
        <v-card-text>
          <div>
            <span class="font-weight-bold">Created: </span
            >{{ postData.status.created }}
          </div>
          <div>
            <span class="font-weight-bold">Status: </span
            >{{ postData.status.publishStatus }}
          </div>
          <div>
            <span class="font-weight-bold">Published Date: </span
            >{{ postData.status.publishedDate }}
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn width="100%" color="success">Publish</v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="rounded-0 mb-4">
        <v-card-title>Hero Image</v-card-title>
        <v-card-text>
          <v-img
            width="100%"
            height="auto"
            :src="
              postData.heroImage
                ? postData.imagePreview
                : 'https://via.placeholder.com/1366x768/000000/ffffff?Text=Portfolio Placeholder'
            "
          ></v-img>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Wysiwyg from "@/components/Admin/shared/wysiwyg";
import SitePageTitle from "~/components/UI/sitePageTitle";
export default {
  name: "PortfolioNew",
  components: { Wysiwyg, SitePageTitle },
  data() {
    return {
      postData: {
        status: {
          created: new Date().toUTCString(),
          publishStatus: "Draft",
          publishedDate: new Date().toUTCString(),
        },
        title: "",
        link: "",
        heroImage: "",
        imagePreview: "",
        projectLink: "",
      },
    };
  },
  methods: {
    returnLink(text) {
      this.postData.link = text.toLowerCase().replaceAll(" ", "_");
    },
    formatText(text) {
      this.postData.title =
        this.postData.title.charAt(0).toUpperCase() +
        this.postData.title.slice(1);
    },
    returnImage(image) {
      console.log(image);
      this.postData.imagePreview = window.webkitURL.createObjectURL(image);
    },
  },
};
</script>
