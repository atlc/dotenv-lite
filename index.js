const fs = require("fs");
const path = require("path");

const config = async () => {
    const filePath = path.join(process.cwd(), ".env");
    const buffer = fs.readFileSync(filePath);
    const entries = buffer
        .toString()
        .split(/\n|\r/)
        .map(entry => entry.split("="));

    for (const [key, value] of entries) {
        if (!key || !value) return;
        const newEnvar = { [key]: value };
        Object.assign(process.env, newEnvar);
    }
};

module.exports = { config };
