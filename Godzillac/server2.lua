local m = ""
local n = {}
function loadBans()
 m = LoadResourceFile(GetCurrentResourceName(), "explosionandobjectsban.json") or ""
 if m ~= "" then
     n = json.decode(m)
 else
     n = {}
 end
end

function isBanned(source)
    if n[source] ~= nil then
        return n[source]
    else
        return false
    end
end

function permBanUser(o, source)
    n[source] = {banner = o, reason = "HACKER", expire = 0}
    SaveResourceFile(GetCurrentResourceName(), "explosionandobjectsban.json", json.encode(n), -1)
end

RegisterServerEvent("Godzilla:Explosionsban")
AddEventHandler(
    "Godzilla:Explosionsban",
    function(Z, a1)
        local s = GetPlayerName(Z)
        local X = GetPlayerIdentifier(Z)
        local identifiers, Y = GetPlayerIdentifiers(source)
        local steamid = false
        local license = false
        local discord = false
        for H, B in ipairs(GetPlayerIdentifiers(Z)) do
            if string.sub(B, 1, string.len("steam:")) == "steam:" then
                permBanUser(X, B)
            elseif string.sub(B, 1, string.len("license:")) == "license:" then
                permBanUser(X, B)
            elseif string.sub(B, 1, string.len("discord:")) == "discord:" then
                permBanUser(X, B)
            end
        end
        for H, B in pairs(GetPlayerIdentifiers(Z)) do
            if string.sub(B, 1, string.len("steam:")) == "steam:" then
                steamid = B
            elseif string.sub(B, 1, string.len("license:")) == "license:" then
                license = B
            elseif string.sub(B, 1, string.len("discord:")) == "discord:" then
                discord = B
            end
        end
        TriggerEvent(
            "discordlog:sendToDiscord",
            "EXPLOSION DETECTED AND PLAYER BANNED",
            "**\nNAME: **" ..
                tostring(s) ..
                    "**\n Steam: **" ..
                        tostring(X) ..
                            "**\n Discord: **" ..
                                tostring(discord) ..
                                    "**\n Fivem: **" ..
                                        tostring(license) ..
                                            "**\nREASON: **" .. tostring(a1),
            16711680
        )
        DropPlayer(
            Z,
            ConfigCS.explosionban ..
			" [Godzilla AC V2]"
        )
    end
)