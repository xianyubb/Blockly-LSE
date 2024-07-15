/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { Order } from "blockly/javascript";
import * as Blockly from "blockly/core";

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const forBlock = Object.create(null);

forBlock["mc_getTime"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const text = generator.valueToCode(block, "TimeID", Order.NONE) || 0;
  // Generate the function call for this block.
  const code = `mc.getTime(${text})`;
  return [code, Order.NONE];
};

forBlock["mc_setTime"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const text = generator.valueToCode(block, "tick", Order.NONE) || 114514;
  // Generate the function call for this block.
  const code = `mc.setTime(${text})`;
  return [code, Order.NONE];
};

forBlock["mc_getWeather"] = function () {
  // Generate the function call for this block.
  const code = `mc.getWeather()`;
  return [code, Order.NONE];
};

forBlock["mc_setWeather"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const text = generator.valueToCode(block, "WeatherID", Order.NONE) || 0;
  // Generate the function call for this block.
  const code = `mc.setWeather(${text})`;
  return [code, Order.NONE];
};

// Event
forBlock["Event"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const text = generator.valueToCode(block, "event", Order.NONE) || "onJoin";
  const callback =
    generator.valueToCode(block, "callback", Order.NONE) || function () {};
  const code = `mc.listen(${text}, ${callback})`;
  return [code, Order.NONE];
};

// PlayerEvent
forBlock["onPreJoin"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const text = generator.statementToCode(block, "player");
  const callback = `function (player) {
  ${text} }`;
  const code = `${callback}`;
  return [code, Order.NONE];
};

// PlayerAPI
forBlock["Player_Name"] = function () {
  const code = `player.name`;
  return [code, Order.NONE];
};

forBlock["Player_Pos"] = function () {
  const code = `player.pos`;
  return [code, Order.NONE];
};

forBlock["Player_BlockPos"] = function () {
  const code = `player.blockPos`;
  return [code, Order.NONE];
};

forBlock["Player_FeetPos"] = function () {
  const code = `player.feetPos`;
  return [code, Order.NONE];
};

forBlock["Player_LastDeathPos"] = function () {
  const code = `player.lastDeathPos`;
  return [code, Order.NONE];
};

forBlock["Player_RealName"] = function () {
  const code = `player.realName`;
  return [code, Order.NONE];
};

forBlock["Player_Xuid"] = function () {
  const code = `player.xuid`;
  return [code, Order.NONE];
};

forBlock["Player_Uuid"] = function () {
  const code = `player.uuid`;
  return [code, Order.NONE];
};

forBlock["Player_PermLevel"] = function () {
  const code = `player.permLevel`;
  return [code, Order.NONE];
};

forBlock["Player_GameMode"] = function () {
  const code = `player.gameMode`;
  return [code, Order.NONE];
};

forBlock["Player_MaxHealth"] = function () {
  const code = `player.maxHealth`;
  return [code, Order.NONE];
};

forBlock["Player_Health"] = function () {
  const code = `player.health`;
  return [code, Order.NONE];
};

// ... 以下为数字类型的属性，输出为Number
forBlock["Player_Speed"] = function () {
  const code = `player.speed`;
  return [code, Order.NONE];
};

forBlock["Player_Sneaking"] = function () {
  const code = `player.sneaking`; // @deprecated
  return [code, Order.NONE];
};

forBlock["Player_CanSleep"] = function () {
  const code = `player.canSleep`;
  return [code, Order.NONE];
};

forBlock["Player_CanBeSeenOnMap"] = function () {
  const code = `player.canBeSeenOnMap`;
  return [code, Order.NONE];
};

forBlock["Player_CanFreeze"] = function () {
  const code = `player.canFreeze`;
  return [code, Order.NONE];
};

forBlock["Player_CanSeeDaylight"] = function () {
  const code = `player.canSeeDaylight`;
  return [code, Order.NONE];
};

forBlock["Player_CanShowNameTag"] = function () {
  const code = `player.canShowNameTag`;
  return [code, Order.NONE];
};

forBlock["Player_CanStartSleepInBed"] = function () {
  const code = `player.canStartSleepInBed`;
  return [code, Order.NONE];
};

forBlock["Player_CanPickupItems"] = function () {
  const code = `player.canPickupItems`;
  return [code, Order.NONE];
};

forBlock["Player_InAir"] = function () {
  const code = `player.inAir`;
  return [code, Order.NONE];
};

forBlock["Player_InWater"] = function () {
  const code = `player.inWater`;
  return [code, Order.NONE];
};

forBlock["Player_InLava"] = function () {
  const code = `player.inLava`;
  return [code, Order.NONE];
};

forBlock["Player_InRain"] = function () {
  const code = `player.inRain`;
  return [code, Order.NONE];
};

forBlock["Player_InSnow"] = function () {
  const code = `player.inSnow`;
  return [code, Order.NONE];
};

forBlock["Player_InWall"] = function () {
  const code = `player.inWall`;
  return [code, Order.NONE];
};

forBlock["Player_InWaterOrRain"] = function () {
  const code = `player.inWaterOrRain`;
  return [code, Order.NONE];
};

forBlock["Player_InWorld"] = function () {
  const code = `player.inWorld`;
  return [code, Order.NONE];
};

forBlock["Player_InClouds"] = function () {
  const code = `player.inClouds`;
  return [code, Order.NONE];
};

forBlock["Player_IsSneaking"] = function () {
  const code = `player.isSneaking`;
  return [code, Order.NONE];
};

forBlock["Player_Direction"] = function () {
  const code = `player.direction`; // Assuming 'DirectionAngle' is represented as a string or similar in this context
  return [code, Order.NONE];
};

forBlock["Player_UniqueId"] = function () {
  const code = `player.uniqueId`;
  return [code, Order.NONE];
};

forBlock["Player_LangCode"] = function () {
  const code = `player.langCode`;
  return [code, Order.NONE];
};

forBlock["Player_IsLoading"] = function () {
  const code = `player.isLoading`;
  return [code, Order.NONE];
};

forBlock["Player_IsInvisible"] = function () {
  const code = `player.isInvisible`;
  return [code, Order.NONE];
};

forBlock["Player_IsInsidePortal"] = function () {
  const code = `player.isInsidePortal`;
  return [code, Order.NONE];
};

forBlock["Player_IsHurt"] = function () {
  const code = `player.isHurt`;
  return [code, Order.NONE];
};

forBlock["Player_IsTrusting"] = function () {
  const code = `player.isTrusting`;
  return [code, Order.NONE];
};

forBlock["Player_IsTouchingDamageBlock"] = function () {
  const code = `player.isTouchingDamageBlock`;
  return [code, Order.NONE];
};

forBlock["Player_IsHungry"] = function () {
  const code = `player.isHungry`;
  return [code, Order.NONE];
};

forBlock["Player_IsOnFire"] = function () {
  const code = `player.isOnFire`;
  return [code, Order.NONE];
};

forBlock["Player_IsOnGround"] = function () {
  const code = `player.onGround`; // Assuming 'isOnGround' is the correct property name
  return [code, Order.NONE];
};

forBlock["Player_IsOnHotBlock"] = function () {
  const code = `player.isOnHotBlock`;
  return [code, Order.NONE];
};

forBlock["Player_IsTrading"] = function () {
  const code = `player.isTrading`;
  return [code, Order.NONE];
};

forBlock["Player_IsAdventure"] = function () {
  const code = `player.isAdventure`;
  return [code, Order.NONE];
};

forBlock["Player_IsGliding"] = function () {
  const code = `player.isGliding`;
  return [code, Order.NONE];
};

forBlock["Player_IsSurvival"] = function () {
  const code = `player.isSurvival`;
  return [code, Order.NONE];
};

forBlock["Player_IsSpectator"] = function () {
  const code = `player.isSpectator`;
  return [code, Order.NONE];
};

forBlock["Player_IsRiding"] = function () {
  const code = `player.isRiding`;
  return [code, Order.NONE];
};

forBlock["Player_IsDancing"] = function () {
  const code = `player.isDancing`;
  return [code, Order.NONE];
};

forBlock["Player_IsCreative"] = function () {
  const code = `player.isCreative`;
  return [code, Order.NONE];
};

forBlock["Player_IsFlying"] = function () {
  const code = `player.isFlying`;
  return [code, Order.NONE];
};

forBlock["Player_IsSleeping"] = function () {
  const code = `player.isSleeping`;
  return [code, Order.NONE];
};

forBlock["Player_IsMoving"] = function () {
  const code = `player.isMoving`;
  return [code, Order.NONE];
};

forBlock["Player_IP"] = function () {
  const code = `player.ip\n`; // Assuming 'ip' is the correct property name and it's not deprecated in this context
  return [code, Order.NONE];
};

forBlock["Player_isOP"] = function (
  block: any,
  CodeGenerator: Blockly.CodeGenerator
) {
  const vars = CodeGenerator.valueToCode(block, "var", Order.NONE) || "player";
  const code1 = `${vars}.isOP() \n`.replace("'", "").replace("'", "");
  const code2 = `${vars}.isOP()`.replace("'", "").replace("'", "");
  // if (block.dragStrategy.block.parentBlock_.type != null) console.log(block.dragStrategy.block.parentBlock_.type);

  if (block.dragStrategy.block.parentBlock_ == null) return code2;
  // if (block.dragStrategy.block.parentBlock_.type === "procedures_defnoreturn") return code;
  // else
  if (block.dragStrategy.block.parentBlock_.type === "variables_set")
    return [code2, Order.NONE];
  else return code1;
};
