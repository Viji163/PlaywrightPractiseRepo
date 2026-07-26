
let browser = "Chrome"
function checkBrowserVersion(callback) {

    setTimeout(()=> {
     callback(browser)
    },2000)
    
}
function version(browserName) {
    console.log("Browser Version :"+ browserName);
}
checkBrowserVersion(version)

