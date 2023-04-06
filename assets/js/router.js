const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href)
    handleLocation();
}

const routes = {
    404: "/pages/404.html",
    "/": "/pages/index.html",
    "/about": "/pages/about.html",
    "/categories": "/pages/categories.html",
    "/blog": "/pages/blog.html",
}

handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404]
    const html = await fetch(route).then((response) => response.text())
    document.getElementById("content").innerHTML = html;
}

window.onpopstate = handleLocation;
window.route = route;

handleLocation();