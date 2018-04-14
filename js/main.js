var keys = [
    ['1','2','3','4','5','6','7','8','9','0'],
     ['q','w','e','r','t','y','u','i','o','p'],
     ['a','s','d','f','g','h','j','k','l'],
     ['z','x','c','v','b','n','m',',']
]

var hash = {
    'q':'qq.com','w':'weibo.com'
}

hashInLocalStorage = JSON.parse(localStorage.getItem('zzz') || 'null')
if(hashInLocalStorage){
    hash = hashInLocalStorage
}

console.log(hash);


for(i = 0; i < keys.length ; i++){
    var div = document.createElement('div');
    var row = keys[i];
    div.className = 'row';
    main.appendChild(div);
    for(j = 0 ;j<row.length; j++){
        var kbd = document.createElement('kbd');
        div.appendChild(kbd);

        var span = document.createElement('span');
        span.textContent = row[j];
        kbd.appendChild(span);

        var button = document.createElement('button');
        //button.textContent = 'e';
        kbd.appendChild(button);
        button.id = row[j];
        button.onclick = function(abc){
            var button2 = abc['target']
            var img2 = button2.previousSibling;
            var key = abc['target']['id'];
            var weburl = prompt('input');
            hash[key] = weburl;
            img2.src = 'http://' + weburl + '/favicon.ico';
            xxx.onerror = function(xxx){
            xxx.target.src = "./img/noicon.png";
            }
            localStorage.setItem('zzz', JSON.stringify(hash))
        }

        var img = document.createElement('img');
        console.log(hash[row[j]]);
        if(hash[row[j]]){
            img.src = 'http://' + hash[row[j]]+ '/favicon.ico';
        }else{
            img.src = './img/noicon.png';
        }
        img.onerror = function(xxx){
            xxx.target.src = "./img/noicon.png";
        }
        button.appendChild(img);

    }   
}

document.onkeypress = function(abc){
    var key = abc['key'];
    var webpage = hash[key];
    window.open('http://'+webpage,'_blank');
}