ESX = nil
Citizen.CreateThread(function()
  while true do
    if ESX ~= nil then
      break
    end
    TriggerEvent(Config.esxtrigger, function(a)
      ESX = a
    end)
    Citizen.Wait(0)
  end
end)
Check = Citizen.CreateThread
Citizen.CreateThread(function()
  while true do
    Citizen.Wait(3000)
    DataSczek()
  end
end)
CreateThread(function()
  function DataSczek()
    while not ESX do
      Wait(1)
    end
    for fe = 1, #ESX.GetPlayers() do
      Check(ESX.GetPlayers()[fe])
    end
  end
end)
function NotifyTeam(a, b, c, d)
  print("Godzillac | identifier: " .. d .. ", Discord warn!")
  PerformHttpRequest(LogWebhook, function(a, b)
  end, "POST", json.encode({
    embeds = {
      {
        title = "Probably Detected __Money__ Spawning . Money before: " .. b .. ", Money After: " .. c .. "",
        description = [[

 
User Information: 
Identifier: ]] .. d .. [[

 User: ]] .. ESX.GetPlayerFromIdentifier(d).getName(),
        color = 16711928,
        author = {
          name = "[Godzillac]"
        }
      }
    }
  }), {
    ["Content-Type"] = "application/json"
  })
end