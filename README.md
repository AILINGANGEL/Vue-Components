# Vue-Component
使用vue封装的一套组件库

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```


## 组件说明
### Button
#### props
属性|说明|类型|默认值
----|----|----|----|
type|可以为'primary', 'success', 'warning', 'danger', 'default'中的一个,也可以不设置|String|default
long|开启后按钮的长度为100%|Boolean|false
disabled|设置按钮为禁用状态|Boolean|false

#### event
默认支持click事件



### Divider
#### props
属性|说明|类型|默认值
----|----|----|----|
type|可以为'horizontal', 'vertical',也可以不设置|String|horizontal
align|设置文字排版的方向，只在type为Horizontal时生效|Boolean|center
dashed|设置线条的样式,开启后就是虚线，默认实线|Boolean|false

### Row
#### props
属性|说明|类型|默认值
----|----|----|----|
type|可以不填，或者设置成flex|-
gutter|栅格的间距，单位px, 左右均分|Number|0
align|flex布局的垂直对齐方式，支持top, middle, bottom|String|-
justify|flex布局下的水平排列方式,支持start, end, center, space-between, space-around|String|-


### Col
#### props
属性|说明|类型|默认值
----|----|----|----|
span| 栅格的占位格数, 支持0-24的整数|Number, String|-
