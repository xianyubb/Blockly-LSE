import * as Blockly from "blockly/core";

const Player_Name = {
    type: "Player_Name",
    message0: "name",
    args0: [],
    colour: 120,
    output: "String",
  },
  Player_Pos = {
    type: "Player_Pos",
    message0: "pos",
    args0: [],
    colour: 120,
    output: "FloatPos",
  },
  Player_BlockPos = {
    type: "Player_BlockPos",
    message0: "blockPos",
    args0: [],
    colour: 120,
    output: "IntPos",
  },
  Player_FeetPos = {
    type: "Player_FeetPos",
    message0: "feetPos",
    args0: [],
    colour: 120,
    output: "FloatPos",
  },
  Player_LastDeathPos = {
    type: "Player_LastDeathPos",
    message0: "lastDeathPos",
    args0: [],
    colour: 120,
    output: "IntPos",
  },
  Player_RealName = {
    type: "Player_RealName",
    message0: "realName",
    args0: [],
    colour: 120,
    output: "String",
  },
  Player_Xuid = {
    type: "Player_Xuid",
    message0: "xuid",
    args0: [],
    colour: 120,
    output: "String",
  },
  Player_Uuid = {
    type: "Player_Uuid",
    message0: "uuid",
    args0: [],
    colour: 120,
    output: "String",
  },
  Player_PermLevel = {
    type: "Player_PermLevel",
    message0: "permLevel",
    args0: [],
    colour: 120,
    output: "Number",
  },
  Player_GameMode = {
    type: "Player_GameMode",
    message0: "gameMode",
    args0: [],
    colour: 120,
    output: "Number",
  },
  Player_CanFly = {
    type: "Player_CanFly",
    message0: "canFly",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_CanSleep = {
    type: "Player_CanSleep",
    message0: "canSleep",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_CanBeSeenOnMap = {
    type: "Player_CanBeSeenOnMap",
    message0: "canBeSeenOnMap",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_CanFreeze = {
    type: "Player_CanFreeze",
    message0: "canFreeze",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_CanSeeDaylight = {
    type: "Player_CanSeeDaylight",
    message0: "canSeeDaylight",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_CanShowNameTag = {
    type: "Player_CanShowNameTag",
    message0: "canShowNameTag",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_CanStartSleepInBed = {
    type: "Player_CanStartSleepInBed",
    message0: "canStartSleepInBed",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_CanPickupItems = {
    type: "Player_CanPickupItems",
    message0: "canPickupItems",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_MaxHealth = {
    type: "Player_MaxHealth",
    message0: "maxHealth",
    args0: [],
    colour: 120,
    output: "Number",
  },
  Player_Health = {
    type: "Player_Health",
    message0: "health",
    args0: [],
    colour: 120,
    output: "Number",
  },
  Player_InAir = {
    type: "Player_InAir",
    message0: "inAir",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_InWater = {
    type: "Player_InWater",
    message0: "inWater",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_InLava = {
    type: "Player_InLava",
    message0: "inLava",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_InRain = {
    type: "Player_InRain",
    message0: "inRain",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_InSnow = {
    type: "Player_InSnow",
    message0: "inSnow",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_InWall = {
    type: "Player_InWall",
    message0: "inWall",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_InWaterOrRain = {
    type: "Player_InWaterOrRain",
    message0: "inWaterOrRain",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_InWorld = {
    type: "Player_InWorld",
    message0: "inWorld",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_InClouds = {
    type: "Player_InClouds",
    message0: "inClouds",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_IsSneaking = {
    type: "Player_IsSneaking",
    message0: "isSneaking",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_Sneaking = {
    type: "Player_Sneaking",
    message0: "sneaking",
    args0: [],
    colour: 120,
    output: "Boolean",
    deprecated: true,
  },
  Player_Speed = {
    type: "Player_Speed",
    message0: "speed",
    args0: [],
    colour: 120,
    output: "Number",
  },
  Player_Direction = {
    type: "Player_Direction",
    message0: "direction",
    args0: [],
    colour: 120,
    output: "DirectionAngle",
  },
  Player_UniqueId = {
    type: "Player_UniqueId",
    message0: "uniqueId",
    args0: [],
    colour: 120,
    output: "String",
  },
  Player_LangCode = {
    type: "Player_LangCode",
    message0: "langCode",
    args0: [],
    colour: 120,
    output: "String",
  },
  Player_IsLoading = {
    type: "Player_IsLoading",
    message0: "isLoading",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_IsInvisible = {
    type: "Player_IsInvisible",
    message0: "isInvisible",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_IsInsidePortal = {
    type: "Player_IsInsidePortal",
    message0: "isInsidePortal",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_IsHurt = {
    type: "Player_IsHurt",
    message0: "isHurt",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_IsTrusting = {
    type: "Player_IsTrusting",
    message0: "isTrusting",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_IsTouchingDamageBlock = {
    type: "Player_IsTouchingDamageBlock",
    message0: "isTouchingDamageBlock",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_IsHungry = {
    type: "Player_IsHungry",
    message0: "isHungry",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_IsOnFire = {
    type: "Player_IsOnFire",
    message0: "isOnFire",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_IsOnGround = {
    type: "Player_IsOnGround",
    message0: "isOnGround",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_IsOnHotBlock = {
    type: "Player_IsOnHotBlock",
    message0: "isOnHotBlock",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_IsTrading = {
    type: "Player_IsTrading",
    message0: "isTrading",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_IsAdventure = {
    type: "Player_IsAdventure",
    message0: "isAdventure",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_IsGliding = {
    type: "Player_IsGliding",
    message0: "isGliding",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_IsSurvival = {
    type: "Player_IsSurvival",
    message0: "isSurvival",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_IsSpectator = {
    type: "Player_IsSpectator",
    message0: "isSpectator",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_IsRiding = {
    type: "Player_IsRiding",
    message0: "isRiding",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_IsDancing = {
    type: "Player_IsDancing",
    message0: "isDancing",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_IsCreative = {
    type: "Player_IsCreative",
    message0: "isCreative",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_IsFlying = {
    type: "Player_IsFlying",
    message0: "isFlying",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_IsSleeping = {
    type: "Player_IsSleeping",
    message0: "isSleeping",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_IsMoving = {
    type: "Player_IsMoving",
    message0: "isMoving",
    args0: [],
    colour: 120,
    output: "Boolean",
  },
  Player_IP = {
    type: "Player_IP",
    message0: "ip",
    args0: [],
    colour: 120,
    output: "String",
    deprecated: true,
  };

const Player_isOP = {
    type: "Player_isOP",
    message0: "isOP %1",
    args0: [
      {
        type: "input_value",
        name: "var",
        check: "String",
      },
    ],
    colour: 285,
    output: "Boolean",
    previousStatement: null,
    nextStatement: null,
  },
  Player_Kick = {
    type: "Player_Kick",
    message0: "kick %1 %2",
    args0: [
      {
        type: "input_value",
        name: "var",
        check: "String",
      },
      {
        type: "input_value",
        name: "reason",
        check: "String",
        optional: true,
      },
    ],
    colour: 285,
    output: "Boolean",
    previousStatement: null,
    nextStatement: null,
  },
  Player_Tell = {
    type: "Player_Tell",
    message0: "tell %1 %2 %3",
    args0: [
      {
        type: "input_value",
        name: "var",
        check: "String",
      },
      {
        type: "input_value",
        name: "msg",
        check: "String",
      },
      {
        type: "input_value",
        name: "msg",
        check: "Number" || "sendTextType",
        optional: true,
      },
    ],
    colour: 285,
    output: "Boolean",
    previousStatement: null,
    nextStatement: null,
  };

const Player_sendText = {
  type: "Player_sendText",
  message0: "sendText %1 %2 %3",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "msg",
      check: "String",
    },
    {
      type: "input_value",
      name: "type",
      check: "Number",
      optional: true,
    },
  ],
  previousStatement: null,
  nextStatement: null,
  output: "Boolean",
  colour: 285,
  tooltip: "发送一个文本消息给玩家",
  helpUrl: "",
};

const Player_disconnect = {
  type: "Player_disconnect",
  message0: "disconnect %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "msg",
      check: "String",
      optional: true,
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "断开玩家连接",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_sendToast = {
  type: "Player_sendToast",
  message0: "sendToast %1 %2 %3",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "title",
      check: "String",
    },
    {
      type: "input_value",
      name: "message",
      check: "String",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "在屏幕上方显示消息(类似于成就完成)",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_runcmd = {
  type: "Player_runcmd",
  message0: "runcmd %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "cmd",
      check: "String",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "以某个玩家身份执行一条命令",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_talkAs = {
  type: "Player_talkAs",
  message0: "talkAs %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "text",
      check: "String",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "以某个玩家身份说话",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_talkAsTo = {
  type: "Player_talkAsTo",
  message0: "talkAs %1 %2 %3",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "field_variable",
      name: "target",
      variable: "player",
    },
    {
      type: "input_value",
      name: "text",
      check: "String",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "以某个玩家身份向某玩家说话",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_distanceToSqr = {
  type: "Player_distanceToSqr",
  message0: "distanceToSqr %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "pos",
      check: ["Entity", "Player", "IntPos", "FloatPos"], // 注意：这里的检查需要根据实际可用类型进行调整
    },
  ],
  output: "Number",
  colour: 285,
  tooltip: "获取实体到坐标的距离（平方）",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_distanceTo = {
  type: "Player_distanceTo",
  message0: "distanceTo %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "pos",
      check: ["Entity", "Player", "IntPos", "FloatPos"], // 同上
    },
  ],
  output: "Number",
  colour: 285,
  tooltip: "获取实体到坐标的距离",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_teleport = {
  type: "Player_teleport",
  message0: "teleport %1 %2 %3",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "pos",
      check: ["IntPos", "FloatPos"],
    },
    {
      type: "input_value",
      name: "rot",
      check: "DirectionAngle",
      optional: true,
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "传送玩家至指定位置",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_teleportTo = {
  type: "Player_teleportTo",
  message0: "teleport %1 %2 %3 %4 %5 %6",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "x",
      check: "Number",
    },
    {
      type: "input_value",
      name: "y",
      check: "Number",
    },
    {
      type: "input_value",
      name: "z",
      check: "Number",
    },
    {
      type: "input_value",
      name: "dimid",
      check: "Number",
    },
    {
      type: "input_value",
      name: "rot",
      check: "DirectionAngle",
      optional: true,
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "传送玩家至指定位置",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_kill = {
  type: "Player_kill",
  message0: "kill %1",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "杀死玩家",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_hurt = {
  type: "Player_hurt",
  message0: "hurt %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "damage",
      check: "Number",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "对玩家造成伤害",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_heal = {
  type: "Player_heal",
  message0: "heal %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "health",
      check: "Number",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "治疗玩家",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_setHealth = {
  type: "Player_setHealth",
  message0: "setHealth %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "health",
      check: "Number",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "设置玩家的生命值",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_setMaxHealth = {
  type: "Player_setMaxHealth",
  message0: "setMaxHealth %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "health",
      check: "Number",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "设置玩家最大生命值",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_setHungry = {
  type: "Player_setHungry",
  message0: "setHungry %1 %2 ",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "hunger",
      check: "Number",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "设置玩家饥饿值",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_setFire = {
  type: "Player_setFire",
  message0: "setFire %1 %2 %3",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "time",
      check: "Number",
    },
    {
      type: "input_value",
      name: "isEffect",
      check: "Boolean",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "使指定玩家着火",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_stopFire = {
  type: "Player_stopFire",
  message0: "stopFire %1",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "熄灭玩家",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_rename = {
  type: "Player_rename",
  message0: "rename to %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "newName",
      check: "String",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "重命名玩家",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_getBlockStandingOn = {
  type: "Player_getBlockStandingOn",
  message0: "getBlockStandingOn %1",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
  ],
  output: "Block",
  colour: 285,
  tooltip: "获取玩家当前站立所在的方块",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_getDevice = {
  type: "Player_getDevice",
  message0: "getDevice %1",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
  ],
  output: "Device",
  colour: 285,
  tooltip: "获取玩家对应的设备信息对象",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_getHand = {
  type: "Player_getHand",
  message0: "getHand %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "field_variable",
      name: "hand",
      variable: "handItem",
    },
  ],
  output: "Item",
  colour: 285,
  tooltip: "获取玩家主手中的物品对象",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_getOffHand = {
  type: "Player_getOffHand",
  message0: "getOffHand %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "field_variable",
      name: "offHand",
      variable: "offHandItem",
    },
  ],
  output: "Item",
  colour: 285,
  tooltip: "获取玩家副手中的物品对象",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_getInventory = {
  type: "Player_getInventory",
  message0: "getInventory %1",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
  ],
  output: "Container",
  colour: 285,
  tooltip: "获取玩家物品栏的容器对象",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_getArmor = {
  type: "Player_getArmor",
  message0: "getArmor %1",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
  ],
  output: "Container",
  colour: 285,
  tooltip: "获取玩家盔甲栏的容器对象",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_getEnderChest = {
  type: "Player_getEnderChest",
  message0: "getEnderChest %1",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
  ],
  output: "Container",
  colour: 285,
  tooltip: "获取玩家末影箱的容器对象",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_getRespawnPosition = {
  type: "Player_getRespawnPosition",
  message0: "getRespawnPosition %1",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
  ],
  output: "IntPos",
  colour: 285,
  tooltip: "获取玩家的重生坐标",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_giveItem = {
  type: "Player_giveItem",
  message0: "giveItem %1 %2 %3",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "item",
      check: "Item",
    },
    {
      type: "input_value",
      name: "amount",
      check: "Number",
      optional: true,
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "给予玩家一个物品",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_clearItem = {
  type: "Player_clearItem",
  message0: "clearItem %1 %2 %3",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "type",
      check: "String",
    },
    {
      type: "input_value",
      name: "amount",
      check: "Number",
    },
  ],
  output: "Number",
  colour: 285,
  tooltip: "清除玩家背包中所有指定类型的物品",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_refreshItems = {
  type: "Player_refreshItems",
  message0: "refreshItems %1",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "刷新玩家物品栏、盔甲栏",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_refreshChunks = {
  type: "Player_refreshChunks",
  message0: "refreshChunks %1",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "刷新玩家加载的所有区块",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_setPermLevel = {
  type: "Player_setPermLevel",
  message0: "setPermLevel %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "level",
      check: "Number",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "修改玩家操作权限",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_setGameMode = {
  type: "Player_setGameMode",
  message0: "setGameMode %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "mode",
      check: "Number",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "修改玩家游戏模式",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_setSidebar = {
  type: "Player_setSidebar",
  message0: "setSidebar %1 %2 %3 %4",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "title",
      check: "String",
    },
    {
      type: "input_value",
      name: "data",
      check: "Array",
    },
    {
      type: "input_value",
      name: "sortOrder",
      check: "Number",
      optional: true,
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "设置玩家自定义侧边栏",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_addLevel = {
  type: "Player_addLevel",
  message0: "addLevel %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "count",
      check: "Number",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "提高玩家经验等级",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_reduceLevel = {
  type: "Player_reduceLevel",
  message0: "reduceLevel %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "count",
      check: "Number",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "降低玩家经验等级",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_getLevel = {
  type: "Player_getLevel",
  message0: "getLevel %1",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
  ],
  output: "Number",
  colour: 285,
  tooltip: "获取玩家经验等级",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_setLevel = {
  type: "Player_setLevel",
  message0: "setLevel %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "count",
      check: "Number",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "设置玩家经验等级",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_resetLevel = {
  type: "Player_resetLevel",
  message0: "resetLevel %1",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "重置玩家经验",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_getCurrentExperience = {
  type: "Player_getCurrentExperience",
  message0: "getCurrentExperience %1",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
  ],
  output: "Number",
  colour: 285,
  tooltip: "获取玩家当前经验值",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_setCurrentExperience = {
  type: "Player_setCurrentExperience",
  message0: "setCurrentExperience %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "count",
      check: "Number",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "设置玩家当前经验值",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_getTotalExperience = {
  type: "Player_getTotalExperience",
  message0: "getTotalExperience %1",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
  ],
  output: "Number",
  colour: 285,
  tooltip: "获取玩家总经验值",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_setTotalExperience = {
  type: "Player_setTotalExperience",
  message0: "setTotalExperience %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "count",
      check: "Number",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "设置玩家总经验值",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_addExperience = {
  type: "Player_addExperience",
  message0: "addExperience %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "count",
      check: "Number",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "提高玩家经验值",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_reduceExperience = {
  type: "Player_reduceExperience",
  message0: "reduceExperience %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "count",
      check: "Number",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "降低玩家经验值",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_getXpNeededForNextLevel = {
  type: "Player_getXpNeededForNextLevel",
  message0: "getXpNeededForNextLevel %1",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
  ],
  output: "Number",
  colour: 285,
  tooltip: "获取玩家升级所需的经验值",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_transfer = {
  type: "Player_transfer",
  message0: "transfer %1 %2 %3",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "server",
      check: "String",
    },
    {
      type: "input_value",
      name: "port",
      check: "Number",
    },
  ],
  output: "Number",
  colour: 285,
  tooltip: "传送玩家至指定服务器",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_crash = {
  type: "Player_crash",
  message0: "crash %1",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "使玩家客户端崩溃",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_removeSidebar = {
  type: "Player_removeSidebar",
  message0: "removeSidebar %1",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "移除玩家自定义侧边栏",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_setBossBar = {
  type: "Player_setBossBar",
  message0: "setBossBar %1 %2 %3 %4 %5",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "uid",
      check: "Number",
    },
    {
      type: "input_value",
      name: "title",
      check: "String",
    },
    {
      type: "input_value",
      name: "percent",
      check: "Number",
    },
    {
      type: "input_value",
      name: "color",
      check: "Number",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "设置玩家看到的自定义Boss血条",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_removeBossBar = {
  type: "Player_removeBossBar",
  message0: "removeBossBar %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "uid",
      check: "Number",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "移除玩家的自定义的指定Boss血条",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_getNbt = {
  type: "Player_getNbt",
  message0: "getNbt %1",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
  ],
  output: "NbtCompound",
  colour: 285,
  tooltip: "获取在线玩家对应的NBT对象",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_setNbt = {
  type: "Player_setNbt",
  message0: "setNbt %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "nbt",
      check: "NbtCompound",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "写入在线玩家对应的NBT对象",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_addTag = {
  type: "Player_addTag",
  message0: "addTag %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "tag",
      check: "String",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "为玩家增加一个Tag",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_removeTag = {
  type: "Player_removeTag",
  message0: "removeTag %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "tag",
      check: "String",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "为玩家移除一个Tag",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_hasTag = {
  type: "Player_hasTag",
  message0: "hasTag %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "tag",
      check: "String",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "检查玩家是否拥有某个Tag",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_getAllTags = {
  type: "Player_getAllTags",
  message0: "getAllTags %1",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
  ],
  output: "Array",
  colour: 285,
  tooltip: "玩家所有的 tag 字符串列表",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_getAbilities = {
  type: "Player_getAbilities",
  message0: "getAbilities %1",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
  ],
  output: "Object",
  colour: 285,
  tooltip: "获取玩家的Abilities能力列表（来自玩家NBT）",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_getAttributes = {
  type: "Player_getAttributes",
  message0: "getAttributes %1",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
  ],
  output: "Array",
  colour: 285,
  tooltip: "获取玩家的Attributes属性列表（来自玩家NBT）",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_setAbsorption = {
  type: "Player_setAbsorption",
  message0: "setAbsorption %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "value",
      check: "Number",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "设置伤害吸收属性",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_setAttackDamage = {
  type: "Player_setAttackDamage",
  message0: "setAttackDamage %1 %2 ",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "value",
      check: "Number",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "设置攻击伤害属性",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_setMaxAttackDamage = {
  type: "Player_setMaxAttackDamage",
  message0: "setMaxAttackDamage %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "value",
      check: "Number",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "设置最大攻击伤害属性",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_isSprinting = {
  type: "Player_isSprinting",
  message0: "isSprinting %1",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "获取玩家疾跑状态",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_setSprinting = {
  type: "Player_setSprinting",
  message0: "setSprinting %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "sprinting",
      check: "Boolean",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "设置玩家疾跑状态",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_getEntityFromViewVector = {
  type: "Player_getEntityFromViewVector",
  message0: "getEntityFromViewVector %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "maxDistance",
      check: "Number",
    },
  ],
  output: "Entity",
  colour: 285,
  tooltip: "获取视线方向实体",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_getBlockFromViewVector = {
  type: "Player_getBlockFromViewVector",
  message0: "getBlockFromViewVector %1 %2 %3 %4 %5",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "includeLiquid",
      check: "Boolean",
    },
    {
      type: "input_value",
      name: "solidOnly",
      check: "Boolean",
    },
    {
      type: "input_value",
      name: "maxDistance",
      check: "Number",
    },
    {
      type: "input_value",
      name: "fullOnly",
      check: "Boolean",
    },
  ],
  output: "Block",
  colour: 285,
  tooltip: "获取视线方向方块",
  helpUrl: "",
  reviousStatement: null,
  nextStatement: null,
};

const Player_sendPacket = {
  type: "Player_sendPacket",
  message0: "sendPacket %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "packet",
      check: "Packet",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "向玩家发送数据包",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_getBiomeId = {
  type: "Player_getBiomeId",
  message0: "getBiomeId %1",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
  ],
  output: "Number",
  colour: 285,
  tooltip: "获取玩家所在群系ID",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_getBiomeName = {
  type: "Player_getBiomeName",
  message0: "getBiomeName %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
  ],
  output: "String",
  colour: 285,
  tooltip: "获取玩家所在群系名称",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_setAbility = {
  type: "Player_setAbility",
  message0: "setAbility %1 %2 %3",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "AbilityID",
      check: "Number",
    },
    {
      type: "input_value",
      name: "value",
      check: "Boolean",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "设置玩家Ability属性",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_isSimulatedPlayer = {
  type: "Player_isSimulatedPlayer",
  message0: "isSimulatedPlayer %1",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "判断是否为模拟玩家",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_setExtraData = {
  type: "Player_setExtraData",
  message0: "setExtraData %1 %2 %3",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "name",
      check: "String",
    },
    {
      type: "input_value",
      name: "data",
      check: "Any",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "储存玩家绑定数据",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_getExtraData = {
  type: "Player_getExtraData",
  message0: "getExtraData %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "name",
      check: "String",
    },
  ],
  output: "Any",
  colour: 285,
  tooltip: "获取玩家绑定数据",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_delExtraData = {
  type: "Player_delExtraData",
  message0: "delExtraData %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "name",
      check: "String",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "删除玩家绑定数据",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_getScore = {
  type: "Player_getScore",
  message0: "getScore %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "name",
      check: "String",
    },
  ],
  output: "Number",
  colour: 285,
  tooltip: "获取在线玩家计分项的分数",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_setScore = {
  type: "Player_setScore",
  message0: "setScore %1 %2 %3",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "name",
      check: "String",
    },
    {
      type: "input_value",
      name: "value",
      check: "Number",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "修改玩家计分项的分数",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_addScore = {
  type: "Player_addScore",
  message0: "addScore %1 %2 %3",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "name",
      check: "String",
    },
    {
      type: "input_value",
      name: "value",
      check: "Number",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "修改玩家计分项的分数（增加）",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_reduceScore = {
  type: "Player_reduceScore",
  message0: "reduceScore %1 %2 %3",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "name",
      check: "String",
    },
    {
      type: "input_value",
      name: "value",
      check: "Number",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "修改玩家计分项的分数（减少）",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_deleteScore = {
  type: "Player_deleteScore",
  message0: "deleteScore %1 %2 ",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "name",
      check: "String",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "玩家停止跟踪计分项",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

// 以下是发送表单相关的示例
const Player_sendModalForm = {
  type: "Player_sendModalForm",
  message0: "sendModalForm %1 %2 %3 %4 %5",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "title",
      check: "String",
    },
    {
      type: "input_value",
      name: "content",
      check: "String",
    },
    {
      type: "input_value",
      name: "confirmButton",
      check: "String",
    },
    {
      type: "input_value",
      name: "cancelButton",
      check: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 285,
  tooltip: "向玩家发送模式表单",
  helpUrl: "",
};

const Player_sendSimpleForm = {
  type: "Player_sendSimpleForm",
  message0: "sendSimpleForm %1 %2 %3",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "title",
      check: "String",
    },
    {
      type: "input_value",
      name: "content",
      check: "String",
    },
  ],
  message1: "buttons %1",
  args1: [
    {
      type: "input_value",
      name: "buttons",
      check: "Array",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 285,
  tooltip: "向玩家发送普通表单",
  helpUrl: "",
};

const Player_sendCustomForm = {
  type: "Player_sendCustomForm",
  message0: "sendCustomForm %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "json",
      check: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 285,
  tooltip: "向玩家发送自定义表单（Json格式）",
  helpUrl: "",
};

const Player_sendForm = {
  type: "Player_sendForm",
  message0: "sendForm %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "form",
      check: ["CustomForm", "SimpleForm"], // 假设Blockly支持这些类型
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 285,
  tooltip: "发送表单",
  helpUrl: "",
};

const Player_setScale = {
  type: "Player_setScale",
  message0: "setScale %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "scale",
      check: "Number",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "缩放玩家",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_setTitle = {
  type: "Player_setTitle",
  message0: "setTitle %1 %2 %3 %4 %5 %6",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "content",
      check: "String",
    },
    {
      type: "input_value",
      name: "type",
      check: "Number",
    },
    {
      type: "input_value",
      name: "fadeInTime",
      check: "Number",
    },
    {
      type: "input_value",
      name: "stayTime",
      check: "Number",
    },
    {
      type: "input_value",
      name: "fadeOutTime",
      check: "Number",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "设置玩家显示标题",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_distanceToPos = {
  type: "Player_distanceToPos",
  message0: "distanceToPos %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "pos",
      check: ["IntPos", "FloatPos"], // 假设Blockly支持这些类型
    },
  ],
  output: "Number",
  colour: 285,
  tooltip: "### 获取玩家到坐标的距离（已弃用）",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_addMoney = {
  type: "Player_addMoney",
  message0: "addMoney %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "value",
      check: "Number",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "增加玩家的存款",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_getAllEffects = {
  type: "Player_getAllEffects",
  message0: "getAllEffects %1",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
  ],
  output: "Array",
  colour: 285,
  tooltip: "获取玩家全部药水效果",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_addEffect = {
  type: "Player_addEffect",
  message0: "addEffect %1 %2 %3 %4 %5",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "id",
      check: "Number",
    },
    {
      type: "input_value",
      name: "tick",
      check: "Number",
    },
    {
      type: "input_value",
      name: "level",
      check: "Number",
    },
    {
      type: "input_value",
      name: "showParticles",
      check: "Boolean",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "为玩家添加一个药水效果",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_removeEffect = {
  type: "Player_removeEffect",
  message0: "removeEffect %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "id",
      check: "Number",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "为玩家移除一个药水效果",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_setFollowRange = {
  type: "Player_setFollowRange",
  message0: "setFollowRange %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "value",
      check: "Number",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "设置玩家的跟随范围",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_setKnockbackResistance = {
  type: "Player_setKnockbackResistance",
  message0: "setKnockbackResistance %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "value",
      check: "Number", // 接受0或1
      min: 0,
      max: 1,
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "设置玩家的击退抵抗属性",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_setLuck = {
  type: "Player_setLuck",
  message0: "setLuck %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "value",
      check: "Number",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "设置玩家的幸运属性",
  helpUrl: "",
  previousStatement: null,
  nextStatement: null,
};

const Player_setMovementSpeed = {
  type: "Player_setMovementSpeed",
  message0: "setMovementSpeed %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "value",
      check: "Number",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "设置玩家的移动速度属性",
  helpUrl: "",
};

const Player_setUnderwaterMovementSpeed = {
  type: "Player_setUnderwaterMovementSpeed",
  message0: "setUnderwaterMovementSpeed %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "value",
      check: "Number",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "设置玩家的水下移动速度属性",
  helpUrl: "",
};

const Player_setLavaMovementSpeed = {
  type: "Player_setLavaMovementSpeed",
  message0: "setLavaMovementSpeed %1 %2",
  args0: [
    {
      type: "input_value",
      name: "var",
      check: "String",
    },
    {
      type: "input_value",
      name: "value",
      check: "Number",
    },
  ],
  output: "Boolean",
  colour: 285,
  tooltip: "设置玩家在岩浆上的移动速度属性",
  helpUrl: "",
};

export const PlayerAPI_blocks =
  Blockly.common.createBlockDefinitionsFromJsonArray([
    Player_Name,
    Player_Pos,
    Player_BlockPos,
    Player_FeetPos,
    Player_LastDeathPos,
    Player_RealName,
    Player_Xuid,
    Player_Uuid,
    Player_PermLevel,
    Player_GameMode,
    Player_CanFly,
    Player_CanSleep,
    Player_CanBeSeenOnMap,
    Player_CanFreeze,
    Player_CanSeeDaylight,
    Player_CanShowNameTag,
    Player_CanStartSleepInBed,
    Player_CanPickupItems,
    Player_MaxHealth,
    Player_Health,
    Player_InAir,
    Player_InWater,
    Player_InLava,
    Player_InRain,
    Player_IP,
    Player_IsMoving,
    Player_IsSleeping,
    Player_IsFlying,
    Player_IsCreative,
    Player_IsDancing,
    Player_IsRiding,
    Player_IsSpectator,
    Player_IsSurvival,
    Player_IsGliding,
    Player_IsAdventure,
    Player_IsTrading,
    Player_IsOnHotBlock,
    Player_IsOnGround,
    Player_IsOnFire,
    Player_IsHungry,
    Player_IsTouchingDamageBlock,
    Player_IsTrusting,
    Player_IsHurt,
    Player_IsInsidePortal,
    Player_IsInvisible,
    Player_IsLoading,
    Player_LangCode,
    Player_UniqueId,
    Player_Direction,
    Player_Speed,
    Player_Sneaking,
    Player_IsSneaking,
    Player_InClouds,
    Player_InWorld,
    Player_InWaterOrRain,
    Player_InWall,
    Player_InSnow,
    Player_isOP,
    Player_Kick,
    Player_Tell,
    Player_sendText,
    Player_sendToast,
    Player_runcmd,
    Player_talkAs,
    Player_talkAsTo,
    Player_disconnect,
    Player_distanceTo,
    Player_distanceToSqr,
    Player_teleport,
    Player_teleportTo,
    Player_kill,
    Player_hurt,
    Player_heal,
    Player_setMaxHealth,
    Player_setHealth,
    Player_setHungry,
    Player_setFire,
    Player_stopFire,
    Player_rename,
    Player_getBlockStandingOn,
    Player_getDevice,
    Player_getHand,
    Player_getOffHand,
    Player_getInventory,
    Player_getArmor,
    Player_getEnderChest,
    Player_getRespawnPosition,
    Player_giveItem,
    Player_clearItem,
    Player_refreshItems,
    Player_refreshChunks,
    Player_setPermLevel,
    Player_setGameMode,
    Player_addLevel,
    Player_reduceLevel,
    Player_getLevel,
    Player_setLevel,
    Player_resetLevel,
    Player_setSidebar,
    Player_getCurrentExperience,
    Player_setCurrentExperience,
    Player_getTotalExperience,
    Player_setTotalExperience,
    Player_addExperience,
    Player_reduceExperience,
    Player_getXpNeededForNextLevel,
    Player_transfer,
    Player_crash,
    Player_setSidebar,
    Player_setBossBar,
    Player_removeBossBar,
    Player_getNbt,
    Player_setNbt,
    Player_addTag,
    Player_removeTag,
    Player_hasTag,
    Player_getAllTags,
    Player_getAbilities,
    Player_getAttributes,
    Player_setAbsorption,
    Player_setAttackDamage,
    Player_setMaxAttackDamage,
    Player_IsSpectator,
    Player_setSprinting,
    Player_getEntityFromViewVector,
    Player_getBlockFromViewVector,
    Player_sendPacket,
    Player_getBiomeId,
    Player_getBiomeName,
    Player_isSprinting,
    Player_removeSidebar,
    Player_setAbility,
    Player_isSimulatedPlayer,
    Player_setExtraData,
    Player_getExtraData,
    Player_getScore,
    Player_setScore,
    Player_delExtraData,
    Player_addScore,
    Player_reduceScore,
    Player_deleteScore,
    Player_sendModalForm,
    Player_sendSimpleForm,
    Player_sendCustomForm,
    Player_sendForm,
    Player_setScale,
    Player_setTitle,
    Player_distanceToPos,
    Player_addMoney,
    Player_getAllEffects,
    Player_addEffect,
    Player_removeEffect,
    Player_setFollowRange,
    Player_setKnockbackResistance,
    Player_setLuck,
    Player_setMovementSpeed,
    Player_setLavaMovementSpeed,
    Player_setUnderwaterMovementSpeed,
  ]);
