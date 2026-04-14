export const getAssetPath = (path: string) => {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    if (import.meta.env.PROD) {
        return `/Furniro-Shop/${cleanPath}`;
    }

    return `/Furniro-Shop/${cleanPath}`;
}; 