# pittisl.github.io

## Customization

https://wowchemy.com/docs/hugo-tutorials/extending-wowchemy/

## Local preview

Use Hugo extended 0.145.0, matching CI:

```sh
hugo server --environment development
```

Development previews omit the visitor counter entirely, so browsing localhost
does not record visits. Production builds retain it. To inspect a static local
build, also set `--environment development`.
