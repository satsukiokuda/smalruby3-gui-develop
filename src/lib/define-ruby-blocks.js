/**
 * Define Ruby blocks
 * @param {ScratchBlocks} ScratchBlocks target to define Ruby blocks.
 * @return {ScratchBlocks} ScratchBlocks defined ScratchBlocks.
 */
export default function (ScratchBlocks) {
    const name = 'ruby';
    const name2 = 'tester'
    const name3 = 'tester_second'
    if (ScratchBlocks.Categories.hasOwnProperty(name)) {
        return ScratchBlocks;
    }
    if (ScratchBlocks.Categories.hasOwnProperty(name2)) {
        return ScratchBlocks;
    }
    if (ScratchBlocks.Categories.hasOwnProperty(name3)) {
        return ScratchBlocks;
    }
    ScratchBlocks.Categories[name] = name;
    ScratchBlocks.Colours[name] = {
        primary: '#CC0043',
        secondary: '#DB4D7B',
        tertiary: '#7A0028'
    };
    ScratchBlocks.Categories[name2] = name2;
    ScratchBlocks.Colours[name2] = {
        primary: '#1E90FF',
        secondary: '#0000FF',
        tertiary: '#6495ED'
    };
    ScratchBlocks.Categories[name3] = name3;
    ScratchBlocks.Colours[name3] = {
        primary: '#008DB7',
        secondary: '#007199',
        tertiary: '#006888'
    };
    ScratchBlocks.Extensions.register(
        `colours_${name}`,
        ScratchBlocks.ScratchBlocks.VerticalExtensions.colourHelper(name)
    );
    ScratchBlocks.Extensions.register(
        `colours_${name2}`,
        ScratchBlocks.ScratchBlocks.VerticalExtensions.colourHelper(name2)
    );
    ScratchBlocks.Extensions.register(
        `colours_${name3}`,
        ScratchBlocks.ScratchBlocks.VerticalExtensions.colourHelper(name3)
    );

    ////////////////////Ruby Blocks//////////////////////
    ScratchBlocks.Blocks.ruby_statement = {
        init: function () {
            this.jsonInit({
                type: 'ruby_statement',
                message0: '%1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'STATEMENT'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_wifi_enterprise = {
        init: function () {
            this.jsonInit({
                type: 'mruby_wifi_enterprise',
                message0: '企業Wi-fiに接続する SSID:%1 ユーザー名:%2 パスワード:%3',
                args0: [
                    {
                        type: 'input_value',
                        name: 'SSID'
                    },
                    {
                        type: 'input_value',
                        name: 'USERNAME'
                    },
                    {
                        type: 'input_value',
                        name: 'PASSWORD'
                    },
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_wifi_personal = {
        init: function () {
            this.jsonInit({
                type: 'mruby_wifi_personal',
                message0: '個人Wi-fiに接続する SSID:%1 パスワード:%2',
                args0: [
                    {
                        type: 'input_value',
                        name: 'SSID'
                    },
                    {
                        type: 'input_value',
                        name: 'PASSWORD'
                    },
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_init_output = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_init_output',
                message0: '%1を出力モードで使う',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: [
                            ['LED1', '13'],
                            ['LED2', '12'],
                            ['LED3', '14'],
                            ['LED4', '27'],
                            ['LED5', '26'],
                            ['LED6', '25'],
                            ['LED7', '33'],
                            ['LED8', '32'],
                            ['ブザー', '15'],
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_init_input = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_init_input',
                message0: '%1を入力モードで使う',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: [
                            ['スイッチ1', '34'],
                            ['スイッチ2', '35'],
                            ['スイッチ3', '18'],
                            ['スイッチ4', '19']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_lcd_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_lcd_init',
                message0: 'モニターを使う',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_init_adc = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_init_adc',
                message0: '温度計を使う',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_sht_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_init_sht',
                message0: '%1ポートの拡張温度センサを使う',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SHT',
                        options: [
                            ['1', '2,4'],
                            ['2', '5,23']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_set_level = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_set_level',
                message0: '%1を%2にする',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: [
                            ['LED1', '13'],
                            ['LED2', '12'],
                            ['LED3', '14'],
                            ['LED4', '27'],
                            ['LED5', '26'],
                            ['LED6', '25'],
                            ['LED7', '33'],
                            ['LED8', '32']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
                            ['ON', '1'],
                            ['OFF', '0']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_sw_state = {
        init: function() {
            this.jsonInit({
                type: 'mrubyc_sw_state',
                message0: '%1の状態',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SW',
                        options: [
                            ['スイッチ1', '34'],
                            ['スイッチ2', '35'],
                            ['スイッチ3', '18'],
                            ['スイッチ4', '19']
                        ]
                    },
              ],
              extensions: ['colours_ruby', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_sound = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_sound',
                message0: '%1の音を%2ミリ秒鳴らす',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SOUND',
                        options: [
                            ['ド', '261'],
                            ['レ', '294'],
                            ['ミ', '329'],
                            ['ファ', '349'],
                            ['ソ', '391'],
                            ['ラ', '440'],
                            ['シ', '493'],
                            ['高いド', '523']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'TIME'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_read_adc = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_read_adc',
                message0: '温度計の温度',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_sht_get_temp = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_sht_get_temp',
                message0: '拡張温度センサの気温',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_sht_get_humi = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_sht_get_temp',
                message0: '拡張温度センサの湿度  気温：%1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'TEMP'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_rtc_get_time = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_rtc_get_time',
                message0: '現在の時刻',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_lcd_write = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_lcd_write',
                message0: 'モニターの%1行目に%2と書く',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'LINE',
                        options: [
                            ['1', 'i2c.lcd_write(0x00, [ 0x01, 0x80 ] )\n'],
                            ['2', 'i2c.lcd_write(0x00, [ 0x80 + 0x40 ] )\n']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'TEXT'
                    },
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_lcd_write_var = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_lcd_write',
                message0: 'モニターの%1行目に%2と書く%3(変数用)',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'LINE',
                        options: [
                            ['1', 'i2c.lcd_write(0x00, [ 0x01, 0x80 ] )\n'],
                            ['2', 'i2c.lcd_write(0x00, [ 0x80 + 0x40 ] )\n']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'TEXT'
                    },
                    {
                        type: 'input_value',
                        name: 'VAR'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_lcd_clean = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_lcd_clean',
                message0: 'モニターの文字を消す',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_ambient_send_to = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_ambient_send_to',
                message0: 'AmbientのチャネルID：%1 リードキー：%2 ライトキー：%3',
                args0: [
                    {
                        type: 'input_value',
                        name: 'ID'
                    },
                    {
                        type: 'input_value',
                        name: 'RKEY'
                    },
                    {
                        type: 'input_value',
                        name: 'WKEY'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_ambient_add_data = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_ambient_add_data',
                message0: '送るデータ %1%2 %3%4',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'D1',
                        options: [
                            ['d1', 'd1'],
                            ['d2', 'd2'],
                            ['d3', 'd3'],
                            ['d4', 'd4'],
                            ['d5', 'd5'],
                            ['d6', 'd6'],
                            ['d7', 'd7'],
                            ['d8', 'd8']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'DATA1'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'D2',
                        options: [
                            ['d1', 'd1'],
                            ['d2', 'd2'],
                            ['d3', 'd3'],
                            ['d4', 'd4'],
                            ['d5', 'd5'],
                            ['d6', 'd6'],
                            ['d7', 'd7'],
                            ['d8', 'd8']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'DATA2'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_ambient_data_send = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_ambient_data_send',
                message0: 'Ambientにデータを送信',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };
    
    ScratchBlocks.Blocks.mrubyc_while = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_while',
                message0: '%1の間繰り返す',
                message1: '%1',
                message2: '',
                args0: [
                    {
                        type: 'input_value',
                        name: 'CONDITION'
                    }
                ],
                args1: [
                    {
                        type: 'input_statement',
                        name: 'SUBSTACK'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_puts= {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_puts',
                message0: 'puts %1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'OUTPUT'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_puts_var= {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_puts_var',
                message0: 'puts_var %1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'OUTPUT'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.ruby_statement_with_block = {
        init: function () {
            this.jsonInit({
                type: 'ruby_statement_with_block',
                message0: '%1 do %2',
                message1: '%1',
                message2: 'end',
                args0: [
                    {
                        type: 'input_value',
                        name: 'STATEMENT'
                    },
                    {
                        type: 'input_value',
                        name: 'ARGS'
                    }
                ],
                args1: [
                    {
                        type: 'input_statement',
                        name: 'SUBSTACK'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.ruby_expression = {
        init: function () {
            this.jsonInit({
                type: 'ruby_expression',
                message0: '%1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'EXPRESSION'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_boolean']
            });
        }
    };

    ScratchBlocks.Blocks.ruby_range = {
        init: function () {
            this.jsonInit({
                type: 'ruby_range',
                message0: '%1..%2',
                args0: [
                    {
                        type: 'input_value',
                        name: 'FROM'
                    },
                    {
                        type: 'input_value',
                        name: 'TO'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_boolean']
            });
        }
    };

    ScratchBlocks.Blocks.ruby_exclude_range = {
        init: function () {
            this.jsonInit({
                type: 'ruby_exclude_range',
                message0: '%1...%2',
                args0: [
                    {
                        type: 'input_value',
                        name: 'FROM'
                    },
                    {
                        type: 'input_value',
                        name: 'TO'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_boolean']
            });
        }
    };

    /////////////////////////tester Blocks/////////////////////////////
    ScratchBlocks.Blocks.init_figure_number = {
        init: function () {
            this.jsonInit({
                type: 'init_figure_number',
                message0: '図番:%1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'figure_number'
                    },
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.test_finish = {
        init: function () {
            this.jsonInit({
                type: 'test_finish',
                message0: 'テスト完了',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.measure_range_check = {
        init: function () {
            this.jsonInit({
                type: 'measure_range_check',
                message0: '測定値%1が%2～%3',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'measure',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'range_first'
                    },
                    {
                        type: 'input_value',
                        name: 'range_last'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.choose_number = {
        init: function () {
            this.jsonInit({
                type: 'choose_number',
                message0: 'テスト番号%1へ',
                args0: [
                    {
                        type: 'input_value',
                        name: 'choose_number'
                    },
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.choose_item = {
        init: function () {
            this.jsonInit({
                type: 'choose_item',
                message0: 'テスト内項目%1へ',
                args0: [
                    {
                        type: 'input_value',
                        name: 'choose_item'
                    },
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.set_clock = {
        init: function () {
            this.jsonInit({
                type: 'set_clock',
                message0: '時計合わせを行う',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.test_mode = {
        init: function () {
            this.jsonInit({
                type: 'test_mode',
                message0: 'テストモードへ投入する',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.key_push = {
        init: function () {
            this.jsonInit({
                type: 'key_push',
                message0: '%1キーを押す',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'key_push',
                        options: [
                            ['RETURN', 'KEY_RETURN'],
                            ['SET', 'KEY_SET'],
                            ['UP', 'KEY_UP'],
                            ['DOWN', 'KEY_DOWN'],
                            ['エンコーダUP', 'KEY_UP_2'],
                            ['エンコーダDOWN', 'KEY_DOWN_2'],
                            ['メモリ初期化', 'KEY_INIT'],
                            ['調整値クリア', 'KEY_CLR'],
                            ['調整', 'KEY_ADJUST'],
                            ['リセット', 'KEY_RESET']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.test_result = {
        init: function () {
            this.jsonInit({
                type: 'test_result',
                message0: 'テスト結果%1?',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'test_result',
                        options: [
                            ['待機中', 'RESULT_WAIT'],
                            ['実行中', 'RESULT_DOING'],
                            ['OK', 'RESULT_OK'],
                            ['NG', 'RESULT_NG']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.load_output_off = {
        init: function () {
            this.jsonInit({
                type: 'load_output_off',
                message0: '疑似負荷出力OFF',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.resistance_output = {
        init: function () {
            this.jsonInit({
                type: 'resistance_output',
                message0: '抵抗出力%1.%2Ω',
                args0: [
                    {
                        type: 'input_value',
                        name: 'num_main'

                    },
                    {
                        type: 'field_dropdown',
                        name: 'num_period',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.resistance_output_k = {
        init: function () {
            this.jsonInit({
                type: 'resistance_output_k',
                message0: '抵抗出力%1.%2%3%4kΩ',
                args0: [
                    {
                        type: 'input_value',
                        name: 'num_main'

                    },
                    {
                        type: 'field_dropdown',
                        name: 'num_period_1',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'num_period_2',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'num_period_3',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.voltage_output_m = {
        init: function () {
            this.jsonInit({
                type: 'voltage_output_m',
                message0: '電圧出力%1.%2%3%4mV',
                args0: [
                    {
                        type: 'input_value',
                        name: 'num_main'

                    },
                    {
                        type: 'field_dropdown',
                        name: 'num_period_1',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'num_period_2',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'num_period_3',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.voltage_output = {
        init: function () {
            this.jsonInit({
                type: 'voltage_output',
                message0: '電圧出力%1.%2%3%4V',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'num_main',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'num_period_1',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'num_period_2',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'num_period_3',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.current_output_m = {
        init: function () {
            this.jsonInit({
                type: 'current_output_m',
                message0: '電流出力%1.%2%3%4mA',
                args0: [
                    {
                        type: 'input_value',
                        name: 'num_main'

                    },
                    {
                        type: 'field_dropdown',
                        name: 'num_period_1',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'num_period_2',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'num_period_3',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.pt_output = {
        init: function () {
            this.jsonInit({
                type: 'pt_output',
                message0: 'Pt100 出力%1.%2℃',
                args0: [
                    {
                        type: 'input_value',
                        name: 'num_main'

                    },
                    {
                        type: 'field_dropdown',
                        name: 'num_period',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.k_output = {
        init: function () {
            this.jsonInit({
                type: 'k_output',
                message0: 'K熱電対出力%1.%2℃',
                args0: [
                    {
                        type: 'input_value',
                        name: 'num_main'

                    },
                    {
                        type: 'field_dropdown',
                        name: 'num_period',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.connection_off = {
        init: function () {
            this.jsonInit({
                type: 'connection_off',
                message0: '接続をOFFにする',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.connection_change = {
        init: function () {
            this.jsonInit({
                type: 'connection_change',
                message0: '接続をチャンネル%1に切り替える',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'channel',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.tester_test_result = {
        init: function () {
            this.jsonInit({
                type: 'test_result',
                message0: '%1を表示',
                args0: [
                    {
                        type: 'input_value',
                        name: 'TEST_RESULT'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester', 'shape_statement']
            });
        }
    };

    /////////////////////////tester second Blocks/////////////////////////////
    ScratchBlocks.Blocks.second_init_figure_number = {
        init: function () {
            this.jsonInit({
                type: 'init_figure_number',
                message0: '図番:%1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'figure_number'
                    },
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester_second', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.second_choose_number = {
        init: function () {
            this.jsonInit({
                type: 'choose_number',
                message0: 'テスト番号%1を選択する',
                args0: [
                    {
                        type: 'input_value',
                        name: 'choose_number'
                    },
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester_second', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.second_choose_item = {
        init: function () {
            this.jsonInit({
                type: 'choose_item',
                message0: 'テスト内項目%1を選択する',
                args0: [
                    {
                        type: 'input_value',
                        name: 'choose_item'
                    },
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester_second', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.second_test_mode = {
        init: function () {
            this.jsonInit({
                type: 'test_mode',
                message0: 'テストモードへ投入する',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester_second', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.second_key_push = {
        init: function () {
            this.jsonInit({
                type: 'key_push',
                message0: '%1キーを押す',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'key_push',
                        options: [
                            ['RETURN', 'KEY_RETURN'],
                            ['SET', 'KEY_SET'],
                            ['UP', 'KEY_UP'],
                            ['DOWN', 'KEY_DOWN'],
                            ['エンコーダUP', 'KEY_UP_2'],
                            ['エンコーダDOWN', 'KEY_DOWN_2'],
                            ['メモリ初期化', 'KEY_INIT'],
                            ['調整値クリア', 'KEY_CLR'],
                            ['調整', 'KEY_ADJUST'],
                            ['リセット', 'KEY_RESET']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester_second', 'output_number']
            });
        }
    };


    ScratchBlocks.Blocks.second_test_exit = {
        init: function () {
            this.jsonInit({
                type: 'test_exit',
                message0: 'テストを終了させる',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester_second', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.second_test_finish = {
        init: function () {
            this.jsonInit({
                type: 'test_finish',
                message0: 'テストを完了する',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester_second', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.second_measure_check = {
        init: function () {
            this.jsonInit({
                type: 'measure_check',
                message0: '測定値%1を測る',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'measure',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester_second', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.second_set_clock = {
        init: function () {
            this.jsonInit({
                type: 'set_clock',
                message0: '%1を%2に合わせる',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'time_type',
                        options: [
                            ['年', 'EDIT_CLK_YEAR'],
                            ['月', 'EDIT_CLK_MONTH'],
                            ['日', 'EDIT_CLK_DAY'],
                            ['曜日', 'EDIT_CLK_WDAY'],
                            ['時', 'EDIT_CLK_HOUR'],
                            ['分', 'EDIT_CLK_MIN'],
                            ['秒', 'EDIT_CLK_SEC']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'time_var'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester_second', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.second_load_output_off = {
        init: function () {
            this.jsonInit({
                type: 'load_output_off',
                message0: '疑似負荷出力をOFFにする',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester_second', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.second_resistance_output = {
        init: function () {
            this.jsonInit({
                type: 'resistance_output',
                message0: '抵抗出力%1.%2Ωを加える',
                args0: [
                    {
                        type: 'input_value',
                        name: 'num_main'

                    },
                    {
                        type: 'field_dropdown',
                        name: 'num_period',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester_second', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.second_resistance_output_k = {
        init: function () {
            this.jsonInit({
                type: 'resistance_output_k',
                message0: '抵抗出力%1.%2%3%4kΩを加える',
                args0: [
                    {
                        type: 'input_value',
                        name: 'num_main'

                    },
                    {
                        type: 'field_dropdown',
                        name: 'num_period_1',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'num_period_2',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'num_period_3',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester_second', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.second_voltage_output_m = {
        init: function () {
            this.jsonInit({
                type: 'voltage_output_m',
                message0: '電圧出力%1.%2%3%4mVを加える',
                args0: [
                    {
                        type: 'input_value',
                        name: 'num_main'

                    },
                    {
                        type: 'field_dropdown',
                        name: 'num_period_1',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'num_period_2',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'num_period_3',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester_second', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.second_voltage_output = {
        init: function () {
            this.jsonInit({
                type: 'voltage_output',
                message0: '電圧出力%1.%2%3%4Vを加える',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'num_main',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'num_period_1',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'num_period_2',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'num_period_3',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester_second', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.second_current_output_m = {
        init: function () {
            this.jsonInit({
                type: 'current_output_m',
                message0: '電流出力%1.%2%3%4mAを加える',
                args0: [
                    {
                        type: 'input_value',
                        name: 'num_main'

                    },
                    {
                        type: 'field_dropdown',
                        name: 'num_period_1',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'num_period_2',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'num_period_3',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester_second', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.second_pt_output = {
        init: function () {
            this.jsonInit({
                type: 'pt_output',
                message0: 'Pt100 出力%1.%2℃を加える',
                args0: [
                    {
                        type: 'input_value',
                        name: 'num_main'

                    },
                    {
                        type: 'field_dropdown',
                        name: 'num_period',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester_second', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.second_k_output = {
        init: function () {
            this.jsonInit({
                type: 'k_output',
                message0: 'K熱電対出力%1.%2℃を加える',
                args0: [
                    {
                        type: 'input_value',
                        name: 'num_main'

                    },
                    {
                        type: 'field_dropdown',
                        name: 'num_period',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester_second', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.second_connection_off = {
        init: function () {
            this.jsonInit({
                type: 'connection_off',
                message0: '疑似負荷の接続をOFFにする',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester_second', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.second_connection_change = {
        init: function () {
            this.jsonInit({
                type: 'connection_change',
                message0: '疑似負荷の接続をチャンネル%1に切り替える',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'channel',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester_second', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.second_expression = {
        init: function () {
            this.jsonInit({
                type: 'ruby_expression',
                message0: '%1が%2',
                args0: [
                    {
                        type: 'input_value',
                        name: 'result',
                    },
                    {
                        type: 'field_dropdown',
                        name: 'ok_ng',
                        options: [
                            ['成功', 'true'],
                            ['失敗', 'false'],
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester_second', 'output_boolean']
            });
        }
    };

    ScratchBlocks.Blocks.second_measure_num = {
        init: function () {
            this.jsonInit({
                type: 'measure_num',
                message0: '測定値',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester_second', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.second_test_process = {
        init: function () {
            this.jsonInit({
                type: 'test_process',
                message0: '%1をして 結果を%2に保存する',
                args0: [
                    {
                        type: 'input_value',
                        name: 'process'

                    },
                    {
                        type: 'input_value',
                        name: 'result_var',
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_tester_second', 'shape_statement']
            });
        }
    };


    return ScratchBlocks;
}
