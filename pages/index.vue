<script setup lang="ts">

import useWpApi from "~/compasables/useWpApi";

const {data:blogs} = await useWpApi().getPosts()


console.log(blogs)
</script>

<template>
  <main class="max-w-7xl mx-auto mt-6">
    <section class="blogs">
      <div class="container py-10">
        <div class="grid sm:grid-cols-3 gap-10">
          <BlogCard
              v-for="blog in blogs"
              :key="blog.id"
              :title="blog.title.rendered"
              :image="blog.yoast_head_json.og_image[0].url"
              :excerpt="blog.excerpt.rendered"
              :slug="blog.slug"
          ></BlogCard>
        </div>
      </div>
    </section>
  </main>

</template>

<style scoped>

</style>