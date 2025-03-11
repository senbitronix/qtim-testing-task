<script setup lang="ts">
import type { Post } from "~/types/post"

const props = defineProps<{
    posts: Post[]
}>()
</script>

<template>
    <div class="card-grid">
        <BlogPostItem
            v-for="card in props.posts"
            :key="card.id"
            v-bind="{ id: card.id, title: card.title, description: card.description }"
        />
    </div>
</template>

<style lang="scss" scoped>
.card-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
}

@media (max-width: 992px) {
    .card-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 768px) {
    .card-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .card-grid {
        grid-template-columns: 1fr;

        place-items: start center;
        text-align: center;
    }
}
</style>
