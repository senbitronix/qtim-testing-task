<script setup lang="ts">
interface PaginationProps {
    totalItems: number
    itemsPerPage: number
    currentPage: number
    maxVisiblePages?: number
}

const props = withDefaults(defineProps<PaginationProps>(), {
    maxVisiblePages: 5,
})

const emit = defineEmits(["page-changed"])

const totalPages = computed(() => {
    return Math.ceil(props.totalItems / props.itemsPerPage)
})

const visiblePages = computed(() => {
    const totalVisible = Math.min(props.maxVisiblePages, totalPages.value)
    let startPage = Math.max(1, props.currentPage - Math.floor(totalVisible / 2))
    let endPage = Math.min(totalPages.value, startPage + totalVisible - 1)

    if (totalPages.value - endPage < totalVisible - (endPage - startPage + 1)) {
        startPage = Math.max(1, totalPages.value - totalVisible + 1)
    }
    const pagesArray = []
    for (let i = startPage; i <= endPage; i++) {
        pagesArray.push(i)
    }
    return pagesArray
})
</script>

<template>
    <div class="pagination">
        <button
            v-if="currentPage > 1"
            @click="$emit('page-changed', currentPage - 1)"
            aria-label="Previous Page"
            class="pagination-prev"
        >
            <img
                src="public/arrow-right.svg"
                alt=""
            />
        </button>

        <button
            v-for="page in visiblePages"
            :key="page"
            :class="{ active: page === currentPage }"
            @click="$emit('page-changed', page)"
        >
            {{ page }}
        </button>

        <button
            v-if="currentPage < totalPages"
            @click="$emit('page-changed', currentPage + 1)"
            aria-label="Next Page"
            class="pagination-next"
        >
            <img
                src="public/arrow-right.svg"
                alt=""
            />
        </button>
    </div>
</template>

<style scoped lang="scss">
$button-size: 44px;

.pagination {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    button {
        border-radius: 12px;
        width: $button-size;
        height: $button-size;
        border: none;
        background-color: var(--light-grey-color);
        cursor: pointer;

        &:hover {
            background: var(--dark-grey-color);
        }
    }

    button.active {
        background-color: var(--black-color);
        color: var(--white-color);
    }

    .pagination-prev,
    .pagination-next {
        border: 1px solid #e8e8e8;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            background: var(--dark-grey-color);
        }
    }

    .pagination-prev {
        img {
            transform: rotate(180deg);
        }
    }
}
</style>
