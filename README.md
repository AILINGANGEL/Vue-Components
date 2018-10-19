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

## 基础

### ICON
### props
属性|说明|类型|默认值
----|----|----|----|
type | 图标的名称| String|-
size | 图标的大小，单位是 px | Number | String	-
color| 图标的颜色	 | String | -


## 布局

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

## 表单

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




### Upload

### props
属性|说明|类型|默认值
----|----|----|----|
accept | 接受上传的文件类型	| String|	-
multiple	 | 是否支持多选文件 |Boolean| false
show-upload-list | 是否显示已上传文件列表 |Boolean| true
data|上传时带的其他请求参数|Object|-
headers|上传的请求头部|Object|-
format|支持的文件类型，与 accept 不同的是，format 是识别文件的后缀名，accept 为 input 标签原生的 accept 属性，会在选择文件时过滤，可以两者结合使用|Array|-
type|上传控件的类型，可选值为 select（点击选择），drag（支持拖拽）	|String|select
max-size|文件大小限制，单位 kb	|Number|-
paste|是否支持粘贴上传文件	|Boolean|false
preview| 是否支持预览，只有在是图片的情况下生效|Boolean|false
with-credentials|跨站请求时是否允许发送cookie等凭证信息|Boolean|false
on-error|文件上传失败时的钩子，返回字段为 error, file, fileList|Function| -
before-upload|上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传	|Function|-
on-exceeded-size|文件超出指定大小限制时的钩子，返回字段为 file, fileList	|Function|-




### methods
方法名|说明|参数
----|----|----|
clearFiles|清空已上传的文件列表|无

### slot
名称|说明
----|----|
无|触发上传组件的控件
tip|辅助提示


### 开发备注
问题|解决方案
----|----|
1 原生的Input type=file的组件样式很丑 | 自己写一个样式，然后设置原生的<input type="file" /> display:none 将其隐藏，然后点击自己样式的组件之后调用这个原生的组件的click事件
2.上传文件| 上传文件需要使用post请求,用表单进行提交,新建一个表单对象 let formData = new FormData(),然后将上传需要的Post参数依次append到这个对象中formData.appen('file', file);
3.有很多函数都作为prop,并没有作为event handler| 查了vue 论坛，目前没有特别说明两者的区别，怎么使用纯属个人爱好
4.如何预览图片|获取到文件对象fileObj,然后利用URL.createObjectURL(fileObj)方法返回一个表示这个对象的url,并将这个url赋值给img标签的url属性



## 视图

### Message

通过直接调用以下方法来使用组件：

this.$Message.info(config)
this.$Message.success(config)
this.$Message.warn(config)
以上方法隐式的创建及维护 Vue 组件。参数 config 可以是字符串或对象，当为字符串时，直接显示内容，当为对象时，具体说明如下：

### props
属性|说明|类型|默认值
----|----|----|----|
content | 提示内容	| String|	-
render | 自定义描述内容，使用 Vue 的 Render 函数|Function|-
duration | 自动关闭的延时，单位秒 |Number|1.5
onClose	| 关闭时的回调 | Function |	-
closable |是否显示关闭按钮|Boolean |	false

### 开发备注
问题|解决方案
----|----|
1 this.$Message.loading()需要一个Loading动画 | 见下方代码

```css
// loading动画
@keyframes loading {
	0 {transform: rotate(0deg);}
    50% {transform: rotate(180deg);}
    100% {transform: rotate(360deg);}
}
// loading 样式
.loading {
	display: inline-block;
	margin-right: 2px;
	margin-left: 2px;
	width: 15px;
	height: 15px;
	border-radius: 100%;
	border: 1px dashed #4b9cdb;
	animation: loading 1.5s .3s cubic-bezier(.17,.37,.43,.67) infinite;
}
```


### Modal
### props
属性|说明|类型|默认值
----|----|----|----|
value | 对话框是否显示，可使用 v-model 双向绑定数据 | Boolean | false
title | 对话框标题，如果使用了slot自定义页头,则title无效| String| -
mask | 是否显示遮罩层，开启 draggable 时，强制不显示| Boolean|true
ok-text	| 确定按钮的文字|String|确定
cancel-text | 取消按钮的文字|String|取消
mask-closable| 是否允许点击遮罩层关闭	| Boolean| true
width|设置对话框的宽度,单位为px|Number,String| 520
footer-hide	| 不显示底部| Boolean| false
styles| 设置浮层样式，调整浮层位置等，该属性设置的是.v-modal的样式	|Object|-
z-index|层级|Number|1000
top|模态框距离浏览器顶部的位置,单位px|Number, String|100


### Modal events
事件名|说明|返回值
----|----|----|
on-ok|点击确定的回调| -
on-cancel|点击取消的回调| -
on-visible-change|显示状态发生变化时触发|true/false


### slot
名称|说明
----|----|
header|自定义页头
footer|自定义页角
无|对话框的主体内容
