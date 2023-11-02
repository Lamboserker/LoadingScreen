-- client.lua

-- Registriert ein Event, das den Loadingscreen anzeigt
RegisterNUICallback('showLoadingScreen', function()
    -- Sendet einen Befehl an die NUI, um den Loadingscreen anzuzeigen
    SetNuiFocus(true, true)
    SendNUIMessage({ type = 'ON_LOADING_SCREEN' })
end)

-- Registriert ein Event, das den Loadingscreen versteckt
RegisterNUICallback('hideLoadingScreen', function()
    -- Sendet einen Befehl an die NUI, um den Loadingscreen zu verstecken
    SetNuiFocus(false)
    SendNUIMessage({ type = 'OFF_LOADING_SCREEN' })
end)

-- Überprüft regelmäßig den Ladezustand des Spielers
Citizen.CreateThread(function()
    while true do
        Citizen.Wait(1000) -- Wartezeit in Millisekunden
        -- Überprüfen Sie hier den Fortschritt des Ladevorgangs und senden Sie Updates an den Loadingscreen
        local loadingProgress = GetLoadingProgress() -- Diese Funktion sollte Ihren Fortschritts-Logik entsprechen
        SendNUIMessage({ type = 'UPDATE_LOADING_PROGRESS', progress = loadingProgress })

        -- Wenn der Ladevorgang abgeschlossen ist
        if loadingProgress >= 100 then
            TriggerEvent('hideLoadingScreen')
            break -- Beendet die Schleife, wenn das Laden abgeschlossen ist
        end
    end
end)

-- Stellt eine Hilfsfunktion bereit, um den Ladebildschirm anzuzeigen
function DisplayLoadingScreen()
    TriggerEvent('showLoadingScreen')
end
