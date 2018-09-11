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
type|可以为'primary', 'success', 'warning', 'error', 'default', 'text', 'dash'中的一个,也可以不设置|String|default
long|开启后按钮的长度为100%|Boolean|false
disabled|设置按钮为禁用状态|Boolean|false
ghost|设置背景为透明|Boolean|false

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
order| 栅格的位置顺序， flex布局模式下有效| Number, String| 0
offset| 栅格左侧的间隔数,支持0-24的整数| Number, String| 0


### Card
#### props
属性|说明|类型|默认值
----|----|----|----|
bordered| 是否显示边框|Boolean|true
dis-hover| 禁用鼠标悬停显示阴影| Boolean| false
title| 设置card的标题|String| -
padding| 设置card内容区的padding, 单位px| Number| 16px


#### slot
属性|说明|
----|----|
title|自定义卡片标题|
extra|额外展示的内容，默认位置为右上角|