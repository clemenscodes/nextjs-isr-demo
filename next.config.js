const { join } = require("path");
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
    onDemandEntries: {
        pagesBufferLength: 5,
        maxInactiveAge: 1000 * 60 * 60,
        pagesDirectory: join(__dirname, "pages-isr"),
    },
};
