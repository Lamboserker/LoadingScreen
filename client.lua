-- client.lua
local isLoading = true
local loadProgress = 0

-- Haupt-Thread für den simulierten Ladevorgang
Citizen.CreateThread(function()
    while isLoading do
        Citizen.Wait(1000) -- Simuliert die Wartezeit für das Laden der Ressourcen

        -- Aktualisiere den Ladestatus
        loadProgress = loadProgress + 10

        -- Übertrage den Ladestatus an das NUI-Frontend
        SendNUIMessage({
            action = 'updateLoadingBar',
            progress = loadProgress
        })

        -- Überprüfe, ob das Laden abgeschlossen ist
        if loadProgress >= 100 then
            isLoading = false
            -- Weitere Aktionen nach dem Laden können hier eingeleitet werden
            SendNUIMessage({
                action = 'hideLoadingScreen'
            })
        end
    end
end)

-- Weitere Client-seitige Event-Listener und Funktionen können hier hinzugefügt werden.
