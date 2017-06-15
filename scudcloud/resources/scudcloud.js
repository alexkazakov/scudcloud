ScudCloud={unloaded:!0,env:{mac_ssb_version:1},hasPreference:function(e){return!1},getPreference:function(e){return!1},setPreference:function(e,t){return!1},canShowHtmlNotifications:function(){return!1},app:{getModifierKeys:function(){}},call:function(e,t){switch(ScudCloud.log(e,t),e){case"reload":return ScudCloud.reload();case"didStartLoading":return ScudCloud.didStartLoading();case"didFinishLoading":return ScudCloud.didFinishLoading();case"setConnectionStatus":return ScudCloud.setConnectionStatus(t);case"notify":return ScudCloud.notify(t);case"setBadgeCount":return ScudCloud.setBadgeCount(t);case"displayTeam":return ScudCloud.displayTeam(t);case"signInTeam":return ScudCloud.signInTeam()}return!1},reload:function(){window.location.reload()},didStartLoading:function(){},didFinishLoading:function(){TS.ui.banner.close(),ScudCloud.populate(),ScudCloud.unloaded=!1},setConnectionStatus:function(e){switch(e){case"online":desktop.enableMenus(!0);break;default:desktop.enableMenus(!1)}},notify:function(e){desktop.sendMessage(e.title,e.content)},setBadgeCount:function(e){desktop.count(e.all_unread_highlights_cnt,e.all_unread_cnt)},signInTeam:function(){desktop.addTeam()},displayTeam:function(e){},log:function(e,t){try{"object"==typeof t&&(t=JSON.stringify(t))}catch(e){t=""}console.log("ScudCloud."+e+", args: "+t)},populate:function(){if("undefined"!=TS&&TS.model&&TS.model.team&&TS.model.team.icon&&TS.model.team.icon.image_44)desktop.populate(JSON.stringify({channels:ScudCloud.listChannels(),teams:ScudCloud.listTeams(),icon:TS.model.team.icon.image_44})),document.querySelector(".ql-editor").addEventListener("paste",desktop.pasted);else{var e=Math.round(900*Math.random())+100;setTimeout(ScudCloud.populate,e)}},createSnippet:function(){return TS.ui.snippet_dialog.start()},listChannels:function(){var e=TS.channels.getUnarchivedChannelsForUser();return e.push(TS.channels.getChannelById(TS.model.active_channel_id)),e},listTeams:function(){var e=[{id:TS.boot_data.user_id,team_color:null,team_icon:TS.model.team.icon,team_id:TS.model.team.id,team_name:TS.model.team.name,team_url:"https://"+TS.model.team.domain+".slack.com/"}];for(var t in TS.boot_data.other_accounts)e.push(TS.boot_data.other_accounts[t]);return e},quicklist:function(){desktop.quicklist(ScudCloud.listChannels())},join:function(e){return TS.channels.join(e)},setClipboard:function(e){TS.client.ui.file_pasted_sig.dispatch(e,TS.model.shift_key_pressed)},sendTickle:function(){return TS.client.ui.maybeTickleMS()},preferences:function(){return TS.ui.prefs_dialog.start()},addTeam:function(){document.location=TS.boot_data.signin_url},getCurrentTeam:function(){return TS.boot_data.user_id?TS.boot_data.user_id:""},logout:function(){document.location=TS.boot_data.logout_url},help:function(){return TS.help_modal.start()}},document.onpaste=function(e){desktop.pasted(!1)},$("body").delegate("#channel_calls_button","click",function(){desktop.open(TS.boot_data.team_url+"call/"+TS.model.active_cid)}),$("body").undelegate('a[href="/files/create/space"]',"click"),$("body").delegate('a[href="/files/create/space"]',"click",function(e){desktop.createPost(TS.boot_data.team_url),e.preventDefault()}),window.winssb=TSSSB=ScudCloud,ScudCloud.unloaded&&ScudCloud.didFinishLoading();