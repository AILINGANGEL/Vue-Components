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
shape|可以设置为circle,让按钮变成原型|-
size|可以设置为large, small| String| -

#### event
默认支持click事件


### ButtonGroup
#### props
属性|说明|类型|默认值
----|----|----|----|
size|可以为'large', 'small'|String|-
vertical|竖着排列按钮|Boolean|false
shape|设置两头的按钮为原型，只在vertical为false的情况下生效|String| -


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

### Collapse
#### props
属性|说明|类型|默认值
----|----|----|----|
value|当前激活面板的name 支持v-model双向绑定|Array or String |-
accordion|开启手风琴模式，每次只能撑开一个面板|Boolean|false

#### events
事件名|说明|返回值
----|----|----|
on-change|返回当前激活的面板|[]


### Panel Props
属性|说明|类型|默认值
----|----|----|----|
name|当前面板的name, 与Collapse的value值对应|String |-


### Panel Slot
属性|说明
----|----|
无|面板头内容
content|描述内容


### Input
#### props
属性|说明|类型|默认值
----|----|----|----|
type |输入框类型，可选值为 text、password、textarea、url、email、date |String|text
value | 绑定的值，可使用 v-model 双向绑定| String or Number| -
size | 输入框尺寸，可选值为large、small、default或者不设置|String| -
placeholder | 占位文本| String| -
disabled |设置输入框为禁用状态	|Boolean| false
readonly |设置输入框为只读	|Boolean|false
rows |文本域默认行数，仅在 textarea 类型下有效|Number|2
autofocus |自动获取焦点|Boolean|false
autocomplete |原生的自动完成功能，可选值为 off 和 on	|on or off | off


### Input events
事件名|说明|返回值
----|----|----|
on-change|数据改变时触发| event
on-change|数据改变时触发|	event
on-focus|输入框聚焦时触发| 无
on-blur|输入框失去焦点时触发|无
on-keyup|原生的 keyup 事件|event
on-keydown|原生的 keydown 事件|event
on-keypress|原生的 keypress 事件|event

### Input methods
事件名|说明|参数
----|----|----|
focus|手动聚焦输入框|无