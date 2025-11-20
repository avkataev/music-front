export function useAlbum() {
    const data = ref(null)
    const findAll = async () => {
        data.value = await $fetch('http://localhost:8080/api/album') || null
    }
    const findById = async (id: string) => {
        return await $fetch(`http://localhost:8080/api/album/${id}`) || null
    }

    return {
        findAll,
        findById,
        data,
    }
}