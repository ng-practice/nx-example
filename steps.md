# Steps

```bash
npx create-nx-workspace sc-sport-is-awesome
npx: installed 167 in 37.04s
? What to create in the new workspace angular           [a workspace with a single Angular application]
? Application name                    fanshop
? Default stylesheet format           SASS(.scss)  [ http://sass-lang.com   ]
```

```bash
ng add @nrwl/nest

ng generate @nrwl/nest:application --name=api --frontendProject=fanshop 

? In which directory should the node application be generated? 
```
Updated/Added:
* [a] apps/api
* [m] apps/fanshop/proxy.conf.json

```bash
ng generate @nrwl/workspace:library --name=domain
```

* add Product class
  * use it in api

```bash
yarn affected:dep-graph
```

```bash
ng generate @schematics/angular:module --name=shop --project=fanshop
```

```
ng g module shop --project=fanshop
ng g component product-list --project=fanshop
```

* add array of Product to product-list
* *no commit*
```bash
yarn affected:lint
nx affected:lint

> Affected criteria defaulted to --base=master --head=HEAD


> Running target lint for projects:

  - fanshop  <--
  - fanshop-e2e <--
```

```bash
yarn affected:dep-graph
```

* verify changed dependencies
* verfiy modified libraries/apps

```bash
ng generate @nrwl/angular:library --name=ui-components --style=scss --prefix=uic
```

```js
//nx.json

"projects": {
    "fanshop-e2e": {
      "tags": ["cypress", "fanshop"]
    },
    "fanshop": {
      "tags": ["fanshop"]
    },
    "api": {
      "tags": ["api"]
    },
    "domain": {
      "tags": ["domain"]
    },
    "ui-components": {
      "tags": ["ui-components"]
    }
  }

// tslint.json
"depConstraints": [
          {
            "sourceTag": "domain",
            "onlyDependOnLibsWithTags": []
          },
          {
            "sourceTag": "ui-compoents", 
            "onlyDependOnLibsWithTags": []
          }
        ]
```

```bash
ng g c list-item --project=ui-components
```

```ts
//list-item.component.ts
...
@Input() item: Product;
...
```

```
yarn affected:lint

ERROR: A project tagged with "scope:ui-components" can only depend on libs tagged with "scope:ui-components"
```