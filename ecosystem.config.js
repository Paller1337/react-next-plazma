module.exports = {
    apps: [{
        name: "kplazma",
        script: "npm",
        args: "start",
        watch: true,
        env: {
            "PORT": 3000,
            "NODE_ENV": "development"
        },
        env_production: {
            "PORT": 3000,
            "NODE_ENV": "production",
        }
    }]
};
