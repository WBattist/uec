var favicon = localStorage.getItem('favicon');
var title = localStorage.getItem('title');

if (!title) {
    title = "UEC Launcher";
    localStorage.setItem('title', title);
    document.title = title;
} else {
    document.title = title;
};

if (!favicon) {
    favicon = `${window.location.href}/assets/gc.png`;
    localStorage.setItem('favicon', favicon);
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = favicon;
    document.getElementsByTagName('head')[0].appendChild(link);
} else {
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = favicon;
    document.getElementsByTagName('head')[0].appendChild(link);    
};

function titleCloak(title) {
    localStorage.setItem('title', title);
    document.title = title;
};

function faviconCloak(url) {
    let faviconUrl = `https://www.google.com/s2/favicons?domain=${url}`;
    localStorage.setItem('favicon', faviconUrl);
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = faviconUrl;
    document.getElementsByTagName('head')[0].appendChild(link);
};

function ab() {
    var win = window.open()
    var url = `${window.location.href}`
    var iframe = win.document.createElement('iframe')
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.overflow = "hidden";
    iframe.style.margin = "0";
    iframe.style.padding = "0";
    iframe.style.position = "fixed";
    iframe.style.top = "0";
    iframe.style.bottom = "0";
    iframe.style.left = "0";
    iframe.style.right = "0";
    iframe.src = url;
    win.document.body.appendChild(iframe)
};

function openSettingsModal() {
    document.getElementById('settingsModal').style.display = 'block';
}

function closeSettingsModal() {
    document.getElementById('settingsModal').style.display = 'none';
}

function saveTitle() {
    var title = document.getElementById('titleInput').value;
    titleCloak(title);
}

function saveIcon() {
    var iconUrl = document.getElementById('iconInput').value;
    faviconCloak(iconUrl);
}