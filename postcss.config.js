export default {
    plugins: {
        "postcss-nested": {},
        '@stylexjs/postcss-plugin': {
            include: [
                './**/*.{js,jsx,ts,tsx}',
            ],
            useCSSLayers: true,
        },
    }
}