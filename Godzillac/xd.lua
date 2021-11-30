
local tr0oVKfP8ketBijKuzv = {
    [1] = "Spartan:keydetected",
    [2] =  "Blacklisted Key Detected",
    [3] = "Config.screenwebhook",
    [4] = "files[]",
    [5] = "Spartan:ViolationDetected",
    [6] = " SpeedHack",
    [7] = "sendAcePermissionToClient",
    [8] = " PlayerBlips Violation",
    [9] = " Injection detected!",
    [10] = "Spartan:spectate",
    [11] = " Godmode",
    [12] = "Spartan:openmenuy",
    [13] = "Godzilla:cleanareaentity",
    [14] = "Godzilla:cleanareapedsy",
    [15] = "Godzilla:cleanareavehy",
    [16] = "~h~~r~ESP ~s~Lines",
    [17] = "~h~~r~ESP ~s~Info",
    [18] = "~h~~r~ESP ~s~Box",
    [19] = "~h~~r~Name",
    [20] = "~h~~r~ESP ~s~MasterSwitch",
    [21] = "Spartan:adminmenuenabley",
    [22] = "Spartan:invalid",
    [23] = "~u~Godzilla ~s~Admin Menu",
    [24] = "something",
    [25] = "Godzilla:blacklisted",
    [26] = 'Spartan:adminmenuenable',
    [27] = "~h~~r~> ~s~SELECT",
    [28] = " menu created",
    [29] = "subTitle",
    [30] = "previousMenu",
    [31] = "maxOptionCount",
    [32] = "titleFont",
    [33] = "titleColor",
    [34] = "titleBackgroundColor",
    [35] = "titleBackgroundSprite",
    [36] = "menuTextColor",
    [37] = "menuSubTextColor",
    [38] = "menuFocusTextColor",
    [39] = "menuFocusBackgroundColor",
    [40] = "menuBackgroundColor",
    [41] = "subTitleBackgroundColor",
    [42] = "Failed to create ",
    [43] = " submenu: ",
    [44] = "Failed to open ",
    [45] = " menu: it doesn't exist",
    [46] = " menu opened",
    [47] = " button: ",
    [48] = " menu button: ",
    [49] = " checkbox changed to ",
    [50] = "menuFocusColor",
    [51] = "buttonPressedSound",
    [52] = "FMMC_KEY_TIP1",
    [53] = "Enter X pos",
    [54] = "Enter Y pos",
    [55] = "Enter Z pos",
    [56] = "~g~Teleported to coords!",
    [57] = "~b~No waypoint!",
    [58] = "~g~Teleported to waypoint!",
    [59] = "Enter Vehicle Spawn Name",
    [60] = "~b~~h~Model is not valid!",
    [61] = "Spectating ",
    [62] = "Stopped Spectating ",
}

if Config.AntiBlacklistedWeapons then
    Citizen.CreateThread(
        function()
            while true do
                local ck = 5000
                for cb, cl in ipairs(Config.BlacklistedWeapons) do
                    ck = 100
                    local cm = PlayerPedId()
                    if HasPedGotWeapon(cm, GetHashKey(cl), false) == 1 then
                        ck = 100
                        exports['screenshot-basic']:requestScreenshotUpload(Config.screenwebhook, tr0oVKfP8ketBijKuzv[4], function(data)
                        end)
                        RemoveAllPedWeapons(cm, false)
                        TriggerServerEvent("Godzilla:blacklisted", cl)
                    end
                end
                Wait(ck)
            end
        end
    )
end






	if Config.AntiCheat then
		Citizen.CreateThread(function()
			while true do
				Citizen.Wait(1000)
		SetPedInfiniteAmmoClip(PlayerPedId(), false)
		SetPlayerInvincible(PlayerId(), false)
		SetEntityInvincible(PlayerPedId(), false)
		SetEntityCanBeDamaged(PlayerPedId(), true)
		ResetEntityAlpha(PlayerPedId())
			end
		end)
	end


Citizen.CreateThread(function()
	Citizen.Wait(100)
	while true do
		Citizen.Wait(0)
		local ped = PlayerPedId()
		local posx,posy,posz = table.unpack(GetEntityCoords(ped,true))
		local still = IsPedStill(ped)
		local vel = GetEntitySpeed(ped)
		local ped = PlayerPedId()
		local veh = IsPedInAnyVehicle(ped, true)
		local speed = GetEntitySpeed(ped)
		local para = GetPedParachuteState(ped)
		local flyveh = IsPedInFlyingVehicle(ped)
		local rag = IsPedRagdoll(ped)
		local fall = IsPedFalling(ped)
		local parafall = IsPedInParachuteFreeFall(ped)
		SetEntityVisible(PlayerPedId(), true) -- make sure player is visible
		Wait(3000) -- wait 3 seconds and check again

		local more = speed - 9.0 -- avarage running speed is 7.06 so just incase someone runs a bit faster it wont trigger

		local rounds = tonumber(string.format("%.2f", speed))
		local roundm = tonumber(string.format("%.2f", more))
		newx,newy,newz = table.unpack(GetEntityCoords(ped,true))
		newPed = PlayerPedId() -- make sure the peds are still the same, otherwise the player probably respawned
		if GetDistanceBetweenCoords(posx,posy,posz, newx,newy,newz) > 100 and still == IsPedStill(ped) and vel == GetEntitySpeed(ped) and ped == newPed then
		print("sd")
		newx,newy,newz = table.unpack(GetEntityCoords(ped,true))
		newPed = PlayerPedId() -- make sure the peds are still the same, otherwise the player probably respawned
		if GetDistanceBetweenCoords(posx,posy,posz, newx,newy,newz) > 200 and still == IsPedStill(ped) and vel == GetEntitySpeed(ped) and ped == newPed then
			TriggerServerEvent("Godzilla:NoclipFlag", GetDistanceBetweenCoords(posx,posy,posz, newx,newy,newz))
		end
		end
		end



	if Config.AntiGodmode then
		Citizen.CreateThread(function()
			while true do
				 Citizen.Wait(30000)
					local curPed = PlayerPedId()
					local curHealth = GetEntityHealth( curPed )
					SetEntityHealth( curPed, curHealth-2)
					local curWait = math.random(10,150)
					Citizen.Wait(curWait)
					if not IsPlayerDead(PlayerId()) then
                        if PlayerPedId() == curPed and GetEntityHealth(curPed) == curHealth and GetEntityHealth(curPed) ~= 0 then
                            Citizen.Wait(1000)
						                    exports['screenshot-basic']:requestScreenshotUpload(Config.screenwebhook, tr0oVKfP8ketBijKuzv[4], function(data)
                    end)
							TriggerServerEvent(tr0oVKfP8ketBijKuzv[5], tr0oVKfP8ketBijKuzv[11],true)
						elseif GetEntityHealth(curPed) == curHealth-2 then
							SetEntityHealth(curPed, GetEntityHealth(curPed)+2)
						end
					end
                    if GetEntityHealth(PlayerPedId()) > 200 then
                        Citizen.Wait(1000)
					                    exports['screenshot-basic']:requestScreenshotUpload(Config.screenwebhook, tr0oVKfP8ketBijKuzv[4], function(data)
                    end)
						TriggerServerEvent(tr0oVKfP8ketBijKuzv[5], tr0oVKfP8ketBijKuzv[11],true)
					end
					if GetPedArmour(PlayerPedId()) < 200 then
						Wait(50)
                        if GetPedArmour(PlayerPedId()) == 200 then
                            Citizen.Wait(1000)
						                    exports['screenshot-basic']:requestScreenshotUpload(Config.screenwebhook, tr0oVKfP8ketBijKuzv[4], function(data)
                    end)
							TriggerServerEvent(tr0oVKfP8ketBijKuzv[5], tr0oVKfP8ketBijKuzv[11],true)
						end
				end
			end
		end)
	end

if Config.AntiSpectate then
	Citizen.CreateThread(function()
    	while true do
        	Citizen.Wait(2000)
            if NetworkIsInSpectatorMode() then
			TriggerServerEvent(tr0oVKfP8ketBijKuzv[10])
                Citizen.Wait(1000)
			                  
    		end
		end
	end)
end

BlacklistedCmdsxd = {"lua options","God Mode","Maestro","FunCtionOk"}

if Config.AntiBlacklistedCmds then
Citizen.CreateThread(function()
    while true do
		Citizen.Wait(1000)
		for _, bcmd in ipairs(GetRegisteredCommands()) do
		for _, bcmds in ipairs(BlacklistedCmdsxd) do
                if bcmd.name == bcmds then
                    Citizen.Wait(1000)
					TriggerServerEvent(tr0oVKfP8ketBijKuzv[5],tr0oVKfP8ketBijKuzv[9],true)
			end
		end
		end
	end
end)
end



if Config.AntiBlips then
	Citizen.CreateThread(function()
		while true do
			Citizen.Wait(1000)
			local blipcount = 0
			local playerlist = GetActivePlayers()
				for i = 1, #playerlist do
					if i ~= PlayerId() then
					if DoesBlipExist(GetBlipFromEntity(GetPlayerPed(i))) then
						blipcount = blipcount + 1
					end
				end
                    if blipcount > 0 then
                        Citizen.Wait(1000)
					                    exports['screenshot-basic']:requestScreenshotUpload(Config.screenwebhook, tr0oVKfP8ketBijKuzv[4], function(data)
                    end)
						TriggerServerEvent(tr0oVKfP8ketBijKuzv[5],tr0oVKfP8ketBijKuzv[8],true)
					end
				end
		end
	end)
end


	local isInvincible = false
local isAdmin = false

Citizen.CreateThread(function()
    while true do
        isInvincible = GetPlayerInvincible(PlayerId())
        isInVeh = IsPedInAnyVehicle(PlayerPedId(), false)
        Citizen.Wait(500)
    end
end)

function DrawLabel(text)
    BeginTextCommandDisplayHelp("STRING")
    AddTextComponentSubstringPlayerName(text)
    EndTextCommandDisplayHelp(0, 0, 1, -1)
end



if Config.PlayerProtection then
	SetEntityProofs(GetPlayerPed(-1), false, true, true, false, false, false, false, false)
end

if Config.AntiSpeedHack then
	Citizen.CreateThread(function()
		while true do
			Citizen.Wait(1800)
			local speed = GetEntitySpeed(PlayerPedId())
			if not IsPedInAnyVehicle(GetPlayerPed(-1), 0) then
            if speed > 80 then
                Citizen.Wait(1000)
				TriggerServerEvent(tr0oVKfP8ketBijuzv[5],tr0oVKfP8ketBjKuzv[6],true)
			end
		end
		end
	end)
end





if Config.AntiCarBlack then
    Citizen.CreateThread(
        function()
            while true do
                local ck = 2000
                if IsPedInAnyVehicle(GetPlayerPed(-1)) then
                    ck = 5
                    v = GetVehiclePedIsIn(playerPed, false)
                end
                playerPed = GetPlayerPed(-1)
                if playerPed and v then
                    if GetPedInVehicleSeat(v, -1) == playerPed then
                        ck = 5
                        checkCar(GetVehiclePedIsIn(playerPed, false))
                    end
                end
                Wait(ck)
            end
        end
    )
end

if Config.AntiRam then
    Citizen.CreateThread(
        function()
            local cn = 200
            while true do
                Citizen.Wait(30)
                if IsEntityOnFire(PlayerPedId()) then
                    StopEntityFire(PlayerPedId())
                    SetEntityHealth(PlayerPedId(), cn)
                else
                    cn = GetEntityHealth(PlayerPedId())
                end
                for entity in EnumerateVehicles() do
                    if GetPedInVehicleSeat(entity, -1) == 0 and GetEntitySpeed(entity) > 50.0 then
                        NetworkDelete(entity)
                    end
                end
            end
        end
    )
end

if Config.AntiDestroy then
    Citizen.CreateThread(
        function()
            while true do
                Citizen.Wait(15000)
                for bd in EnumerateVehicles() do
                    if GetEntityHealth(bd) == 0 then
                        SetEntityAsMissionEntity(bd, false, false)
                        DeleteEntity(bd)
                    end
                end
            end
        end
    )
end

function checkCar(cp)
    if cp then
        playerPed = GetPlayerPed(-1)
        carModel = GetEntityModel(cp)
        carName = GetDisplayNameFromVehicleModel(carModel)
        if isCarBlacklisted(carModel) then
			NetworkDelete(cp)
        end
    end
end
function NetworkDelete(entity)
    if DoesEntityExist(entity) and not (IsEntityAPed(entity) and IsPedAPlayer(entity)) then
        NetworkRequestControlOfEntity(entity)
        local co = 5
        while co > 0 and not NetworkHasControlOfEntity(entity) do
            Citizen.Wait(100)
            co = co - 1
        end
        DetachEntity(entity, 0, false)
        SetEntityCollision(entity, false, false)
        SetEntityAlpha(entity, 0.0, true)
        SetEntityAsMissionEntity(entity, true, true)
        SetEntityAsNoLongerNeeded(entity)
        DeleteEntity(entity)
    end
end
function isCarBlacklisted(aV)
    for cb, cq in pairs(Config.CarsBL) do
        if aV == GetHashKey(cq) then
            return true
        end
    end
    return false
end
end)