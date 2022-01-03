const fs = require("fs");
const path = require("path");

const config = async () => {
    const filePath = path.join(process.cwd(), ".env");
    const buffer = fs.readFileSync(filePath);
    const entries = buffer
        .toString()
        .split(/\n|\r/)
        .map(entry => entry.split("="))
        .filter(e => e);

    for (const [key, value] of entries) {
        if (!key || !value || process.env[key]) return;
        const newEnvar = { [key]: value };
        Object.assign(process.env, newEnvar);
    }
};

module.exports = { config };
