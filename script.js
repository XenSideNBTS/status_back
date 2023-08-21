//based on a pen by @robinselmer
var url = "https://api.minetools.eu/ping/xensidenbts.tk";
 
$.getJSON(url, function(r) {
    //data is the JSON string
 if(r.error){
    $('#rest').html('Сервер оффлайн! Возможно на нем Тех.Неполадки.');
   return false;
 } 
var pl = '';
 $('#rest').html(r.description.replace(/§(.+?)/gi, '')+'<br><br><b>Версия: '+r.version.name+'<br><b>Пинг: '+r.latency+'<br><b>Игроков онлайн:</b> '+r.players.online+'/'+r.players.max);
 $('#favicon').attr('src', r.favicon);
    
});
