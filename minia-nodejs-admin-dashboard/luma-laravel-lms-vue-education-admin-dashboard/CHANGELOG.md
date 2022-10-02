## Luma Laravel v1.1.0
> Jan 10, 2021

```
Changes
Drop resources/vendor/ui-huma package
- Move dependencies to root package.json
- Remove unused dependencies
- Move SCSS files to resources/scss

Fix install and build issues
- Upgrade to laravel-mix@next (v6 - webpack@5, postcss@8 etc)
- Upgrade to laravel-mix-merge-manifest@next (laravel-mix@6 support)
- Replace postcss-rtl with @mjhenkes/postcss-rtl (fixes postcss-rtl with postcss@8 error; see https://github.com/vkalinichev/postcss-rtl/pull/73)
- Add package-lock.json file

Add documentation guide for extending and customizing the source client-side Vue components
- https://www.frontendmatter.com/product/luma-laravel/documentation/custom-components
- Add custom home component samples as per the guide (routes/web.php, resources/js/Pages/Demos/CustomHomePage.vue and resources/js/Components/CustomHomeComponent.vue)
```

## Luma Laravel v1.0.1
> Oct 28, 2020

```
Changes
- Add stylesheet preloading fallback for Firefox and other browsers without support for link[rel=preload]
- Fixed Browser Support via .babelrc and core-js@3 (last 2 versions of every major browser and IE >= 11)
```

## Luma Laravel v1.0.0
> Oct 26, 2020

```
- Initial release
```
