fx_version 'cerulean'
game 'gta5'

-- Der Pfad zur HTML-Datei für das UI muss relativ zum Ressourcenverzeichnis angegeben werden.
ui_page 'public/index.html'

files {
    'public/*.*', -- Dies würde alle Dateien im 'public'-Verzeichnis einbeziehen.
    'public/music/*.mp3' -- Dies würde speziell alle MP3-Dateien im 'public/music'-Verzeichnis einbeziehen.
}

-- Pfad zum Client-Skript, das angenommen wird, sich im Hauptverzeichnis der Ressource zu befinden.
client_script 'client.lua'
