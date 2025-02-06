import * as _0x37c09d from "@minecraft/server";
import * as _0x235cd5 from "@minecraft/server-ui";
function showSettingsMenu(_0x2ea149) {
  const _0x6cd2c9 = new _0x235cd5["ActionFormData"]()
    ["title"]("Device\x20Info\x20Menu")
    ["body"]("เลือกตัวเลือกในการปรับแต่งป้ายชื่อของคุณ:")
    ["button"]("More\x20Options", "textures/ui/sidebar_icons/realms_plus_skins_icon")
    ["button"]("Other\x20Devices", "textures/ui/sidebar_icons/owned_skins_icon")
    ["button"]("§7Credits");
  _0x6cd2c9["show"](_0x2ea149)["then"]((_0x28f7d4) => {
    if (_0x28f7d4["canceled"]) return;
    switch (_0x28f7d4["selection"]) {
      case 0x0:
        showSettingsMore(_0x2ea149);
        break;
      case 0x1:
        showDeviceDetails(_0x2ea149);
        break;
      case 0x2:
        showCredits(_0x2ea149);
        break;
    }
  });
}
function showSettingsMore(_0x3a55a6) {
  const _0x23cd05 = new _0x235cd5["ActionFormData"]()
    ["title"]("More\x20Options")
    ["body"](
      "\x0a\x20เลือกรูปแบบป้ายชื่อที่คุณต้องการแสดง:\x20\x0a" +
        "\x0a\x20Name\x20=\x20ชื่อผู้เล่น" +
        "\x0a\x20Platform\x20=\x20แพลตฟอร์ม" +
        "\x0a\x20RAM\x20=\x20ขนาด\x20RAM\x20ของอุปกรณ์" +
        "\x0a\x20Render\x20Distance\x20=\x20ระยะการมองเห็นของคุณที่ปรับได้สูงสุด\x0a\x20" +
        "\x0a\x20§c*\x20ค่าที่ปรับไปแล้วจะไม่มีการ\x20Save\x0a\x20"
    )
    ["button"]("Name\x20Only")
    ["button"]("Name\x20+\x20Platform\x20(Default)", "textures/ui/sidebar_icons/promotag")
    ["button"]("Name\x20+\x20RAM")
    ["button"]("Name\x20+\x20Render\x20Distance")
    ["button"]("Name\x20+\x20Platform\x20+\x20RAM")
    ["button"]("Name\x20+\x20Platform\x20+\x20Render\x20Distance")
    ["button"]("Name\x20+\x20RAM\x20+\x20Render\x20Distance")
    ["button"]("Name\x20+\x20Platform\x20+\x20RAM\x20+\x20Render\x20Distance")
    ["button"]("Back");
  _0x23cd05["show"](_0x3a55a6)["then"]((_0x2377a8) => {
    if (_0x2377a8["canceled"]) {
      _0x3a55a6["runCommand"](
        "title\x20@s\x20actionbar\x20" + _0x3a55a6["nameTag"]["replace"]("\x0a\x0a", "\x20")
      );
      return;
    }
    if (_0x2377a8["selection"] === 0x8) {
      showSettingsMenu(_0x3a55a6);
      return;
    }
    const _0x4ed5e5 = getPlatformLabel(_0x3a55a6);
    const _0x43f139 = getMemoryLabel(_0x3a55a6);
    const _0x426c7e =
      "[Render:\x20" + _0x3a55a6["clientSystemInfo"]["maxRenderDistance"] + "\x20chunks]";
    const _0x359563 = [
      "" + _0x3a55a6["name"],
      _0x3a55a6["name"] + "\x20[" + _0x4ed5e5 + "]",
      _0x3a55a6["name"] + "\x20[" + _0x43f139 + "]",
      _0x3a55a6["name"] + "\x0a" + _0x426c7e,
      _0x3a55a6["name"] + "\x20[" + _0x4ed5e5 + "]\x0a[" + _0x43f139 + "]",
      _0x3a55a6["name"] + "\x20[" + _0x4ed5e5 + "]\x0a" + _0x426c7e,
      _0x3a55a6["name"] + "\x20" + _0x43f139 + "\x0a" + _0x426c7e,
      _0x3a55a6["name"] + "\x20[" + _0x4ed5e5 + "]\x0a[" + _0x43f139 + "]\x0a" + _0x426c7e,
    ];
    _0x3a55a6["nameTag"] = _0x359563[_0x2377a8["selection"]];
    _0x3a55a6["runCommand"](
      "title\x20@s\x20actionbar\x20" + _0x3a55a6["nameTag"]["replace"]("\x0a\x0a", "\x20")
    );
  });
}
function showDeviceDetails(_0x22915f) {
  const _0x434d09 = [..._0x37c09d["world"]["getPlayers"]()];
  if (_0x434d09["length"] === 0x0) {
    _0x22915f["sendMessage"]("ไม่มีผู้เล่นคนอื่นในโลกนี้");
    return;
  }
  const _0x1c201c = new _0x235cd5["ActionFormData"]()
    ["title"]("Other\x20Devices")
    ["body"]("รายละเอียดอุปกรณ์ผู้เล่นอื่นๆ:");
  _0x434d09["forEach"]((_0x497053) =>
    _0x1c201c["button"]("" + _0x497053["name"], "textures/ui/xbox4")
  );
  _0x1c201c["button"]("Back");
  _0x1c201c["show"](_0x22915f)["then"]((_0x4154d3) => {
    if (_0x4154d3["canceled"] || _0x4154d3["selection"] === _0x434d09["length"]) {
      showSettingsMenu(_0x22915f);
      return;
    }
    const _0x2ab1b8 = _0x434d09[_0x4154d3["selection"]];
    const _0x194398 = new _0x235cd5["ActionFormData"]()
      ["title"]("Device\x20Details\x20for\x20" + _0x2ab1b8["name"])
      ["body"](
        "\x0a§fName:\x20\x20§7" +
          _0x2ab1b8["name"] +
          "\x0a" +
          ("§fPlatform:\x20\x20§7" + getPlatformLabel(_0x2ab1b8) + "\x0a") +
          ("§fMemory:\x20\x20§7" + getMemoryLabel(_0x2ab1b8) + "\x0a") +
          ("§fRender\x20Distance:\x20\x20§7" +
            _0x2ab1b8["clientSystemInfo"]["maxRenderDistance"] +
            "\x20Chunks\x20Max\x0a")
      )
      ["button"]("Back");
    _0x194398["show"](_0x22915f)["then"]((_0x347f88) => {
      if (_0x347f88["selection"] === 0x0) {
        showDeviceDetails(_0x22915f);
      }
    });
  });
}
function showCredits(_0x2cd9be) {
  const _0x4b4140 = new _0x235cd5["ActionFormData"]()
    ["title"]("Device\x20Info\x20Add-on")
    ["body"](
      "\x0a§fDevice\x20Info\x20Add-on\x20by\x20SolightzZ.\x0a" +
        "\x20หากมีปัญหาหรือข้อเสนอแนะใดๆ\x20โปรดติดต่อเรา:\x0a" +
        "\x0aช่องทางต่างๆ:\x0a" +
        "§f\x20Discord:\x20§bSleeplite\x20Server\x20(SMP)" +
        "\x0a" +
        "§f\x20Link:\x20§9discord.gg/gtqfbmvTJK" +
        "\x0a\x0a" +
        "§f\x20Gitbook:\x20Sleeplite\x0a" +
        "§f\x20Link:\x20§7solightzz.gitbook.io/sleeplite" +
        "\x0a\x0a" +
        "§f\x20Tiktok:\x20sleeplite.official\x0a" +
        "§f\x20Link:\x20§7tiktok.com/@sleeplite.official" +
        "\x0a\x0a"
    )
    ["button"]("Back");
  _0x4b4140["show"](_0x2cd9be)["then"]((_0x4e225a) => {
    if (_0x4e225a["canceled"]) return;
    showSettingsMenu(_0x2cd9be);
  });
}
function getPlatformLabel(_0xa388f4) {
  const _0x3018e6 = {
    [_0x37c09d["PlatformType"]["Mobile"]]: "Mobile",
    [_0x37c09d["PlatformType"]["Desktop"]]: "Desktop",
    [_0x37c09d["PlatformType"]["Console"]]: "Console",
  };
  return _0x3018e6[_0xa388f4["clientSystemInfo"]["platformType"]] || "[Unknown\x20Platform]";
}
function getMemoryLabel(_0x5b0940) {
  const _0x59e4a5 = {
    [_0x37c09d["MemoryTier"]["SuperLow"]]: "RAM:\x201\x20GB\x20or\x20lower",
    [_0x37c09d["MemoryTier"]["Low"]]: "RAM:\x202\x20GB",
    [_0x37c09d["MemoryTier"]["Mid"]]: "RAM:\x204\x20GB",
    [_0x37c09d["MemoryTier"]["High"]]: "RAM:\x208\x20GB",
    [_0x37c09d["MemoryTier"]["SuperHigh"]]: "[RAM:\x208.5+\x20GB]",
  };
  return _0x59e4a5[_0x5b0940["clientSystemInfo"]["memoryTier"]] || "[Unknown\x20Memory]";
}
_0x37c09d["world"]["afterEvents"]["itemUse"]["subscribe"]((_0x1dc065) => {
  if (_0x1dc065["itemStack"]["typeId"] === "minecraft:compass") {
    showSettingsMenu(_0x1dc065["source"]);
  }
});
_0x37c09d["world"]["afterEvents"]["playerSpawn"]["subscribe"]((_0x21b47c) => {
  const _0x48a269 = _0x21b47c["player"];
  const _0x155a90 = getPlatformLabel(_0x48a269);
  const _0x27ca7a = getMemoryLabel(_0x48a269);
  const _0x9edf5f =
    "[Render\x20Distance:\x20" + _0x48a269["clientSystemInfo"]["maxRenderDistance"] + "\x20chunks]";
  console["warn"](
    _0x48a269["name"] +
      "\x20is\x20playing\x20on\x20" +
      _0x155a90 +
      "\x20with\x20" +
      _0x27ca7a +
      "\x20and\x20" +
      _0x9edf5f
  );
  _0x48a269["nameTag"] = (_0x48a269["name"] + "\x20[" + _0x155a90 + "]")["trim"]();
});
