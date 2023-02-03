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
    output: 'standalone',
    onDemandEntries: {
        pagesBufferLength: 5,
        maxInactiveAge: 1000 * 60 * 60,
    },
};
