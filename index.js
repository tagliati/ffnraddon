var { ToggleButton } = require("sdk/ui/button/toggle");
var { setInterval } = require("sdk/timers");
var Request = require("sdk/request").Request;
var notifications = require("sdk/notifications");
var preferences = require("sdk/simple-prefs").prefs;
var button = ToggleButton({
        id: "my-button1",
        label: "PageLoad",
        icon: "./icon-16.png",
        badge:0,
        disabled: true,
        badgeColor: "#00AAAA"
      });



function updatePageLoad(state) {
    var Request = require("sdk/request").Request;
    Request({
        url: preferences['newRelicUrl'],
          overrideMimeType: "text/JSON; charset=latin1",
          onComplete: function (response) {
              console.log(response);
/*              pageload = response.json.json.results[0].average.toFixed(2);
              button.badge = pageload;
              notifications.notify({text: "Pageload atual:"+pageload});*/
          }
    }).get();
}
updatePageLoad();
setInterval(function(){updatePageLoad()}, preferences['requestInterval']*1000);
