
// 1. 初始化数据
var hashA = init()
var keys = hashA['keys']
var hash = hashA['hash']

// 2. 生成键盘
// 遍历 keys，生成 kbd 标签
generateKeyboard(keys, hash)

// 3. 监听用户动作
listenToUser(hash)

// 下面是工具函数
function getFromLocalStorage(name){
    return JSON.parse(localStorage.getItem(name) || 'null')
}
function tag(tagName){
    return document.createElement(tagName) 
}

function createSpan(textContent){
    var span = tag('span')
    span.textContent = textContent
    span.className = "text"
    return span
}
function createButton(id){
    var button = tag('button')
    button.textContent = "editor"
    button.id = id
    button.onclick = function(xzkjcnxlkcjlk){
        // xzkjcnxlkcjlk['target'] 就是用户点击的元素
        var button2 = xzkjcnxlkcjlk['target']
        // var img2 = button2.previousSibling
        var key = button2['id'] // q w e r t
        var x = prompt('小懒蛇酷爱输入一个网址啦=w=') // qq.com
        hash[key] = x  // hash 变更
        // img2.src = 'http://'+x + '/favicon.ico'
        // img2.onerror = function(xxx){
        // 	xxx.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
        // }
        localStorage.setItem('zzz', JSON.stringify(hash))
    }
    return button
}
// function createImage(domain){
// 	var img = tag('img')
// 	if(domain){
// 		img.src = 'http://'+ domain + '/favicon.ico'
// 	}else{
// 		img.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
// 	}
// 	img.onerror = function(xxx){
// 		xxx.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
// 	}
// 	return img
// }
function init(){
    var keys = {
        '0': {0:'1',1:'2',2:'3',3:'4',4:'5',5:'6',6:'7',7:'8',8:'9',9:'0',length:10},
        '1': {0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
        '2': {0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
        '3': {0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',7:',',length:8},
        'length': 4
    }
    var hash = {'q': 'qq.com', 'w': 'weibo.com', 'e': 'ele.me', 'r': 'renren.com', 't': 'tianya.com', 'y': 'youtube.com', 'u': 'uc.com' , 'i': 'iqiyi.com', 'o': 'opera.com', 'p': undefined, 'a': 'acfun.tv', 's': 'sohu.com', 'z': 'zhihu.com', 'm': 'www.mcdonalds.com.cn'
    }
    // 取出 localStorage 中的 zzz 对应的 hash
    var hashInLocalStorage = getFromLocalStorage('zzz') 
    if(hashInLocalStorage){
        hash = hashInLocalStorage
    }
    return {
        "keys": keys,
        "hash": hash
    }
}
function generateKeyboard(keys, hash){
    for(var index=0; index< keys['length']; index = index+1 ){
        var div = tag('div')
        div.className = 'row'
        main.appendChild(div)
    var row = keys[index]  // 第一个数组  第二个数组  第三个数组
    for(var index2 =0;index2< row['length']; index2 = index2 + 1){
        var span = createSpan(row[index2])
        var button = createButton(row[index2])
        // var img = createImage(hash[row[index2]])
        var kbd = tag('kbd')
        kbd.className = 'key'
        kbd.appendChild(span)
        // kbd.appendChild(img)
        kbd.appendChild(button)
        div.appendChild(kbd)
    }
}
}	
function listenToUser(hash){
document.onkeypress = function(xzkjcnxlkcjlk){
        var key = xzkjcnxlkcjlk['key'] // q w e
        var website = hash[key]
        //location.href = 'http://'+website
        window.open('http://'+website, '_blank')
    }
}



// keys = [
		// 	['1','2','3','4','5','6','7','8','9','0'],
		// 	['q','w','e','r','t','y','u','i','o','p'],
		// 	['a','s','d','f','g','h','j','k','l'],
		// 	['z','x','c','v','b','n','m',',']
		// ]

		// hash = {
		// 	'q':'qq.com','w':'weibo.com','e':'e.com','r':'r.com'
		// }

		// hashInLocalStorage = JSON.parse(localStorage.getItem('zzz') || 'null')
		// if(hashInLocalStorage){
		// 	hash = hashInLocalStorage
		// }

        // for(var i=0; i<keys.length ;i++){
		// 	var div = document.createElement('div');
		// 	main.appendChild(div);
		// 	var row = keys[i];
		// 	div.className = 'row';
		// 	for(j=0; j<row.length ;j++){
		// 		var kbd = document.createElement('kbd');
				

		// 		var button =document.createElement('button');
		// 		button.textContent = '修改';
		// 		button.id = row[j];
		// 		button.onclick = function(abcdefg){
		// 			key = abcdefg['target']['id']; 
		// 			x = prompt ('input the web');
		// 			hash[key] = x
		// 			localStorage.setItem('zzz',JSON.stringify(hash));
		// 			consloe.log(hash);
		// 		}

		// 		var span = document.createElement('span');
		// 		span.textContent = row[j];

		// 		kbd.appendChild(span);
		// 		kbd.appendChild(button);
		// 		main.appendChild(kbd);
		// 	}
		// }

		// document.onkeypress = function(abcdefg){
		// 	key = abcdefg['key']
		// 	website = hash[key]
		// 	window.open('http://'+website, '_blank')
		// }