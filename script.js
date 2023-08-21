//based on a pen by @robinselmer
var url = "https://api.minetools.eu/ping/xensidenbts.tk";
 
$.getJSON(url, function(r) {
    //data is the JSON string
 if(r.error){
    $('#rest').html('Сервер оффлайн! Возможно на нем Тех.Неполадки.');
   return false;
 } 
var pl = '';
  $('#rest').html(r.description.replace(/§(.+?)/gi, '')+'<br><b>Игроков Онлайн:</b> '+r.players.online+pl)+'<br><b>Пинг сервера: '+r.latency+pl);
 $('#favicon').attr('src', r.favicon);
    
});
