команди
npm run dev
npm run build
// кореневі папки
app.js
style.scss
index.html
// вставка html
@@include ('/way', {
"variable": "value"
})
- and then in the file of input:
@@variable
// вставка scss
@import 'foundation/code', 'foundation/lists';
// вставка js
import * as Name from "./modules/Name.js";
