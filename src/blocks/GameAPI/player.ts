import * as Blockly from 'blockly/core';

const Player_Name = {
    "type": "Player_Name",
    "message0": "name",
    "args0": [],
    "colour": 120,
    "output": "String"
}, Player_Pos = {
    "type": "Player_Pos",
    "message0": "pos",
    "args0": [],
    "colour": 120,
    "output": "FloatPos",
}, Player_BlockPos = {
    "type": "Player_BlockPos",
    "message0": "blockPos",
    "args0": [],
    "colour": 120,
    "output": "IntPos",
}, Player_FeetPos = {
    "type": "Player_FeetPos",
    "message0": "feetPos",
    "args0": [],
    "colour": 120,
    "output": "FloatPos",
}, Player_LastDeathPos = {
    "type": "Player_LastDeathPos",
    "message0": "lastDeathPos",
    "args0": [],
    "colour": 120,
    "output": "IntPos",
}, Player_RealName = {
    "type": "Player_RealName",
    "message0": "realName",
    "args0": [],
    "colour": 120,
    "output": "String",
}, Player_Xuid = {
    "type": "Player_Xuid",
    "message0": "xuid",
    "args0": [],
    "colour": 120,
    "output": "String",
}, Player_Uuid = {
    "type": "Player_Uuid",
    "message0": "uuid",
    "args0": [],
    "colour": 120,
    "output": "String",
}, Player_PermLevel = {
    "type": "Player_PermLevel",
    "message0": "permLevel",
    "args0": [],
    "colour": 120,
    "output": "Number",
}, Player_GameMode = {
    "type": "Player_GameMode",
    "message0": "gameMode",
    "args0": [],
    "colour": 120,
    "output": "Number",
}, Player_CanFly = {
    "type": "Player_CanFly",
    "message0": "canFly",
    "args0": [],
    "colour": 120,
    "output": "Boolean",
}, Player_CanSleep = {
    "type": "Player_CanSleep",
    "message0": "canSleep",
    "args0": [],
    "colour": 120,
    "output": "Boolean",
}, Player_CanBeSeenOnMap = {
    "type": "Player_CanBeSeenOnMap",
    "message0": "canBeSeenOnMap",
    "args0": [],
    "colour": 120,
    "output": "Boolean"
}, Player_CanFreeze = {
    "type": "Player_CanFreeze",
    "message0": "canFreeze",
    "args0": [],
    "colour": 120,
    "output": "Boolean",
}, Player_CanSeeDaylight = {
    "type": "Player_CanSeeDaylight",
    "message0": "canSeeDaylight",
    "args0": [],
    "colour": 120,
    "output": "Boolean",
}, Player_CanShowNameTag = {
    "type": "Player_CanShowNameTag",
    "message0": "canShowNameTag",
    "args0": [],
    "colour": 120,
    "output": "Boolean"
}, Player_CanStartSleepInBed = {
    "type": "Player_CanStartSleepInBed",
    "message0": "canStartSleepInBed",
    "args0": [],
    "colour": 120,
    "output": "Boolean"
}, Player_CanPickupItems = {
    "type": "Player_CanPickupItems",
    "message0": "canPickupItems",
    "args0": [],
    "colour": 120,
    "output": "Boolean"
}, Player_MaxHealth = {
    "type": "Player_MaxHealth",
    "message0": "maxHealth",
    "args0": [],
    "colour": 120,
    "output": "Number"
}, Player_Health = {
    "type": "Player_Health",
    "message0": "health",
    "args0": [],
    "colour": 120,
    "output": "Number"
}, Player_InAir = {
    "type": "Player_InAir",
    "message0": "inAir",
    "args0": [],
    "colour": 120,
    "output": "Boolean",
}, Player_InWater = {
    "type": "Player_InWater",
    "message0": "inWater",
    "args0": [],
    "colour": 120,
    "output": "Boolean",
}, Player_InLava = {
    "type": "Player_InLava",
    "message0": "inLava",
    "args0": [],
    "colour": 120,
    "output": "Boolean",
}, Player_InRain = {
    "type": "Player_InRain",
    "message0": "inRain",
    "args0": [],
    "colour": 120,
    "output": "Boolean",
}, Player_InSnow = {
    "type": "Player_InSnow",
    "message0": "inSnow",
    "args0": [],
    "colour": 120,
    "output": "Boolean"
}, Player_InWall = {
    "type": "Player_InWall",
    "message0": "inWall",
    "args0": [],
    "colour": 120,
    "output": "Boolean"
}, Player_InWaterOrRain = {
    "type": "Player_InWaterOrRain",
    "message0": "inWaterOrRain",
    "args0": [],
    "colour": 120,
    "output": "Boolean"
}, Player_InWorld = {
    "type": "Player_InWorld",
    "message0": "inWorld",
    "args0": [],
    "colour": 120,
    "output": "Boolean"
}, Player_InClouds = {
    "type": "Player_InClouds",
    "message0": "inClouds",
    "args0": [],
    "colour": 120,
    "output": "Boolean"
}, Player_IsSneaking = {
    "type": "Player_IsSneaking",
    "message0": "isSneaking",
    "args0": [],
    "colour": 120,
    "output": "Boolean"
}, Player_Sneaking = {
    "type": "Player_Sneaking",
    "message0": "sneaking",
    "args0": [],
    "colour": 120,
    "output": "Boolean",
    "deprecated": true
}, Player_Speed = {
    "type": "Player_Speed",
    "message0": "speed",
    "args0": [],
    "colour": 120,
    "output": "Number"
}, Player_Direction = {
    "type": "Player_Direction",
    "message0": "direction",
    "args0": [],
    "colour": 120,
    "output": "DirectionAngle"
}, Player_UniqueId = {
    "type": "Player_UniqueId",
    "message0": "uniqueId",
    "args0": [],
    "colour": 120,
    "output": "String"
}, Player_LangCode = {
    "type": "Player_LangCode",
    "message0": "langCode",
    "args0": [],
    "colour": 120,
    "output": "String"
}, Player_IsLoading = {
    "type": "Player_IsLoading",
    "message0": "isLoading",
    "args0": [],
    "colour": 120,
    "output": "Boolean"
}, Player_IsInvisible = {
    "type": "Player_IsInvisible",
    "message0": "isInvisible",
    "args0": [],
    "colour": 120,
    "output": "Boolean"
}, Player_IsInsidePortal = {
    "type": "Player_IsInsidePortal",
    "message0": "isInsidePortal",
    "args0": [],
    "colour": 120,
    "output": "Boolean"
}, Player_IsHurt = {
    "type": "Player_IsHurt",
    "message0": "isHurt",
    "args0": [],
    "colour": 120,
    "output": "Boolean"
}, Player_IsTrusting = {
    "type": "Player_IsTrusting",
    "message0": "isTrusting",
    "args0": [],
    "colour": 120,
    "output": "Boolean"
}, Player_IsTouchingDamageBlock = {
    "type": "Player_IsTouchingDamageBlock",
    "message0": "isTouchingDamageBlock",
    "args0": [],
    "colour": 120,
    "output": "Boolean"
}, Player_IsHungry = {
    "type": "Player_IsHungry",
    "message0": "isHungry",
    "args0": [],
    "colour": 120,
    "output": "Boolean"
}, Player_IsOnFire = {
    "type": "Player_IsOnFire",
    "message0": "isOnFire",
    "args0": [],
    "colour": 120,
    "output": "Boolean"
}, Player_IsOnGround = {
    "type": "Player_IsOnGround",
    "message0": "isOnGround",
    "args0": [],
    "colour": 120,
    "output": "Boolean"
}, Player_IsOnHotBlock = {
    "type": "Player_IsOnHotBlock",
    "message0": "isOnHotBlock",
    "args0": [],
    "colour": 120,
    "output": "Boolean"
}, Player_IsTrading = {
    "type": "Player_IsTrading",
    "message0": "isTrading",
    "args0": [],
    "colour": 120,
    "output": "Boolean"
}, Player_IsAdventure = {
    "type": "Player_IsAdventure",
    "message0": "isAdventure",
    "args0": [],
    "colour": 120,
    "output": "Boolean"
}, Player_IsGliding = {
    "type": "Player_IsGliding",
    "message0": "isGliding",
    "args0": [],
    "colour": 120,
    "output": "Boolean"
}, Player_IsSurvival = {
    "type": "Player_IsSurvival",
    "message0": "isSurvival",
    "args0": [],
    "colour": 120,
    "output": "Boolean"
}, Player_IsSpectator = {
    "type": "Player_IsSpectator",
    "message0": "isSpectator",
    "args0": [],
    "colour": 120,
    "output": "Boolean"
}, Player_IsRiding = {
    "type": "Player_IsRiding",
    "message0": "isRiding",
    "args0": [],
    "colour": 120,
    "output": "Boolean"
}, Player_IsDancing = {
    "type": "Player_IsDancing",
    "message0": "isDancing",
    "args0": [],
    "colour": 120,
    "output": "Boolean"
}, Player_IsCreative = {
    "type": "Player_IsCreative",
    "message0": "isCreative",
    "args0": [],
    "colour": 120,
    "output": "Boolean"
}, Player_IsFlying = {
    "type": "Player_IsFlying",
    "message0": "isFlying",
    "args0": [],
    "colour": 120,
    "output": "Boolean"
}, Player_IsSleeping = {
    "type": "Player_IsSleeping",
    "message0": "isSleeping",
    "args0": [],
    "colour": 120,
    "output": "Boolean"
}, Player_IsMoving = {
    "type": "Player_IsMoving",
    "message0": "isMoving",
    "args0": [],
    "colour": 120,
    "output": "Boolean"
}, Player_IP = {
    "type": "Player_IP",
    "message0": "ip",
    "args0": [],
    "colour": 120,
    "output": "String",
    "deprecated": true
};

const Player_isOP = {
    "type": "Player_isOP",
    "message0": "isOP",
    "args0": [],
    "colour": 285,
    "output": "Boolean"
};



export const PlayerAPI_blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
    Player_Name, Player_Pos, Player_BlockPos, Player_FeetPos, Player_LastDeathPos, Player_RealName, Player_Xuid, Player_Uuid, Player_PermLevel, Player_GameMode, Player_CanFly,
    Player_CanSleep, Player_CanBeSeenOnMap, Player_CanFreeze, Player_CanSeeDaylight, Player_CanShowNameTag, Player_CanStartSleepInBed, Player_CanPickupItems, Player_MaxHealth,
    Player_Health, Player_InAir, Player_InWater, Player_InLava, Player_InRain, Player_IP, Player_IsMoving, Player_IsSleeping, Player_IsFlying, Player_IsCreative,
    Player_IsDancing, Player_IsRiding, Player_IsSpectator, Player_IsSurvival, Player_IsGliding, Player_IsAdventure, Player_IsTrading, Player_IsOnHotBlock,
    Player_IsOnGround, Player_IsOnFire, Player_IsHungry, Player_IsTouchingDamageBlock, Player_IsTrusting, Player_IsHurt, Player_IsInsidePortal, Player_IsInvisible,
    Player_IsLoading, Player_LangCode, Player_UniqueId, Player_Direction, Player_Speed, Player_Sneaking, Player_IsSneaking, Player_InClouds, Player_InWorld, Player_InWaterOrRain,
    Player_InWall, Player_InSnow, Player_isOP
]);
