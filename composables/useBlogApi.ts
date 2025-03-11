import { ref } from "vue"
import type { Post } from "~/types/post"

export function useBlogApi() {
    const api = useApi()
    const posts = ref<Array<Post>>([])
    const post = ref<Post>()
    const loading = ref<boolean>(true)
    const loadingSingle = ref<boolean>(true)

    async function getPosts(): Promise<void> {
        try {
            loading.value = true
            const { data } = await api.get(`/posts`)
            posts.value = data
        } catch (error) {
            posts.value = []
            console.log(error)
        } finally {
            loading.value = false
        }
    }

    async function getPost(postID: number): Promise<void> {
        try {
            loadingSingle.value = true
            const { data } = await api.get(`/posts/${postID}`)
            post.value = data
        } catch (error) {
            console.log(error)
        } finally {
            loadingSingle.value = false
        }
    }

    return {
        getPosts,
        getPost,
        posts,
        post,
        loading,
        loadingSingle,
    }
}
