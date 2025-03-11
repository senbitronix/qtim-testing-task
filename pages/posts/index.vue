<template>
    <div class="posts">
        <div class="container">
            <h1 class="posts__title">Articles</h1>
            <Loader v-if="loading" />
            <BlogPostList
                v-else
                :posts="displayedPosts"
                class="mt-60"
            />
            <Pagination
                :total-items="posts.length"
                :items-per-page="itemsPerPage"
                :current-page="currentPage"
                @page-changed="handlePageChanged"
                class="mt-20"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useBlogApi } from "~/composables/useBlogApi"
import { ref, onMounted } from "vue"

const { getPosts, posts, loading } = await useBlogApi()

const currentPage = ref(1)
const itemsPerPage = ref(8)

const displayedPosts = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage.value
    let endIndex = startIndex + itemsPerPage.value
    endIndex = Math.min(endIndex, posts.value.length)
    return posts.value.slice(startIndex, endIndex)
})

const handlePageChanged = (page: number) => {
    currentPage.value = page
}

const updateCardsPerPage = () => {
    if (window.innerWidth < 768) {
        itemsPerPage.value = 4
    } else if (window.innerWidth < 992) {
        itemsPerPage.value = 6
    } else {
        itemsPerPage.value = 8
    }
    currentPage.value = 1
}

onMounted(async () => {
    await getPosts()
    updateCardsPerPage()
    window.addEventListener("resize", updateCardsPerPage)
})

onUnmounted(() => {
    window.removeEventListener("resize", updateCardsPerPage)
})
</script>

<style scoped lang="scss">
.posts {
    margin: 120px 0 140px;
}
.posts__title {
    font-weight: 400;
    font-size: 54px;
    @media (max-width: 480px) {
        text-align: center;
    }
}
</style>
