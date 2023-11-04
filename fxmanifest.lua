fx_version 'cerulean'
games { 'gta5' }

author 'Lamboserker'
description 'Custom loadingscreen for fiveM'
version '1.0.0'
loadscreen_cursor 'yes'
loadscreen_manual_shutdown 'no'
loadscreen 'index.html'

files {
    'index.html',
    'html/assets/css/main.css',
    'html/assets/js/main.js',
    
    'html/assets/videos/background.mp4', 
    'html/assets/music/Kendrick Lamar-M.A.A.D.City.mp3' 
}

-- Server-sided music streaming might require additional server configuration
loadscreen_music 'html/assets/music/Kendrick Lamar-M.A.A.D.City.mp3'
