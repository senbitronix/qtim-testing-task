<template>
    <div class="container">
        <Loader v-if="loadingSingle" />
        <div
            v-else
            class="post"
        >
            <h1 class="post__title">{{ post?.title }}</h1>
            <div class="post__image">
                <img
                    src="public/post-image.jpg"
                    alt="post image"
                />
            </div>
            <div class="post__content">
                <h1 class="post__subtitle">{{ post?.preview }}</h1>
                <p class="post__description">{{ post?.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"
import { useBlogApi } from "~/composables/useBlogApi"
import { onMounted } from "vue"

const route = useRoute()
const { getPost, post, loadingSingle } = await useBlogApi()

onMounted(async () => {
    if (typeof route.params.id === "string") {
        await getPost(+route.params.id)
        if (!post.value) {
            throw createError({ statusCode: 404, statusMessage: "Post not found", fatal: true })
        }
    }
})
</script>

<style scoped lang="scss">
.post {
    padding-top: 119px;
    padding-bottom: 80px;

    &__title {
        font-weight: 400;
        font-size: 84px;
    }

    &__image {
        margin-top: 75px;
        width: 1216px;
        height: 700px;

        img {
            display: block;
            object-fit: contain;
            width: 100%;
            height: 100%;
        }
    }

    &__content {
        margin-top: 80px;
    }

    &__subtitle {
        font-weight: 400;
        font-size: 16px;
    }

    &__description {
        margin-top: 48px;
        font-weight: 400;
        font-size: 36px;
    }
}
</style>
