module.exports = {
    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    {
                        key: "x-custom-header",
                        value: "my, custom, header, value",
                    },
                ],
            },
        ];
    },
    experimental: {
        // Defaults to 50MB
        isrMemoryCacheSize: 0,
    },
};
