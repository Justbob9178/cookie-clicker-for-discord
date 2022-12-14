/**
 * @name Cookie Clicker
 * @author Bob
 * @description ply cookie clicker in discord. Perfect for those times your just waiting for someone to get online on your favroute games. :)
 * @version 1.0.0
 */


var cookiesVariable
var cookiePerClick

//load settings
const mySettings = BdApi.loadData("CookieClicker", "options");
cookiesVariable = mySettings.cookiesVar,
cookiePerClick = mySettings.cookiePerClick

//shop
function shop (cookiesVariable){
  BdApi.showNotice(
    'Shop',
    {
      type: "info",
      buttons: [
        {
          label: "+1 cookie per click. 🍪 50",
            onClick: () =>{
              if(cookiesVariable > 50){
                cookiesVariable = cookiesVariable - 50
                cookiePerClick = cookiePerClick + 1
                BdApi.showToast("CPC upgraded! cookies per click= " + cookiePerClick + '. Balance= ' + cookiesVariable);
              }
          }
        },
        { 
          label: '+10 cookies per click. 🍪 1000',
            onClick: () =>{
              if(cookiesVariable > 200){
                cookiesVariable = cookiesVariable - 200
                cookiePerClick = cookiePerClick + 10
                BdApi.showToast("CPC upgraded! cookies per click= " + cookiePerClick + '. Balance= ' + cookiesVariable);
              }
          }
        }
      ]
    }
  )  
}



//on start scripts
function cookies (cookiesVariable){
  BdApi.showNotice(
    'Cookie clicker',
    {
        type: "info",
        buttons: [
            {
                label: "🍪",
                onClick: () =>{
                  cookiesVariable = cookiesVariable + cookiePerClick
                  BdApi.showToast("Added 1 cookie your balance is " + cookiesVariable);
                  var mySettings = {
                    cookiesVar: cookiesVariable,
                    cookiePerClick: cookiePerClick
                  };
                  BdApi.saveData("CookieClicker", "options", mySettings);
                }
            },
            {
                label: "shop",
                onClick: () => {
                  shop(cookiesVariable)
                }
            }
        ]
    }
);
}

//on start
module.exports = class ExamplePlugin {
    start() {
      cookies(cookiesVariable);
    } 

    stop() {
    }
}