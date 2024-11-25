**Describe the bug**

After building a vite project with `@datadog/browser-logs@5.20.0`, `@datadog/browser-rum@5.20.0`, and `@xmldom/xmldom@0.9.5`, loading the transpiled javascript bundle in the browser yields the following fatal error:

```
index-CSY3qgmv.js:1652 Uncaught SyntaxError: Identifier <obfuscated> has already been declared
```

Switching from `@datadog/browser-rum@5.20.0` to the slim version `@datadog/browser-rum-slim@5.20.0` appears to resolve the issue.

**Relevant Packages**

`vite: ^5.4.10`
`@vitejs/plugin-react: ^4.0.1`
`vite-tsconfig-paths: 5.0.1`
`react: ^18.2.0`
`react-dom: ^18.2.0`
`@datadog/browser-logs: ^5.20.0`
`@datadog/browser-rum: ^5.20.0`
`@xmldom/xmldom: ^0.9.5`

**To Reproduce**
Steps to reproduce the behavior:

1. Create a new vite project with the **Relevant Dependencies** listed above
2. Run `vite build` (should be successful)
3. Run `vite preview` (should be successful)
4. View the preview URL in your browser and open the console
5. You should see the error `Uncaught SyntaxError: Identifier <obfuscated> has already been declared`

**Expected behavior**

I would expect that the installation of `@datadog/browser-rum@5.20.0` would not cause this issue when used alongside `@xmldom/xmldom@0.9.5`, similar to the behavior of `@datadog/browser-rum-slim@5.20.0`.

Since it only happens with `@datadog/browser-rum@5.20.0` I'm assuming this is somehow related to the inclusion of the session replay feature.
