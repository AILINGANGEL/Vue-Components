export default function upload(option) {
	var xhr = new XMLHttpRequest();
	let formData = new FormData();
	// 文件
	formData.append(option.fileName, option.file);

	//上传附带的额外的参数
	if(option.data) {
		Object.keys(option.data).forEach(item=>{
			console.log(item);
			formData.append(item, option.data[item]);
		})
	}

	xhr.open("post", option.action);

	//上传的请求头
	let headers = option.headers || {};
	for (let item in headers) {
        if (headers.hasOwnProperty(item) && headers[item] !== null) {
            xhr.setRequestHeader(item, headers[item]);
        }
    }

    //设置跨域的时候是否发送cookie等信息
    xhr.withCredentials = option.withCredentials;

	xhr.send(formData);
}