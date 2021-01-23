export default {
  async action_add_new_blog(state, object) {
    const databasePath = this.$fire.database.ref(
      `blog/${this.$utilities.guid()}`
    );
    try {
      await databasePath.set(object);
    } catch (e) {
      alert(e);
      return false;
    }
  },
  async action_get_blog_posts(state) {
    const data = this.$fire.database.ref("blog");
    try {
      await data.once("value", (r) => {
        const posts = [];

        r.forEach((post) => {
          posts.push({
            key: post.key,
            ...post.val(),
          });
          return false;
        });
        state.commit("mutation_blog_posts", posts);
        return r.val();
      });
    } catch (e) {
      alert(e);
    }
  },
};
