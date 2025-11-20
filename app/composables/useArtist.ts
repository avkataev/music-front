export function useArtist() {
    const data = ref(null)
    const findAll = async () => {
        data.value = await $fetch('http://localhost:8080/api/artist') || null
    }
    const findById = async (id: string) => {
        return await $fetch(`http://localhost:8080/api/artist/${id}`) || null
    }

    return {
        findAll,
        findById,
        data,
    }
}