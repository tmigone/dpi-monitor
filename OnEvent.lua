function OnEvent(event, arg)
  --DPI up
  if event == "MOUSE_BUTTON_PRESSED" and arg == 8 then
    PlayMacro("dpi-monitor-up")
  end
  --DPI down
  if event == "MOUSE_BUTTON_PRESSED" and arg == 7 then
    PlayMacro("dpi-monitor-down")
  end
end