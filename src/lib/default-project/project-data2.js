import {defineMessages} from 'react-intl';
import sharedMessages from '../shared-messages';

let messages = defineMessages({
    meow: {
        defaultMessage: 'Meow',
        description: 'Name for the meow sound',
        id: 'gui.defaultProject.meow'
    },
    variable: {
        defaultMessage: 'my variable',
        description: 'Name for the default variable',
        id: 'gui.defaultProject.variable'
    }
});

messages = {...messages, ...sharedMessages};

// use the default message if a translation function is not passed
const defaultTranslator = msgObj => msgObj.defaultMessage;

/**
 * Generate a localized version of the default project
 * @param {function} translateFunction a function to use for translating the default names
 * @return {object} the project data json for the default project
 */
const projectData = translateFunction => {
    const translator = translateFunction || defaultTranslator;
    return ({
        "targets": [
            {
                "isStage": true,
                "name": "Stage",
                "variables": {},
                "lists": {
                    "_=#Gejsh60)s[ui89,^%": [
                        "測定値",
                        []
                    ],
                    "3WNEea~yY/B[l#u5L[;*": [
                        "判定",
                        []
                    ]
                },
                "broadcasts": {
                    "OtY)I@9bA@qCCrI%uhb[": "zuban",
                    "Hw%^=btylCHTYm{j_Bc/": "test_finish",
                    "0[%ROq{PwCS6EqEEny)y": "measure_range",
                    "|NkVF~A-auYQF;rf.f`q": "test_num",
                    "m:E{p~yJON*EDvzXE#/=": "test_list",
                    "*;Ux[[9v`aIWHN%Sb25u": "clock_check",
                    ".hPeE|HLUqIp1cIr9m{D": "test_start",
                    "ERr^5y#FezBPsR`y9rZ3": "key_push",
                    "E,NA4t7$,P-X6UoiS,g,": "test_result",
                    "d?uu6S.Tpao+c5v0K~P+": "connection_off",
                    "**oTu1WO[~do-)cOCpB@": "connection_change",
                    "y$V^8G0+?SDWB[1zW-^Q": "dummy_off",
                    "N$_X?^!0#?7awcsB^QzF": "resistance",
                    "Jn?fFo.M2KHonHD{jc}a": "resistance_k",
                    "Wy(Oah!xP)ab4)`9s%q4": "voltage_m",
                    "Yk2iT45EWLVwMgy#6b;9": "voltage",
                    "Zx2zPo%Ops4s9~O35.pu": "ampare_m",
                    "]zL*oSF3yc%+XhQ7nM)3": "pt_100",
                    "R9X|aU=^@.qftdN^gfCW": "k_thermo"
                },
                "blocks": {},
                "comments": {},
                "currentCostume": 0,
                "costumes": [
                    {
                        "assetId": "cd21514d0531fdffb22204e0ec5ed84a",
                        "name": "背景1",
                        "md5ext": "cd21514d0531fdffb22204e0ec5ed84a.svg",
                        "dataFormat": "svg",
                        "rotationCenterX": 240,
                        "rotationCenterY": 180
                    }
                ],
                "sounds": [
                    {
                        "assetId": "83a9787d4cb6f3b7632b4ddfebf74367",
                        "name": "ポップ",
                        "dataFormat": "wav",
                        "format": "",
                        "rate": 48000,
                        "sampleCount": 1123,
                        "md5ext": "83a9787d4cb6f3b7632b4ddfebf74367.wav"
                    }
                ],
                "volume": 100,
                "layerOrder": 0,
                "tempo": 60,
                "videoTransparency": 50,
                "videoState": "on",
                "textToSpeechLanguage": null
            },
            {
                "isStage": false,
                "name": "PC",
                "variables": {},
                "lists": {},
                "broadcasts": {},
                "blocks": {},
                "comments": {},
                "currentCostume": 0,
                "costumes": [
                    {
                        "assetId": "f182965f3392170753811a1594f7242e",
                        "name": "29-コスチューム1",
                        "bitmapResolution": 1,
                        "md5ext": "f182965f3392170753811a1594f7242e.svg",
                        "dataFormat": "svg",
                        "rotationCenterX": 145,
                        "rotationCenterY": 106
                    }
                ],
                "sounds": [],
                "volume": 100,
                "layerOrder": 1,
                "visible": true,
                "x": 16.858921161825748,
                "y": 107.46408839779005,
                "size": 50,
                "direction": 90,
                "draggable": true,
                "rotationStyle": "all around"
            },
            {
                "isStage": false,
                "name": "board",
                "variables": {},
                "lists": {},
                "broadcasts": {},
                "blocks": {
                    "7exvb$}T?XCAmT4Y74kl": {
                        "opcode": "event_whenbroadcastreceived",
                        "next": "F@`PI7lZdslMDSJ^!Fht",
                        "parent": null,
                        "inputs": {},
                        "fields": {
                            "BROADCAST_OPTION": [
                                "zuban",
                                "OtY)I@9bA@qCCrI%uhb["
                            ]
                        },
                        "shadow": false,
                        "topLevel": true,
                        "x": 62,
                        "y": 239
                    },
                    "F@`PI7lZdslMDSJ^!Fht": {
                        "opcode": "looks_say",
                        "next": null,
                        "parent": "7exvb$}T?XCAmT4Y74kl",
                        "inputs": {
                            "MESSAGE": [
                                1,
                                [
                                    10,
                                    "図番"
                                ]
                            ]
                        },
                        "fields": {},
                        "shadow": false,
                        "topLevel": false
                    },
                    "s[LAX0sC@GS!a.o.hS/O": {
                        "opcode": "event_whenbroadcastreceived",
                        "next": "dpBk.=MWb_WL}xK~R[u[",
                        "parent": null,
                        "inputs": {},
                        "fields": {
                            "BROADCAST_OPTION": [
                                "test_finish",
                                "Hw%^=btylCHTYm{j_Bc/"
                            ]
                        },
                        "shadow": false,
                        "topLevel": true,
                        "x": 349,
                        "y": 241
                    },
                    "dpBk.=MWb_WL}xK~R[u[": {
                        "opcode": "looks_say",
                        "next": null,
                        "parent": "s[LAX0sC@GS!a.o.hS/O",
                        "inputs": {
                            "MESSAGE": [
                                1,
                                [
                                    10,
                                    "テスト終了"
                                ]
                            ]
                        },
                        "fields": {},
                        "shadow": false,
                        "topLevel": false
                    },
                    "FGlv]xdn~b=FU(6pR!sm": {
                        "opcode": "event_whenbroadcastreceived",
                        "next": "C!,.V[~@t#2U(}#|gN~[",
                        "parent": null,
                        "inputs": {},
                        "fields": {
                            "BROADCAST_OPTION": [
                                "measure_range",
                                "0[%ROq{PwCS6EqEEny)y"
                            ]
                        },
                        "shadow": false,
                        "topLevel": true,
                        "x": 677,
                        "y": 245
                    },
                    "C!,.V[~@t#2U(}#|gN~[": {
                        "opcode": "looks_say",
                        "next": null,
                        "parent": "FGlv]xdn~b=FU(6pR!sm",
                        "inputs": {
                            "MESSAGE": [
                                1,
                                [
                                    10,
                                    "測定値確認"
                                ]
                            ]
                        },
                        "fields": {},
                        "shadow": false,
                        "topLevel": false
                    },
                    "dIp84S(T?_ZH,=hwv,yX": {
                        "opcode": "event_whenbroadcastreceived",
                        "next": "o-+Y-If?^e~vyP0^{1bU",
                        "parent": null,
                        "inputs": {},
                        "fields": {
                            "BROADCAST_OPTION": [
                                "test_num",
                                "|NkVF~A-auYQF;rf.f`q"
                            ]
                        },
                        "shadow": false,
                        "topLevel": true,
                        "x": 1031,
                        "y": 245
                    },
                    "o-+Y-If?^e~vyP0^{1bU": {
                        "opcode": "looks_say",
                        "next": null,
                        "parent": "dIp84S(T?_ZH,=hwv,yX",
                        "inputs": {
                            "MESSAGE": [
                                1,
                                [
                                    10,
                                    "テスト番号"
                                ]
                            ]
                        },
                        "fields": {},
                        "shadow": false,
                        "topLevel": false
                    },
                    "58#BtX1pZ2I,XyTdTXst": {
                        "opcode": "event_whenbroadcastreceived",
                        "next": "+Ry`i/YYrS)R3;2}wnC@",
                        "parent": null,
                        "inputs": {},
                        "fields": {
                            "BROADCAST_OPTION": [
                                "test_list",
                                "m:E{p~yJON*EDvzXE#/="
                            ]
                        },
                        "shadow": false,
                        "topLevel": true,
                        "x": 59,
                        "y": 438
                    },
                    "+Ry`i/YYrS)R3;2}wnC@": {
                        "opcode": "looks_say",
                        "next": null,
                        "parent": "58#BtX1pZ2I,XyTdTXst",
                        "inputs": {
                            "MESSAGE": [
                                1,
                                [
                                    10,
                                    "テスト項目"
                                ]
                            ]
                        },
                        "fields": {},
                        "shadow": false,
                        "topLevel": false
                    },
                    "4nZ)+I[-nSqo2FD8#Q2Y": {
                        "opcode": "event_whenbroadcastreceived",
                        "next": "ZSx.vLc]QNap7)hueMd)",
                        "parent": null,
                        "inputs": {},
                        "fields": {
                            "BROADCAST_OPTION": [
                                "clock_check",
                                "*;Ux[[9v`aIWHN%Sb25u"
                            ]
                        },
                        "shadow": false,
                        "topLevel": true,
                        "x": 349,
                        "y": 437
                    },
                    "ZSx.vLc]QNap7)hueMd)": {
                        "opcode": "looks_say",
                        "next": null,
                        "parent": "4nZ)+I[-nSqo2FD8#Q2Y",
                        "inputs": {
                            "MESSAGE": [
                                1,
                                [
                                    10,
                                    "時計合わせ"
                                ]
                            ]
                        },
                        "fields": {},
                        "shadow": false,
                        "topLevel": false
                    },
                    "=mC%ov3:{sm!,GWJX8Il": {
                        "opcode": "event_whenbroadcastreceived",
                        "next": "*nH+_IJ9mEij_TqwEis7",
                        "parent": null,
                        "inputs": {},
                        "fields": {
                            "BROADCAST_OPTION": [
                                "test_start",
                                ".hPeE|HLUqIp1cIr9m{D"
                            ]
                        },
                        "shadow": false,
                        "topLevel": true,
                        "x": 679,
                        "y": 437
                    },
                    "*nH+_IJ9mEij_TqwEis7": {
                        "opcode": "looks_say",
                        "next": null,
                        "parent": "=mC%ov3:{sm!,GWJX8Il",
                        "inputs": {
                            "MESSAGE": [
                                1,
                                [
                                    10,
                                    "テストモード投入"
                                ]
                            ]
                        },
                        "fields": {},
                        "shadow": false,
                        "topLevel": false
                    },
                    "MPj%zkY=Bq;of0[jv8i=": {
                        "opcode": "event_whenbroadcastreceived",
                        "next": "M?IxZhj,F47?_2dc4y$0",
                        "parent": null,
                        "inputs": {},
                        "fields": {
                            "BROADCAST_OPTION": [
                                "key_push",
                                "ERr^5y#FezBPsR`y9rZ3"
                            ]
                        },
                        "shadow": false,
                        "topLevel": true,
                        "x": 1032,
                        "y": 435
                    },
                    "M?IxZhj,F47?_2dc4y$0": {
                        "opcode": "looks_say",
                        "next": null,
                        "parent": "MPj%zkY=Bq;of0[jv8i=",
                        "inputs": {
                            "MESSAGE": [
                                1,
                                [
                                    10,
                                    "キー押下"
                                ]
                            ]
                        },
                        "fields": {},
                        "shadow": false,
                        "topLevel": false
                    },
                    "VLb.9FRxALM?V:t36o%J": {
                        "opcode": "event_whenbroadcastreceived",
                        "next": "_}VE.KHH$A4RQYLY*5pk",
                        "parent": null,
                        "inputs": {},
                        "fields": {
                            "BROADCAST_OPTION": [
                                "test_result",
                                "E,NA4t7$,P-X6UoiS,g,"
                            ]
                        },
                        "shadow": false,
                        "topLevel": true,
                        "x": 56,
                        "y": 628
                    },
                    "_}VE.KHH$A4RQYLY*5pk": {
                        "opcode": "looks_say",
                        "next": null,
                        "parent": "VLb.9FRxALM?V:t36o%J",
                        "inputs": {
                            "MESSAGE": [
                                1,
                                [
                                    10,
                                    "テスト結果"
                                ]
                            ]
                        },
                        "fields": {},
                        "shadow": false,
                        "topLevel": false
                    }
                },
                "comments": {},
                "currentCostume": 0,
                "costumes": [
                    {
                        "assetId": "d98c03d5c296b86a3aaed84451191ae8",
                        "name": "28-コスチューム1",
                        "bitmapResolution": 1,
                        "md5ext": "d98c03d5c296b86a3aaed84451191ae8.svg",
                        "dataFormat": "svg",
                        "rotationCenterX": 136,
                        "rotationCenterY": 98.5
                    }
                ],
                "sounds": [],
                "volume": 100,
                "layerOrder": 5,
                "visible": true,
                "x": -124.64315352697095,
                "y": -70.5414364640884,
                "size": 70,
                "direction": 90,
                "draggable": true,
                "rotationStyle": "all around"
            },
            {
                "isStage": false,
                "name": "wiring_replace",
                "variables": {},
                "lists": {},
                "broadcasts": {},
                "blocks": {
                    "H$TJX1[QZcLs9rD|=s[E": {
                        "opcode": "event_whenbroadcastreceived",
                        "next": "C$3y@^D_d(IX?$=;=eK+",
                        "parent": null,
                        "inputs": {},
                        "fields": {
                            "BROADCAST_OPTION": [
                                "connection_off",
                                "d?uu6S.Tpao+c5v0K~P+"
                            ]
                        },
                        "shadow": false,
                        "topLevel": true,
                        "x": 127,
                        "y": 276
                    },
                    "C$3y@^D_d(IX?$=;=eK+": {
                        "opcode": "looks_say",
                        "next": null,
                        "parent": "H$TJX1[QZcLs9rD|=s[E",
                        "inputs": {
                            "MESSAGE": [
                                1,
                                [
                                    10,
                                    "接続off"
                                ]
                            ]
                        },
                        "fields": {},
                        "shadow": false,
                        "topLevel": false
                    },
                    "ZqH}ZCex!qbTS^r4=[ix": {
                        "opcode": "event_whenbroadcastreceived",
                        "next": "H$tj{Q|J${tDTRCq9`1?",
                        "parent": null,
                        "inputs": {},
                        "fields": {
                            "BROADCAST_OPTION": [
                                "connection_change",
                                "**oTu1WO[~do-)cOCpB@"
                            ]
                        },
                        "shadow": false,
                        "topLevel": true,
                        "x": 496,
                        "y": 282
                    },
                    "H$tj{Q|J${tDTRCq9`1?": {
                        "opcode": "looks_say",
                        "next": null,
                        "parent": "ZqH}ZCex!qbTS^r4=[ix",
                        "inputs": {
                            "MESSAGE": [
                                1,
                                [
                                    10,
                                    "接続切り替え"
                                ]
                            ]
                        },
                        "fields": {},
                        "shadow": false,
                        "topLevel": false
                    }
                },
                "comments": {},
                "currentCostume": 0,
                "costumes": [
                    {
                        "assetId": "0d41edd9df92582a87556b5989f4657c",
                        "name": "27-コスチューム1",
                        "bitmapResolution": 1,
                        "md5ext": "0d41edd9df92582a87556b5989f4657c.svg",
                        "dataFormat": "svg",
                        "rotationCenterX": 116,
                        "rotationCenterY": 59
                    }
                ],
                "sounds": [],
                "volume": 100,
                "layerOrder": 6,
                "visible": true,
                "x": 49.73858921161823,
                "y": -91.45303867403317,
                "size": 50,
                "direction": 90,
                "draggable": true,
                "rotationStyle": "all around"
            },
            {
                "isStage": false,
                "name": "dummy_load",
                "variables": {},
                "lists": {},
                "broadcasts": {},
                "blocks": {
                    "~SX),B*r2h^AomS]n-Hm": {
                        "opcode": "event_whenbroadcastreceived",
                        "next": "cStOzsiFafgjhC:3,.(H",
                        "parent": null,
                        "inputs": {},
                        "fields": {
                            "BROADCAST_OPTION": [
                                "dummy_off",
                                "y$V^8G0+?SDWB[1zW-^Q"
                            ]
                        },
                        "shadow": false,
                        "topLevel": true,
                        "x": 265,
                        "y": 290
                    },
                    "cStOzsiFafgjhC:3,.(H": {
                        "opcode": "looks_say",
                        "next": null,
                        "parent": "~SX),B*r2h^AomS]n-Hm",
                        "inputs": {
                            "MESSAGE": [
                                1,
                                [
                                    10,
                                    "疑似負荷off"
                                ]
                            ]
                        },
                        "fields": {},
                        "shadow": false,
                        "topLevel": false
                    },
                    "m]dFJXvIQrhn^d[o5rg?": {
                        "opcode": "event_whenbroadcastreceived",
                        "next": "7FdFW_UeA-ZmSuQ-CSlM",
                        "parent": null,
                        "inputs": {},
                        "fields": {
                            "BROADCAST_OPTION": [
                                "resistance",
                                "N$_X?^!0#?7awcsB^QzF"
                            ]
                        },
                        "shadow": false,
                        "topLevel": true,
                        "x": 589,
                        "y": 288
                    },
                    "7FdFW_UeA-ZmSuQ-CSlM": {
                        "opcode": "looks_say",
                        "next": null,
                        "parent": "m]dFJXvIQrhn^d[o5rg?",
                        "inputs": {
                            "MESSAGE": [
                                1,
                                [
                                    10,
                                    "抵抗出力Ω"
                                ]
                            ]
                        },
                        "fields": {},
                        "shadow": false,
                        "topLevel": false
                    },
                    "-a($Z5BvaL2xRdwO]-(]": {
                        "opcode": "event_whenbroadcastreceived",
                        "next": "e-9{c]c]RvS/l^?y-P)n",
                        "parent": null,
                        "inputs": {},
                        "fields": {
                            "BROADCAST_OPTION": [
                                "resistance_k",
                                "Jn?fFo.M2KHonHD{jc}a"
                            ]
                        },
                        "shadow": false,
                        "topLevel": true,
                        "x": 918,
                        "y": 284
                    },
                    "e-9{c]c]RvS/l^?y-P)n": {
                        "opcode": "looks_say",
                        "next": null,
                        "parent": "-a($Z5BvaL2xRdwO]-(]",
                        "inputs": {
                            "MESSAGE": [
                                1,
                                [
                                    10,
                                    "抵抗出力kΩ"
                                ]
                            ]
                        },
                        "fields": {},
                        "shadow": false,
                        "topLevel": false
                    },
                    "T?-sbCIYWq}ylGv5Pu=p": {
                        "opcode": "event_whenbroadcastreceived",
                        "next": "jx0)=E|p0~9[P*?-gj4w",
                        "parent": null,
                        "inputs": {},
                        "fields": {
                            "BROADCAST_OPTION": [
                                "voltage_m",
                                "Wy(Oah!xP)ab4)`9s%q4"
                            ]
                        },
                        "shadow": false,
                        "topLevel": true,
                        "x": 259,
                        "y": 491
                    },
                    "jx0)=E|p0~9[P*?-gj4w": {
                        "opcode": "looks_say",
                        "next": null,
                        "parent": "T?-sbCIYWq}ylGv5Pu=p",
                        "inputs": {
                            "MESSAGE": [
                                1,
                                [
                                    10,
                                    "電圧出力mV"
                                ]
                            ]
                        },
                        "fields": {},
                        "shadow": false,
                        "topLevel": false
                    },
                    "sZ|z~T6CH0*8g7evn8Y3": {
                        "opcode": "event_whenbroadcastreceived",
                        "next": "{GUfcfBB{.je!q/%^H)-",
                        "parent": null,
                        "inputs": {},
                        "fields": {
                            "BROADCAST_OPTION": [
                                "voltage",
                                "Yk2iT45EWLVwMgy#6b;9"
                            ]
                        },
                        "shadow": false,
                        "topLevel": true,
                        "x": 597,
                        "y": 490
                    },
                    "{GUfcfBB{.je!q/%^H)-": {
                        "opcode": "looks_say",
                        "next": null,
                        "parent": "sZ|z~T6CH0*8g7evn8Y3",
                        "inputs": {
                            "MESSAGE": [
                                1,
                                [
                                    10,
                                    "電圧出力V"
                                ]
                            ]
                        },
                        "fields": {},
                        "shadow": false,
                        "topLevel": false
                    },
                    "b)jg6%/~SNkI5{vb(n~u": {
                        "opcode": "event_whenbroadcastreceived",
                        "next": "R4$P_allKHzqZFB!@orj",
                        "parent": null,
                        "inputs": {},
                        "fields": {
                            "BROADCAST_OPTION": [
                                "ampare_m",
                                "Zx2zPo%Ops4s9~O35.pu"
                            ]
                        },
                        "shadow": false,
                        "topLevel": true,
                        "x": 919,
                        "y": 488
                    },
                    "R4$P_allKHzqZFB!@orj": {
                        "opcode": "looks_say",
                        "next": null,
                        "parent": "b)jg6%/~SNkI5{vb(n~u",
                        "inputs": {
                            "MESSAGE": [
                                1,
                                [
                                    10,
                                    "電流出力mA"
                                ]
                            ]
                        },
                        "fields": {},
                        "shadow": false,
                        "topLevel": false
                    },
                    "EUhf3nnm/fnVVSVq!@%Y": {
                        "opcode": "event_whenbroadcastreceived",
                        "next": "No7vs1^ssqH:l9U(=4.w",
                        "parent": null,
                        "inputs": {},
                        "fields": {
                            "BROADCAST_OPTION": [
                                "pt_100",
                                "]zL*oSF3yc%+XhQ7nM)3"
                            ]
                        },
                        "shadow": false,
                        "topLevel": true,
                        "x": 259,
                        "y": 699
                    },
                    "No7vs1^ssqH:l9U(=4.w": {
                        "opcode": "looks_say",
                        "next": null,
                        "parent": "EUhf3nnm/fnVVSVq!@%Y",
                        "inputs": {
                            "MESSAGE": [
                                1,
                                [
                                    10,
                                    "pt100"
                                ]
                            ]
                        },
                        "fields": {},
                        "shadow": false,
                        "topLevel": false
                    },
                    "e+XHcMQzwybka,qYZQ5%": {
                        "opcode": "event_whenbroadcastreceived",
                        "next": "6BDwz?G{$Ja1:#}(S8Z5",
                        "parent": null,
                        "inputs": {},
                        "fields": {
                            "BROADCAST_OPTION": [
                                "k_thermo",
                                "R9X|aU=^@.qftdN^gfCW"
                            ]
                        },
                        "shadow": false,
                        "topLevel": true,
                        "x": 595,
                        "y": 700
                    },
                    "6BDwz?G{$Ja1:#}(S8Z5": {
                        "opcode": "looks_say",
                        "next": null,
                        "parent": "e+XHcMQzwybka,qYZQ5%",
                        "inputs": {
                            "MESSAGE": [
                                1,
                                [
                                    10,
                                    "k熱電対"
                                ]
                            ]
                        },
                        "fields": {},
                        "shadow": false,
                        "topLevel": false
                    }
                },
                "comments": {},
                "currentCostume": 0,
                "costumes": [
                    {
                        "assetId": "c7dece3cb69276d14dc252b33f53f7ba",
                        "name": "20-コスチューム1",
                        "bitmapResolution": 1,
                        "md5ext": "c7dece3cb69276d14dc252b33f53f7ba.svg",
                        "dataFormat": "svg",
                        "rotationCenterX": 34,
                        "rotationCenterY": 66.5
                    }
                ],
                "sounds": [],
                "volume": 100,
                "layerOrder": 7,
                "visible": true,
                "x": 171.21161825726142,
                "y": -73.70165745856355,
                "size": 100,
                "direction": 90,
                "draggable": true,
                "rotationStyle": "all around"
            },
            {
                "isStage": false,
                "name": "serial1",
                "variables": {},
                "lists": {},
                "broadcasts": {},
                "blocks": {},
                "comments": {},
                "currentCostume": 0,
                "costumes": [
                    {
                        "assetId": "9bd72ff8a6430f4d878f6b3d890a1298",
                        "name": "30-コスチューム1",
                        "bitmapResolution": 1,
                        "md5ext": "9bd72ff8a6430f4d878f6b3d890a1298.svg",
                        "dataFormat": "svg",
                        "rotationCenterX": 150,
                        "rotationCenterY": 34.5
                    }
                ],
                "sounds": [],
                "volume": 100,
                "layerOrder": 4,
                "visible": true,
                "x": -49.78008298755188,
                "y": 23.872928176795586,
                "size": 50,
                "direction": 77.38674997249004,
                "draggable": true,
                "rotationStyle": "all around"
            },
            {
                "isStage": false,
                "name": "serial2",
                "variables": {},
                "lists": {},
                "broadcasts": {},
                "blocks": {},
                "comments": {},
                "currentCostume": 0,
                "costumes": [
                    {
                        "assetId": "9bd72ff8a6430f4d878f6b3d890a1298",
                        "name": "30-コスチューム1",
                        "bitmapResolution": 1,
                        "md5ext": "9bd72ff8a6430f4d878f6b3d890a1298.svg",
                        "dataFormat": "svg",
                        "rotationCenterX": 150,
                        "rotationCenterY": 34.5
                    }
                ],
                "sounds": [],
                "volume": 100,
                "layerOrder": 2,
                "visible": true,
                "x": 28.883817427385907,
                "y": -1.0607734806629754,
                "size": 40,
                "direction": 4.982930323962677,
                "draggable": true,
                "rotationStyle": "all around"
            },
            {
                "isStage": false,
                "name": "serial3",
                "variables": {},
                "lists": {},
                "broadcasts": {},
                "blocks": {},
                "comments": {},
                "currentCostume": 0,
                "costumes": [
                    {
                        "assetId": "9bd72ff8a6430f4d878f6b3d890a1298",
                        "name": "30-コスチューム1",
                        "bitmapResolution": 1,
                        "md5ext": "9bd72ff8a6430f4d878f6b3d890a1298.svg",
                        "dataFormat": "svg",
                        "rotationCenterX": 150,
                        "rotationCenterY": 34.5
                    }
                ],
                "sounds": [],
                "volume": 100,
                "layerOrder": 3,
                "visible": true,
                "x": 81.53941908713695,
                "y": 7.104972375690597,
                "size": 50,
                "direction": 143.43349569840848,
                "draggable": true,
                "rotationStyle": "all around"
            },
            {
                "isStage": false,
                "name": "code_space",
                "variables": {},
                "lists": {},
                "broadcasts": {},
                "blocks": {},
                "comments": {},
                "currentCostume": 0,
                "costumes": [
                    {
                        "assetId": "352faf862b936ddf2d0dc746bbe96ae9",
                        "name": "コスチューム1",
                        "bitmapResolution": 1,
                        "md5ext": "352faf862b936ddf2d0dc746bbe96ae9.svg",
                        "dataFormat": "svg",
                        "rotationCenterX": 52.41306998950816,
                        "rotationCenterY": 14.611555234536866
                    }
                ],
                "sounds": [
                    {
                        "assetId": "83a9787d4cb6f3b7632b4ddfebf74367",
                        "name": "ポップ",
                        "dataFormat": "wav",
                        "format": "",
                        "rate": 48000,
                        "sampleCount": 1123,
                        "md5ext": "83a9787d4cb6f3b7632b4ddfebf74367.wav"
                    }
                ],
                "volume": 100,
                "layerOrder": 8,
                "visible": true,
                "x": -178.253112033195,
                "y": 154.13812154696132,
                "size": 100,
                "direction": 90,
                "draggable": false,
                "rotationStyle": "all around"
            }
        ],
        "monitors": [
            {
                "id": "_=#Gejsh60)s[ui89,^%",
                "mode": "list",
                "opcode": "data_listcontents",
                "params": {
                    "LIST": "測定値"
                },
                "spriteName": null,
                "value": [],
                "width": 0,
                "height": 0,
                "x": 5,
                "y": 5,
                "visible": false
            },
            {
                "id": "3WNEea~yY/B[l#u5L[;*",
                "mode": "list",
                "opcode": "data_listcontents",
                "params": {
                    "LIST": "判定"
                },
                "spriteName": null,
                "value": [],
                "width": 0,
                "height": 0,
                "x": 155,
                "y": 5,
                "visible": false
            }
        ],
        "extensions": [],
        "meta": {
            "semver": "3.0.0",
            "vm": "0.2.0-prerelease.20190102175344",
            "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"
        }
    });
};


export default projectData;
