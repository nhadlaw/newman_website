import { defineConfig } from 'sanity';
import {deskTool} from 'sanity/desk';
import schemas from "./sanity/schemas"

const config = defineConfig({
    projectId: "ds40fytf",
    dataset: "production",
    title: "Newman Website",
    apiVersion: "2024-12-18",
    basPath: "/admin",
    plugins: [deskTool()],
    schema: {types: schemas}
});

export default config;