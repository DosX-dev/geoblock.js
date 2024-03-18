# geoblock.js
This library checks the user's browser language and blocks access if the language matches one of the blocked country codes

## Adding it to your site

Just add `geoblock.js` via `<script>` and specify which countries you want to restrict access to your web resource.

The example below restricts access to Ukraine (uk) and the United States (us):
```html
<script src="geoblock.js" banned="uk, us" redirect="/block">
```
