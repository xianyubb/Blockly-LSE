/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/*
This toolbox contains nearly every single built-in block that Blockly offers,
in addition to the custom block 'add_text' this sample app adds.
You probably don't need every single block, and should consider either rewriting
your toolbox from scratch, or carefully choosing whether you need each block
listed here.
*/

export const toolbox = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: 'Logic',
      categorystyle: 'logic_category',
      contents: [
        {
          kind: 'block',
          type: 'controls_if',
        },
        {
          kind: 'block',
          type: 'logic_compare',
        },
        {
          kind: 'block',
          type: 'logic_operation',
        },
        {
          kind: 'block',
          type: 'logic_negate',
        },
        {
          kind: 'block',
          type: 'logic_boolean',
        },
        {
          kind: 'block',
          type: 'logic_null',
        },
        {
          kind: 'block',
          type: 'logic_ternary',
        },
      ],
    },
    {
      kind: 'category',
      name: 'Loops',
      categorystyle: 'loop_category',
      contents: [
        {
          kind: 'block',
          type: 'controls_repeat_ext',
          inputs: {
            TIMES: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 10,
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'controls_whileUntil',
        },
        {
          kind: 'block',
          type: 'controls_for',
          inputs: {
            FROM: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1,
                },
              },
            },
            TO: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 10,
                },
              },
            },
            BY: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'controls_forEach',
        },
        {
          kind: 'block',
          type: 'controls_flow_statements',
        },
      ],
    },
    {
      kind: 'category',
      name: 'Math',
      categorystyle: 'math_category',
      contents: [
        {
          kind: 'block',
          type: 'math_number',
          fields: {
            NUM: 123,
          },
        },
        {
          kind: 'block',
          type: 'math_arithmetic',
          inputs: {
            A: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1,
                },
              },
            },
            B: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'math_single',
          inputs: {
            NUM: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 9,
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'math_trig',
          inputs: {
            NUM: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 45,
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'math_constant',
        },
        {
          kind: 'block',
          type: 'math_number_property',
          inputs: {
            NUMBER_TO_CHECK: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 0,
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'math_round',
          fields: {
            OP: 'ROUND',
          },
          inputs: {
            NUM: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 3.1,
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'math_on_list',
          fields: {
            OP: 'SUM',
          },
        },
        {
          kind: 'block',
          type: 'math_modulo',
          inputs: {
            DIVIDEND: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 64,
                },
              },
            },
            DIVISOR: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 10,
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'math_constrain',
          inputs: {
            VALUE: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 50,
                },
              },
            },
            LOW: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1,
                },
              },
            },
            HIGH: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 100,
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'math_random_int',
          inputs: {
            FROM: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1,
                },
              },
            },
            TO: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 100,
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'math_random_float',
        },
        {
          kind: 'block',
          type: 'math_atan2',
          inputs: {
            X: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1,
                },
              },
            },
            Y: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
      ],
    },
    {
      kind: 'category',
      name: 'Text',
      categorystyle: 'text_category',
      contents: [
        {
          kind: 'block',
          type: 'text',
        },
        {
          kind: 'block',
          type: 'text_join',
        },
        {
          kind: 'block',
          type: 'text_append',
          inputs: {
            TEXT: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: '',
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'text_length',
          inputs: {
            VALUE: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: 'abc',
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'text_isEmpty',
          inputs: {
            VALUE: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: '',
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'text_indexOf',
          inputs: {
            VALUE: {
              block: {
                type: 'variables_get',
              },
            },
            FIND: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: 'abc',
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'text_charAt',
          inputs: {
            VALUE: {
              block: {
                type: 'variables_get',
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'text_getSubstring',
          inputs: {
            STRING: {
              block: {
                type: 'variables_get',
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'text_changeCase',
          inputs: {
            TEXT: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: 'abc',
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'text_trim',
          inputs: {
            TEXT: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: 'abc',
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'text_count',
          inputs: {
            SUB: {
              shadow: {
                type: 'text',
              },
            },
            TEXT: {
              shadow: {
                type: 'text',
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'text_replace',
          inputs: {
            FROM: {
              shadow: {
                type: 'text',
              },
            },
            TO: {
              shadow: {
                type: 'text',
              },
            },
            TEXT: {
              shadow: {
                type: 'text',
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'text_reverse',
          inputs: {
            TEXT: {
              shadow: {
                type: 'text',
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'add_text',
          inputs: {
            TEXT: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: 'abc',
                },
              },
            },
          },
        },
      ],
    },
    {
      kind: 'category',
      name: 'Lists',
      categorystyle: 'list_category',
      contents: [
        {
          kind: 'block',
          type: 'lists_create_with',
        },
        {
          kind: 'block',
          type: 'lists_create_with',
        },
        {
          kind: 'block',
          type: 'lists_repeat',
          inputs: {
            NUM: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 5,
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'lists_length',
        },
        {
          kind: 'block',
          type: 'lists_isEmpty',
        },
        {
          kind: 'block',
          type: 'lists_indexOf',
          inputs: {
            VALUE: {
              block: {
                type: 'variables_get',
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'lists_getIndex',
          inputs: {
            VALUE: {
              block: {
                type: 'variables_get',
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'lists_setIndex',
          inputs: {
            LIST: {
              block: {
                type: 'variables_get',
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'lists_getSublist',
          inputs: {
            LIST: {
              block: {
                type: 'variables_get',
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'lists_split',
          inputs: {
            DELIM: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: ',',
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'lists_sort',
        },
        {
          kind: 'block',
          type: 'lists_reverse',
        },
      ],
    },
    {
      kind: 'sep',
    },
    {
      kind: 'category',
      name: 'Variables',
      categorystyle: 'variable_category',
      custom: 'VARIABLE',
    },
    {
      kind: 'category',
      name: 'Functions',
      categorystyle: 'procedure_category',
      custom: 'PROCEDURE',
    },
    {
      kind: 'sep'
    },
    {
      kind: 'category',
      name: 'LSE',
      categorystyle: "list_category",
      contents: [
        {
          kind: 'category',
          name: "GameAPI",
          categorystyle: "list_category",
          contents: [
            {
              kind: "category",
              name: "mc",
              categorystyle: "list_category",
              contents: [
                {
                  kind: "block",
                  type: "mc_getTime",
                  inputs: {
                    TimeID: {}
                  }
                },
                {
                  kind: "block",
                  type: "mc_setTime",
                  inputs: {
                    tick: {}
                  }
                },
                {
                  kind: "block",
                  type: "mc_getWeather",
                },
                {
                  kind: "block",
                  type: "mc_setWeather",
                  inputs: {
                    WeatherID: {}
                  }
                }
              ]
            },
            {
              kind: "category",
              name: "Player",
              categorystyle: "list_category",
              contents: [
                {
                  kind: "block",
                  type: "Player_Name",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_Pos",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_BlockPos",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_FeetPos",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_LastDeathPos",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_RealName",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_Xuid",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_Uuid",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_PermLevel",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_GameMode",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_CanFly",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_CanSleep",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_CanBeSeenOnMap",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_CanFreeze",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_CanSeeDaylight",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_CanShowNameTag",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_CanStartSleepInBed",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_CanPickupItems",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_MaxHealth",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_Health",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_InAir",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_InWater",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_InLava",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_InRain",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_InSnow",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_InWall",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_InWaterOrRain",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_InWorld",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_InClouds",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_IsSneaking",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_Speed",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_Direction",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_UniqueId",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_LangCode",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_IsLoading",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_IsInvisible",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_IsInsidePortal",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_IsHurt",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_IsTrusting",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_IsTouchingDamageBlock",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_IsHungry",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_IsOnFire",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_IsOnGround",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_IsOnHotBlock",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_IsTrading",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_IsAdventure",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_IsGliding",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_IsSurvival",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_IsSpectator",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_IsRiding",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_IsDancing",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_IsCreative",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_IsFlying",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_IsSleeping",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_IsMoving",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_IP",
                  inputs: {}
                },
                {
                  kind: "block",
                  type: "Player_isOP",
                  inputs: {}
                }
              ]
            }
          ]
        },
        {
          kind: "category",
          name: "EventAPI",
          categorystyle: "list_category",
          contents: [
            {
              kind: "block",
              name: "EventAPI",
              type: "Event",
              inputs: {
                event: {},
                callback: {}
              }
            },
            {
              kind: "category",
              name: "PlayerEvent",
              categorystyle: "list_category",
              contents: [
                {
                  kind: "block",
                  type: "onPreJoin",
                  inputs: {
                    player: {}
                  }
                }],
            }
          ]
        },
      ]
    },
  ],
};
