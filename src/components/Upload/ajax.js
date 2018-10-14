function getError(action, xhr) {
    const msg = `fail to post ${action} ${xhr.status}'`;
    const err = new Error(msg);
    err.status = xhr.status;
    err.method = 'post';
    err.url = action;
    return err;
}

function getBody(xhr) {
    const text = xhr.responseText || xhr.response;
    if (!text) {
        return text;
    }

    try {
        return JSON.parse(text);
    } catch (e) {
        return text;
    }
}

export default function upload(option) {
	var xhr = new XMLHttpRequest();
	let formData = new FormData();
	// 文件
	formData.append(option.fileName, option.file);

	//上传附带的额外的参数
	if(option.data) {
		Object.keys(option.data).forEach(item=>{
			formData.append(item, option.data[item]);
		})
	}

	xhr.onerror = function error(e) {
        option.onError(e);
    };

    xhr.onload = function onload() {
        if (xhr.status < 200 || xhr.status >= 300) {
            return option.onError(getError(option.action, xhr), getBody(xhr));
        }

        // option.onSuccess(getBody(xhr));
    };


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