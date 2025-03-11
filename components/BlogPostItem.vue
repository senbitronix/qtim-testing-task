<script setup lang="ts">
const props = defineProps<{
    id: string
    title: string
    description: string
}>()
</script>

<template>
    <div class="card">
        <div class="card__content">
            <img
                src="public/examplePicture.jpg"
                :alt="props.title"
                class="card__image"
            />
            <p class="card__description">{{ props.id + props.description }}</p>
        </div>
        <NuxtLink
            :to="`/posts/${props.id}`"
            class="card__read-more"
            >Read more</NuxtLink
        >
    </div>
</template>

<style scoped lang="scss">
@use "assets/css/mixins.scss" as mixins;
$image-size: 280px;

.card {
    height: 396px;
    position: relative;

    &__content {
        transition: 0.3s ease;
    }

    &:hover {
        display: block;
    }

    &:hover {
        .card__read-more {
            opacity: 1;
            transform: translateY(0);
        }

        .card__content {
            transform: translateY(-20px);
        }
    }

    .card__read-more {
        font-weight: 400;
        font-size: 20px;
        line-height: 120%;
        color: var(--violet-color);

        position: absolute;
        bottom: 0;
        left: 0;
        border-radius: 4px;
        text-decoration: none;
        opacity: 0;
        transition: opacity 0.3s ease, transform 0.3s ease;
        transform: translateY(10px);
    }

    @media (max-width: 480px) {
        .card-grid {
            grid-template-columns: 1fr;

            place-items: start center;
            text-align: center;
        }
    }
}

.card__image {
    width: 100%;
    height: $image-size;
    object-fit: cover;
    display: block;
}

.card__description {
    margin-top: 24px;
    font-size: 20px;
    color: #666;

    @include mixins.text-hidden(3);
}
</style>
